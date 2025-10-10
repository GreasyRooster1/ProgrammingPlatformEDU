import React from 'react';
import styles from './linkButton.module.css'

function LinkButton(props) {
    return (
        <div className={`${styles.linkButton} ${props.className??""}`} onClick={props.onClick}>
            <span>
                {props.children}
                {props.icon&& <img className={styles.icon} src={props.icon} alt="*"/>}
            </span>
        </div>
    );
}

export default LinkButton;
