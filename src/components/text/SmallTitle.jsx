import React from 'react';
import styles from './smallTitle.module.css'

function SmallTitle(props) {
    return (
        <span className={`${styles.smallTitle} ${props.className}`}>
            {props.children}
        </span>
    );
}

export default SmallTitle;