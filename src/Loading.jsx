import React from 'react';
import styles from "./request.module.css"
import ScreenPage from "./components/screenPage/ScreenPage.jsx";

function Loading() {
    return (
        <div className={styles.textContainer}>
            <span className={styles.textNorm}>Loading...</span>
        </div>
    );
}

export default Loading;