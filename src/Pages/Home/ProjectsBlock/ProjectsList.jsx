import React, {use, useEffect, useState} from 'react';
import Project from "./Project.jsx";
import {net} from "../../../api/net/net.js";
import LoadingScreen from "../../../LoadingScreen.jsx";
import Loading from "../../../Loading.jsx";
import {useReqState} from "../../../api/net/netutils.js";
import {useAuth} from "react-oidc-context";
import Error from "../../../Error.jsx";
import SubText from "../../../components/text/SubText.jsx";
import styles from "./projectsList.module.css";
import Pending from "../../../Pending.jsx";

function ProjectsList(props) {
    const auth = useAuth();

    const [requestState,setRequestState] = useReqState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        net.proj.getUserProjDataList(auth.user?.access_token, [1] ,setRequestState).then(response => {
            setProjects(response??[])
        })
    }, []);


    return (
        <Pending requestState={requestState}>
            <div className={props.className}>
                {
                    projects.length > 0 ?
                    projects.map(projData => <Project key={projData.id} data={projData} clickHandle={props.clickHandle}/>) :
                    (<div className={styles.noProjContainer}>
                        <SubText>No projects yet...</SubText>
                    </div>)
                }
            </div>
        </Pending>
    );
}

export default ProjectsList;