import React from 'react';
import styles from "./languageSelector.module.css"

function LanguageSelector(props) {
    return (
        <div className={styles.selector}>
            <div className={styles.item}></div>
        </div>
    );
}

export default LanguageSelector;