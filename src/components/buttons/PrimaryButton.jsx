import React from 'react';
import styles from './primaryButton.module.css'

function PrimaryButton(props) {
    return (
        <div className={`${styles.primaryButton} ${props.className}`}>
            {props.content}
        </div>
    );
}

export default PrimaryButton;