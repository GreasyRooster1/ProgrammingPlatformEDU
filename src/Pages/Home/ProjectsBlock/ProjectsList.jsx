import React from 'react';
import Project from "./Project.jsx";

function ProjectsList(props) {
    return (
        <div className={props.className}>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    );
}

export default ProjectsList;