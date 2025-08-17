import React from 'react';
import styles from './primaryButton.module.css'

function PrimaryButton(props) {
    return (
        <div className={`${styles.secondaryButton} ${props.className??""}`}>
            {props.children}
        </div>
    );
}

export default PrimaryButton;
