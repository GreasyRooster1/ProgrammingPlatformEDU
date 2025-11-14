import React, {useState} from 'react';
import styles from "./lessonPanel.module.css";
import MedTitle from "../../../../components/text/MedTitle.jsx";
import CodePanel from "../code/CodePanel.jsx";
import CodeBlock from "../../../../components/CodeBlock.jsx";
import LessonMarkdown from "../../../../components/LessonMarkdown.jsx";
import StepComponent from "./StepComponent.jsx";
import {ArrowLeftIcon, ArrowRightIcon} from "@radix-ui/react-icons"
import {Blockquote, Button, Flex, Separator} from "@radix-ui/themes";
import AllSteps from "./AllSteps.jsx";
import StepView from "./StepView.jsx";

function LessonPanel(props) {
    const [currentStep, setCurrentStep] = useState(props.savedStep);
    const [isViewingAll, setIsViewingAll] = useState(false);

    if(isViewingAll) {
        return (<AllSteps currentStep={currentStep} setCurrentStep={setCurrentStep} lessonData={props.lessonData}/>)
    }
    return (<StepView currentStep={currentStep} setCurrentStep={setCurrentStep} setIsViewingAll={setIsViewingAll} lessonData={props.lessonData}/>)
}

export default LessonPanel;