import React from 'react';

import styles from "./stepsTab.module.css"
import LimitText from "../../../../components/text/LimitText.jsx";

function Step(props) {
    let click = ()=>{
        props.handle(props.stepIndex)
    }
    return (
        <div className={`${styles.step} ${props.selected?styles.selected:""}`} onClick={click}>
            <div className={styles.stepHead}>
                <span className={styles.id}>{props.stepIndex+1}</span>
                <span className={styles.stepType}>{props.step.type}</span>
            </div>
            <LimitText className={styles.stepPreview} maxLength={20}>{props.step.components[0]?.text??"No preview"}</LimitText>
        </div>
    );
}

export default Step;