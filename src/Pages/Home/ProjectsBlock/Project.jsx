import React from 'react';
import styles from "./project.module.css"
import SubText from "../../../components/text/SubText.jsx";
import {getLangNameForType, getTimestampAge} from "../../../api/proj.js";

function Project(props) {

    return (
        <div className={styles.item} onClick={()=>{
            props.clickHandle(props.data);
        }}>
            <span className={styles.title}>{props.data.name}</span>
            <span className={styles.extras}>
                <SubText className={styles.age}>{getTimestampAge(props.data.date_updated)}</SubText>
                <span className={styles.type}>
                    {getLangNameForType(props.data.project_type)}
                </span>
            </span>
        </div>
    );
}

export default Project;