import React from 'react';
import styles from './stepPreview.module.css'
import StepComponent from "../../panels/lesson/StepComponent.jsx";
import Loading from "../../../../Loading.jsx";
import MedTitle from "../../../../components/text/MedTitle.jsx";

function StepPreview(props) {

    if(!props.stepData){
        return (
            <div className={styles.selectPrompt}>
                <MedTitle>Select A Step...</MedTitle>
            </div>
        )
    }

    return (
        <div className={styles.preview}>
        {
            props.stepData.components.map((component, index) => (
                <StepComponent key={index} component={component} />
            ))
        }
        </div>
    );
}

export default StepPreview;