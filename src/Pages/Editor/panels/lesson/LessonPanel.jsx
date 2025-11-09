import React, {useState} from 'react';
import styles from "./lessonPanel.module.css";
import MedTitle from "../../../../components/text/MedTitle.jsx";
import CodePanel from "../code/CodePanel.jsx";
import CodeBlock from "../../../../components/CodeBlock.jsx";
import LessonMarkdown from "../../../../components/LessonMarkdown.jsx";
import StepComponent from "./StepComponent.jsx";
import {ArrowLeftIcon, ArrowRightIcon} from "@radix-ui/react-icons"
import {Button, Flex} from "@radix-ui/themes";

function LessonPanel(props) {
    const [currentStep, setCurrentStep] = useState(props.savedStep);

    return (
        <div className={styles.lesson}>
            <Flex direction="column">
                {
                    props.lessonData.steps[currentStep-1].components.map((component, index) => (
                        <StepComponent key={index} component={component}/>
                    ))
                }
            </Flex>
            <Flex justify="between" className={styles.bottomBar}>
                <Button variant="outline">
                    <ArrowLeftIcon />
                    Prev
                </Button>

                <Button variant="outline">
                    Next
                    <ArrowRightIcon />
                </Button>
            </Flex>
        </div>
    );
}

export default LessonPanel;