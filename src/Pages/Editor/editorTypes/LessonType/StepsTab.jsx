import React from 'react';
import styles from './stepsTab.module.css';
import Step from "./Step.jsx";

function StepsTab(props) {
    return (
        <div className={styles.body}>
            {
                props.lessonData.steps.map((step,index) => (
                    <Step key={index} step={step}/>
                ))
            }
        </div>
    );
}

export default StepsTab;