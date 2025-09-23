import React from 'react';
import styles from "./languageSelector.module.css"

function LanguageSelector(props) {
    return (
        <div className={styles.selector}>
            {
                props.languages.map((language) => (
                    <div key={language.name} className={styles.item}>
                        <span>{language.name}</span>
                    </div>
                ))
            }
        </div>
    );
}

export default LanguageSelector;