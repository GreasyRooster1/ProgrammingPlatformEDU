import React, {use, useEffect} from 'react';
import Project from "./Project.jsx";

function ProjectsList(props) {
    function handle(pid){
        console.log(pid);
    }
    let projects = [];
    useEffect(() => {

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