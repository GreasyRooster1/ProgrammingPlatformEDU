import React from 'react';
import styles from './linkButton.module.css'

function LinkButton(props) {
    return (
        <div className={`${styles.linkButton} ${props.className??""}`} onClick={props.onClick}>
            {props.children}
        </div>
    );
}

export default LinkButton;
