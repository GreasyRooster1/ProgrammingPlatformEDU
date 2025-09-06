import React, {use, useEffect, useState} from 'react';
import Project from "./Project.jsx";
import {net} from "../../../api/net/net.js";
import LoadingScreen from "../../../LoadingScreen.jsx";
import Loading from "../../../Loading.jsx";

function ProjectsList(props) {

    const [loading,setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        net.proj.getUserProjDataList(props.userData.token, [1] ,setLoading).then(response => {
            setProjects(response)
        })
    }, []);

    if(loading){
        return <Loading />;
    }

    return (
        <div className={props.className}>
            {projects.map(projData => <Project key={projData.id} data={projData} userData={props.userData} clickHandle={props.clickHandle}/>)}
        </div>
    );
}

export default ProjectsList;