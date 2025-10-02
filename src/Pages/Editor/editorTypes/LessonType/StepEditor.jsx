import React from 'react';
import styles from './stepEditor.module.css'
import MedTitle from "../../../../components/text/MedTitle.jsx";
import StepComponent from "../../panels/lesson/StepComponent.jsx";
import EditableStep from "./EditableStep.jsx";

function StepEditor(props) {
    if(!props.stepData){
        return (
            <div className={styles.selectPrompt}>
                <MedTitle>Select A Step...</MedTitle>
            </div>
        )
    }

    return (
        <div className={styles.editor}>
            {
                props.stepData.components.map((component, index) => (
                    <EditableStep key={index} component={component} />
                ))
            }
        </div>
    );
}

export default StepEditor;