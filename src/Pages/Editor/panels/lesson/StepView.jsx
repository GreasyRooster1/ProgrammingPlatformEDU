import React from 'react';
import styles from "./lessonPanel.module.css";
import {Button, Flex} from "@radix-ui/themes/dist/esm/index.d.ts";
import StepComponent from "./StepComponent.jsx";
import {ArrowLeftIcon, ArrowRightIcon} from "@radix-ui/react-icons";

function StepView(props) {
    const nextStep = () => {
        props.setCurrentStep(prevState => Math.min(prevState + 1,props.lessonData.steps.length));
    }
    const prevStep = () => {
        props.setCurrentStep(prevState => Math.max(prevState - 1,1));
    }
    return (
        <div className={styles.lesson}>
            <Flex direction="column">
                {
                    props.lessonData.steps[props.currentStep-1].components.map((component, index) => (
                        <StepComponent key={index} component={component}/>
                    ))
                }
            </Flex>
            <Flex justify="between" className={styles.bottomBar}>
                <Button variant="outline" onClick={prevStep}>
                    <ArrowLeftIcon />
                    Prev
                </Button>
                <Button variant="soft" onClick={() => props.setIsViewingAll(true)}>
                    {props.currentStep}
                </Button>
                <Button variant="outline" onClick={nextStep}>
                    Next
                    <ArrowRightIcon />
                </Button>
            </Flex>
        </div>
    );
}

export default StepView;