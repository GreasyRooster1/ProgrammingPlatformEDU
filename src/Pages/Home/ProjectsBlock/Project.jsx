import React, {useEffect, useState} from 'react';
import styles from "./project.module.css"
import SubText from "../../../components/text/SubText.jsx";
import {net} from "../../../api/net.js";
import {useAuth0} from "@auth0/auth0-react";
import Loading from "../../../Loading.jsx";
import {getLangForType} from "../../../api/proj.js";

function Project(props) {

    return (
        <div className={styles.item} onClick={props.handle}>
            <span className={styles.title}>{props.data.name}</span>
            <span className={styles.extras}>
                <SubText className={styles.age}>5d Ago</SubText>
                <span className={styles.type}>
                    {getLangForType(props.data.project_type)}
                </span>
            </span>
        </div>
    );
}

export default Project;