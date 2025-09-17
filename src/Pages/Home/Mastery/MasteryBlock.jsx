import React from 'react';
import styles from "./masteryBlock.module.css"
import HexSVG from "./HexSVG.jsx";

function MasteryBlock(props) {
    return (
        <div className={styles.parent}>
            <svg className={styles.svg} viewBox={`-50 -50 100 100`}>
                <HexSVG r={50}/>
            </svg>
        </div>
    );
}

export default MasteryBlock;