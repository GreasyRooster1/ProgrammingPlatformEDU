import React from 'react';

import styles from "./blockQuote.module.css"

function BlockQuote(props) {
    return (
        <div className={styles.blockQuote}>
            {props.children}
        </div>
    );
}

export default BlockQuote;