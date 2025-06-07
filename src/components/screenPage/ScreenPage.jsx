import React from 'react';
import styles from "./screenPage.module.css"

function ScreenPage(props) {
    return (
        <div className={styles.page}>
            {props.children}
        </div>
    );
}

export default ScreenPage;