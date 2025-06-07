import React from 'react';
import styles from "./step.module.css"

function Step(props) {
    return (
        <div className={`${styles[props.type]} ${styles.step}`}>
            <div className={styles.head}>
                <span>{props.title}</span>
                <span className={styles.type}>{props.type}</span>
            </div>
            <div className={styles.content}>
                <div className={styles.textContent}>
                    {props.children}
                </div>
                <div className={styles.imageContent}>
                    <img src={props.image} />
                </div>
            </div>
        </div>
    );
}

export default Step;