import React from 'react';
import styles from './secondaryButton.module.css'

function SecondaryButton(props) {
    return (
        <div className={`${styles.secondaryButton} ${props.className??""}`} onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default SecondaryButton;
