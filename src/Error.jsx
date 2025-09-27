import React from 'react';
import styles from "./request.module.css"
function Error(props) {
    return (
        <div className={styles.textContainer}>
            <span className={`${styles.textNorm} ${styles.error}`}>
                {props.message??"Failed to load"}
            </span>
        </div>
    );
}

export default Error;