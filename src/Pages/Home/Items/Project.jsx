import React from 'react';
import styles from "./project.module.css"
import SubText from "../../../components/text/SubText.jsx";

function Project(props) {
    return (
        <div className={styles.item}>
            <span className={styles.title}>Title</span>
            <span className={styles.extras}>
                <SubText className={styles.age}>5d Ago</SubText>
                <span className={styles.type}>Javascript</span>
            </span>
        </div>
    );
}

export default Project;