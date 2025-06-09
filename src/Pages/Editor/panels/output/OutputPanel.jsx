import React from 'react';
import HeaderFlex from "../../../../components/headerFlex/HeaderFlex.jsx";
import styles from "./outputPanel.module.css";

function OutputPanel() {
    return (
        <HeaderFlex headClassName={styles.head} bodyClassName={styles.body} headContent={
            <>
                <div className={styles.controlButtons}>

                </div>
                <div className={styles.popButtons}>

                </div>
            </>
        }>

        </HeaderFlex>
    );
}

export default OutputPanel;