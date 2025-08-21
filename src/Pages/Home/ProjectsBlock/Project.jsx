import React from 'react';
import styles from "./project.module.css"
import SubText from "../../../components/text/SubText.jsx";
import {net} from "../../../api/net.js";
import {useAuth0} from "@auth0/auth0-react";

function Project(props) {
    let handle = () => {
        net.proj.getUserProjList(props.userData.token,1).then(r => {
            console.log(r);
        })
    }
    return (
        <div className={styles.item} onClick={handle}>
            <span className={styles.title}>Title</span>
            <span className={styles.extras}>
                <SubText className={styles.age}>5d Ago</SubText>
                <span className={styles.type}>Javascript</span>
            </span>
        </div>
    );
}

export default Project;