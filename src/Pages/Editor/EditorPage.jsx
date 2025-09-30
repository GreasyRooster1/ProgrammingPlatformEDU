import React from 'react';
import ScreenPage from "../../components/screenPage/ScreenPage.jsx";
import AuthLock from "../../components/AuthLock.jsx";
import {Navigate, useLocation} from "react-router-dom";
import P5jsType from "./editorTypes/p5jsType.jsx";
import {projectTypes} from "../../api/proj.js";

function EditorPage() {
    const {state} = useLocation();

    if(state===null){
        return (<Navigate to={"/home"} replace />);
    }

    let projectType = projectTypes[state.projectMetadata.project_type]

    if(!projectType){
        return <Navigate to={"/home"} replace />;
    }

    let EditorComponent = projectType.editorComponent;
    return (
        <AuthLock>
        <ScreenPage>
            <EditorComponent projectMetadata={state.projectMetadata}/>
        </ScreenPage>
        </AuthLock>
    );
}

export default EditorPage;