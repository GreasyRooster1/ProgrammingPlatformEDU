import React from 'react';
import styles from './primaryButton.module.css'

function PrimaryButton(props) {
    return (
        <div className={`${styles.primaryButton} ${props.className??""}`} onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default PrimaryButton;
