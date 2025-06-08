import React from 'react';
import styles from "./step.module.css"
import HeaderFlex from "../../../components/headerFlex/HeaderFlex.jsx";

function Step(props) {
    return (
        <HeaderFlex className={`${styles[props.type]} ${styles.step}`} headClassName={styles.head} bodyClassName={styles.content} headContent={
            <>
                <span>{props.title}</span>
                <span className={styles.type}>{props.type}</span>
            </>
        }>
            <div className={styles.textContent}>
                {props.children}
            </div>
            <div className={styles.imageContent}>
                <img src={props.image}/>
            </div>
        </HeaderFlex>
    );
}

export default Step;