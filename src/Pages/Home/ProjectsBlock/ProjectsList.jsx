import React, {use, useEffect, useState} from 'react';
import Project from "./Project.jsx";
import {net} from "../../../api/net.js";
import LoadingScreen from "../../../LoadingScreen.jsx";
import Loading from "../../../Loading.jsx";

function ProjectsList(props) {
    function handle(pid){
        console.log(pid);
    }

    const [setLoading,loading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        console.log(props.userData);
        net.proj.getUserProjList(props.userData.token, [1] ,setLoading).then(response => {
            setProjects(response)
        })
    }, []);

    if(loading){
        return <Loading />;
    }

    return (
        <div className={props.className}>
            <Project handle={handle} pid={"test"} userData={props.userData}/>
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    );
}

export default ProjectsList;