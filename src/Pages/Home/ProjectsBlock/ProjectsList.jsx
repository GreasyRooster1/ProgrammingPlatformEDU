import React, {use, useEffect, useState} from 'react';
import Project from "./Project.jsx";
import {net} from "../../../api/net.js";
import LoadingScreen from "../../../LoadingScreen.jsx";
import Loading from "../../../Loading.jsx";

function ProjectsList(props) {

    const [loading,setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    let projectList = [];

    let clickHandle = () => {

    }

    useEffect(() => {
        net.proj.getUserProjList(props.userData.token, [1] ,setLoading).then(response => {
            console.log(response[0]);
            setProjects(response)
        })
    }, []);

    useEffect(() => {
        for(let pid of projects){
            projectList.push(
                <Project pid={pid} userData={props.userData} handle={clickHandle}/>
            );
        }
    },[projects])

    if(loading){
        return <Loading />;
    }

    return (
        <div className={props.className}>
            {projectList}
        </div>
    );
}

export default ProjectsList;