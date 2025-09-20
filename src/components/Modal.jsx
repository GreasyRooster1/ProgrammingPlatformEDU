import React from 'react';
import ScreenPage from "./screenPage/ScreenPage.jsx";
import styles from "./modal.module.css";

function Modal(props) {
    return (
        <ScreenPage className={styles.overlay}>
            <div className={styles.modal}>

            </div>
        </ScreenPage>
    );
}

export default Modal;