import React from 'react';
import HeaderFlex from "../../../../components/headerFlex/HeaderFlex.jsx";
import styles from "./outputPanel.module.css";

import play from "/icons/Play.svg"
import stop from "/icons/Stop.svg"
import link from "/icons/ExternalLink.svg"

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