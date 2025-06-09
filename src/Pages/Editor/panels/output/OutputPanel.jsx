import React from 'react';
import HeaderFlex from "../../../../components/headerFlex/HeaderFlex.jsx";
import styles from "./outputPanel.module.css";

import play from "/icons/Play.svg"
import stop from "/icons/Stop.svg"
import link from "/icons/ExternalLink.svg"

function OutputPanel() {
    return (
        <HeaderFlex className={styles.wrapper} headClassName={styles.head} bodyClassName={styles.body} headContent={
            <>
                <div className={`${styles.controlButtons} ${styles.iconContainers}`}>
                    <img src={play}/>
                    <img src={stop}/>
                </div>
                <div className={`${styles.popButtons} ${styles.iconContainers}`}>
                    <img src={link}/>
                </div>
            </>
        }>
            <iframe className={styles.frame} src="https://example.com"></iframe>
        </HeaderFlex>
    );
}

export default OutputPanel;