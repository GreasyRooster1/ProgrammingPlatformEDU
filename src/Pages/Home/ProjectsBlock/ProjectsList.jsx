import React, {use, useEffect, useState} from 'react';
import Project from "./Project.jsx";
import {net} from "../../../api/net.js";
import Loading from "../../../Loading.jsx";

function ProjectsList(props) {
    function handle(pid){
        console.log(pid);
    }

    let [setLoading,loading] = useState(true);
    let [projects, setProjects] = useState([]);

    useEffect(() => {
        net.proj.getUserProjList(props.userData.token,props.pid,setLoading).then(response => {
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