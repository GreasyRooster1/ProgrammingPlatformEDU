import React from 'react';
import styles from "./loading.module.css"
import ScreenPage from "./components/screenPage/ScreenPage.jsx";

function LoadingScreen() {
    return (
        <div className={styles.textContainer}>
            <span className={styles.textNorm}>LOADING...</span>
        </div>
    );
}

export default LoadingScreen;