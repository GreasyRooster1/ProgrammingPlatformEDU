import React, {useEffect, useState} from 'react';
import styles from './stepEditor.module.css'
import MedTitle from "../../../../components/text/MedTitle.jsx";
import StepComponent from "../../panels/lesson/StepComponent.jsx";
import EditableComponent from "./EditableComponent.jsx";

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
                    <EditableComponent
                        key={index}
                        index={index}
                        component={component}
                        stepData={props.stepData}
                        setStepData={props.setStepData}
                        selectedStep={props.selectedStep}
                    />
                ))
            }
            <div className={styles.addButton}>
                +
            </div>
        </div>
    );
}

export default StepEditor;