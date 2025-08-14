import React from 'react';
import styles from './medTitle.module.css'

function MedTitle(props) {
    return (
        <span className={`${styles.medTitle} ${props.className}`}>
            {props.children}
        </span>
    );
}

export default MedTitle;