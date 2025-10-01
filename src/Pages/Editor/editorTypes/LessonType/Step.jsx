import React from 'react';

import styles from "./stepsTab.module.css"

function Step(props) {
    return (
        <div className={styles.step}>
            <span className={styles.stepTitle}>{props.step.name}</span>
            <span className={styles.stepType}>{props.step.type}</span>
        </div>
    );
}

export default Step;