import React from 'react';

import styles from "./stepsTab.module.css"

function Step(props) {
    let click = ()=>{
        props.handle(props.stepIndex)
    }
    return (
        <div className={`${styles.step} ${props.selected?styles.selected:""}`} onClick={click}>
            <div className={styles.stepHead}>
                <span className={styles.id}>{props.stepIndex}</span>
                <span className={styles.stepType}>{props.step.type}</span>
            </div>
            <span className={styles.stepPreview}>{props.step.components[0]?.text??"No preview"}</span>
        </div>
    );
}

export default Step;