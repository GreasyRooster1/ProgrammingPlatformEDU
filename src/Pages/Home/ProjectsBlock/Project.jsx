import React, {useEffect, useState} from 'react';
import styles from "./project.module.css"
import SubText from "../../../components/text/SubText.jsx";
import {net} from "../../../api/net.js";
import {useAuth0} from "@auth0/auth0-react";
import Loading from "../../../Loading.jsx";
import {getLangForType, getTimestampAge} from "../../../api/proj.js";

function Project(props) {

    return (
        <div className={styles.item} onClick={()=>{
            props.clickHandle(props.data);
        }}>
            <span className={styles.title}>{props.data.name}</span>
            <span className={styles.extras}>
                <SubText className={styles.age}>{getTimestampAge(props.data.date_updated)}</SubText>
                <span className={styles.type}>
                    {getLangForType(props.data.project_type)}
                </span>
            </span>
        </div>
    );
}

export default Project;