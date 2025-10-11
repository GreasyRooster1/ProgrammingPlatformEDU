import React from 'react';
import MedTitle from "./MedTitle.jsx";

import styles from "./titleDesc.module.css";
import SubText from "./SubText.jsx";
import SmallTitle from "./SmallTitle.jsx";

function TitleDesc(props) {
    return (
        <div className={styles.group}>
            <SmallTitle>{props.title}</SmallTitle>
            <SubText className={styles.sub}>{props.children}</SubText>
        </div>
    );
}

export default TitleDesc;