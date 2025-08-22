import React, {use, useEffect, useState} from 'react';
import Project from "./Project.jsx";
import {net} from "../../../api/net.js";
import LoadingScreen from "../../../LoadingScreen.jsx";
import Loading from "../../../Loading.jsx";

function ProjectsList(props) {

    const [loading,setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    let handle = () => {

    }

    useEffect(() => {
        console.log(setLoading);
        net.proj.getUserProjList(props.userData.token, [1] ,setLoading).then(response => {
            setProjects(response)
        })
    }, []);

    useEffect(() => {

    },[projects])

    if(loading){
        return <Loading />;
    }

    return (
        <div className={props.className}>
            <Project pid={"test"} userData={props.userData} handle={clickHandle}/>
            {/*<Project />*/}
            {/*<Project />*/}
            {/*<Project />*/}
            {/*<Project />*/}
        </div>
    );
}

export default ProjectsList;