import React from 'react';
import styles from './subText.module.css'

function SubText(props) {
    return (
        <span className={`${styles.subText} ${props.className}`}>
            {props.icon&& <img className={styles.icon} src={props.icon} alt="*"/>}
            {props.children}
        </span>
    );
}

export default SubText;