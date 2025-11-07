import React, {useState} from 'react';
import styles from './stepsTab.module.css';
import Step from "./Step.jsx";
import MedTitle from "../../../../components/text/MedTitle.jsx";
import Loading from "../../../../components/Loading.jsx";
import PrimaryButton from "../../../../components/buttons/PrimaryButton.jsx";

function StepsList(props) {
    let clickHandle = (index)=>{
        props.setSelectedStep(index);
    }

    if(props.lessonData===null){
        return <Loading />
    }

    const addSteo = ()=>{
        props.setSelectedStep(props.lessonData.steps.length);
        let newLessonData = {...props.lessonData};
        newLessonData.steps.push({
            type:"info",
            components:[
                {
                    type:"title",
                    text:"Title",
                }
            ]
        });
        props.setLessonData(newLessonData);
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
                <div className={styles.addButton} onClick={addSteo}>
                    +
                </div>
            </div>
        </div>
    );
}

export default StepsList;