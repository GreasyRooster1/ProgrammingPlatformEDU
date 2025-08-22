import React, {useEffect, useState} from 'react';
import styles from "./project.module.css"
import SubText from "../../../components/text/SubText.jsx";
import {net} from "../../../api/net.js";
import {useAuth0} from "@auth0/auth0-react";
import Loading from "../../../Loading.jsx";

function Project(props) {

    let [loading,setLoading] = useState(true);
    let [data, setData] = useState([]);

    useEffect(() => {
        net.proj.getData(props.userData.token, [props.pid] ,setLoading).then(response => {
            setData(response)
        })
    }, []);

    if(loading){
        return <Loading />;
    }

    return (
        <div className={styles.item} onClick={props.handle}>
            <span className={styles.title}>{data.name}</span>
            <span className={styles.extras}>
                <SubText className={styles.age}>5d Ago</SubText>
                <span className={styles.type}>Javascript</span>
            </span>
        </div>
    );
}

export default Project;