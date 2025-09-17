import React from 'react';
import styles from "./masteryBlock.module.css"

function MasteryBlock(props) {
    return (
        <div className={styles.parent}>
            <svg className={styles.svg} viewBox={`0 0 100 100`}>

            </svg>
        </div>
    );
}

export default MasteryBlock;