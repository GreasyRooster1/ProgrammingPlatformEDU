import React, {useState} from 'react';
import styles from './stepsTab.module.css';
import Step from "./Step.jsx";

function StepsTab(props) {
    const [selectedStep, setSelectedStep] = useState(null);
    let clickHandle = (index)=>{
        setSelectedStep(index);
    }

    return (
        <div className={styles.body}>
            <span className={styles.title}>Steps ({props.lessonData.steps.length})</span>
            <div className={styles.stepGrid}>
                {
                    props.lessonData.steps.map((step,index) => (
                        <Step key={index} step={step} stepIndex={index} selected={selectedStep===index} handle={clickHandle} />
                    ))
                }
            </div>
        </div>
    );
}

export default StepsTab;