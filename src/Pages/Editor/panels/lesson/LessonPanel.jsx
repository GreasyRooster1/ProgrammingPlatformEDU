import React, {useState} from 'react';
import styles from "./lessonPanel.module.css";
import MedTitle from "../../../../components/text/MedTitle.jsx";
import CodePanel from "../code/CodePanel.jsx";
import CodeBlock from "../../../../components/CodeBlock.jsx";
import Markdown from "../../../../components/Markdown.jsx";
import StepComponent from "./StepComponent.jsx";

function LessonPanel(props) {
    const [currentStep, setCurrentStep] = useState(props.savedStep);

    return (
        <div className={styles.lesson}>
            {
                props.lessonData.steps[currentStep-1].components.map((component, index) => (
                    <StepComponent key={index} component={component}/>
                ))
            }
        </div>
    );
}

export default LessonPanel;