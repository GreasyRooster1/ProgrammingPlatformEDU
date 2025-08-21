import React, {use, useEffect} from 'react';
import Project from "./Project.jsx";
import {net} from "../../../api/net.js";

function ProjectsList(props) {
    function handle(pid){
        console.log(pid);
    }
    let projects = [];
    useEffect(() => {
        net.proj.getUserProjList(props.userData.token,props.pid).then(r => {
            projects = r
        })
    }, []);

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