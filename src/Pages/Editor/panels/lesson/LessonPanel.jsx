import React, {useState} from 'react';
import styles from "./lessonPanel.module.css";
import MedTitle from "../../../../components/text/MedTitle.jsx";
import CodePanel from "../code/CodePanel.jsx";
import CodeBlock from "../../../../components/CodeBlock.jsx";
import LessonMarkdown from "../../../../components/LessonMarkdown.jsx";
import StepComponent from "./StepComponent.jsx";
import {ArrowLeftIcon, ArrowRightIcon} from "@radix-ui/react-icons"
import {Blockquote, Button, Flex, Separator, TextField} from "@radix-ui/themes";
import AllSteps from "./AllSteps.jsx";
import StepView from "./StepView.jsx";

function LessonPanel(props) {
    const [currentStep, setCurrentStep] = useState(props.savedStep);
    const [textBoxContent, setTextBoxContent] = useState(1);

    const nextStep = () => {
        setCurrentStep(prevState => Math.min(prevState + 1,props.lessonData.steps.length));
    }
    const prevStep = () => {
        setCurrentStep(prevState => Math.max(prevState - 1,1));
    }

    const setStep = (e) => {
        let val = e.target.value;
        setCurrentStep(e.target.value);
    }
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
                <Button variant="outline" onClick={prevStep}>
                    <ArrowLeftIcon />
                    Prev
                </Button>
                <TextField.Root variant="soft" value={currentStep} onBlur={setStep} inputMode="numeric" min={1} max={props.lessonData.steps.length}>
                </TextField.Root>
                <Button variant="outline" onClick={nextStep}>
                    Next
                    <ArrowRightIcon />
                </Button>
            </Flex>
        </div>
    );
}

export default LessonPanel;