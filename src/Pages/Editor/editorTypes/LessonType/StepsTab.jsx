import React, {useState} from 'react';
import styles from './stepsTab.module.css';
import Step from "./Step.jsx";
import MedTitle from "../../../../components/text/MedTitle.jsx";
import Loading from "../../../../Loading.jsx";
import PrimaryButton from "../../../../components/buttons/PrimaryButton.jsx";

function StepsTab(props) {
    let clickHandle = (index)=>{
        props.setSelectedStep(index);
    }

    if(props.lessonData===null){
        return <Loading />
    }

    return (
        <div className={styles.body}>
            <MedTitle className={styles.title}>Steps ({props.lessonData.steps.length})</MedTitle>
            <div className={styles.stepsContainer}>
                {
                    props.lessonData.steps.map((step,index) => (
                        <Step key={index} step={step} stepIndex={index} selected={props.selectedStep===index} handle={clickHandle} />
                    ))
                }
                <div className={styles.addButton}>
                    +
                </div>
            </div>
        </div>
    );
}

export default StepsTab;