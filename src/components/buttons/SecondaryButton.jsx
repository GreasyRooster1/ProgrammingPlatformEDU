import React from 'react';
import styles from './secondaryButton.module.css'

function SecondaryButton(props) {
    return (
        <div className={`${styles.secondaryButton} ${props.className??""}`}>
            {props.children}
        </div>
    );
}

export default SecondaryButton;
