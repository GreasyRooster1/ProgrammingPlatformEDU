import React from 'react';
import styles from "./pending.module.css"
import ScreenPage from "./screenPage/ScreenPage.jsx";

function LoadingScreen() {
    return (
        <ScreenPage className={styles.background}>
            <div className={styles.textContainer}>
                <span className={styles.text}>Loading...</span>
            </div>
        </ScreenPage>
    );
}

export default LoadingScreen;