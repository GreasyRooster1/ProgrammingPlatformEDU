import React from 'react';

import styles from "./stepsTab.module.css"

function Step(props) {
    let click = ()=>{
        props.handle(props.stepIndex)
    }
    return (
        <div className={`${styles.step} ${props.selected?styles.selected:""}`} onClick={click}>
            <span className={styles.stepTitle}>{props.step.name}</span>
            <span className={styles.stepType}>{props.step.type}</span>
        </div>
    );
}

export default Step;