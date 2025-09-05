import React from 'react';
import styles from './primaryButton.module.css'

function PrimaryButton(props) {
    return (
        <div className={`${styles.primaryButton} ${props.className??""}`} onClick={props.onClick}>
            <span>
                {props.children}
                {props.icon&& <img className={styles.icon} src={props.icon} alt="*"/>}
            </span>
        </div>
    );
}

export default PrimaryButton;
