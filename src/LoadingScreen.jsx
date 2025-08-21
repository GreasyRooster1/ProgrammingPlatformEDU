import React from 'react';
import styles from "./loading.module.css"
import ScreenPage from "./components/screenPage/ScreenPage.jsx";

function LoadingScreen() {
    return (
        <ScreenPage className={styles.background}>
            <div className={styles.textContainer}>
                <span className={styles.text}>LOADING...</span>
            </div>
        </ScreenPage>
    );
}

export default LoadingScreen;