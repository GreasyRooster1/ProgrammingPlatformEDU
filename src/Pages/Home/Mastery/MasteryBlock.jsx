import React from 'react';
import styles from "./masteryBlock.module.css"
import HexSVG from "./HexSVG.jsx";
import HexStarSVG from "./HexStarSVG.jsx";
import DataHexSVG from "./DataHexSVG.jsx";
import MedTitle from "../../../components/text/MedTitle.jsx";

function MasteryBlock(props) {
    let hexagons = []
    let numHex = 4;
    for(let i=1;i<=numHex;i++){
        hexagons.push(i*(50/numHex));
    }
    return (
        <div className={styles.parent}>
            <MedTitle className={styles.heading}>Mastery</MedTitle>
            <svg className={styles.svg} viewBox={`-50 -50 100 100`}>
                {hexagons.map(s => <HexSVG key={s} r={s} />)}
                <HexStarSVG r={50}/>
                <DataHexSVG r={50} data={[1.0,.3,.7,.9,.6,.5]} strokeWidth={1} stroke={"var(--primary)"} fill={"var(--transparent-primary"}/>
            </svg>
            <div />
        </div>
    );
}

export default MasteryBlock;