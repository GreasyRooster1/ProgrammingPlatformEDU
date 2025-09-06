import React from 'react';
import HeaderFlex from "../../../../components/headerFlex/HeaderFlex.jsx";
import styles from "./outputPanel.module.css";


function OutputPanel(props) {
    return (
        <div className={styles.body}>
            <div className={styles.executorContainer}>
                {props.executor}
            </div>
        </div>
    );
}

export default OutputPanel;