import React from 'react';
import ScreenPage from "../../components/screenPage/ScreenPage.jsx";
import AuthLock from "../../components/AuthLock.jsx";
import {Navigate, useLocation} from "react-router-dom";
import P5jsType from "./editorTypes/p5jsType.jsx";

function EditorPage() {
    const {state} = useLocation();

    if(state===null){
        return (<Navigate to={"/home"} replace />);
    }

    return (
        <AuthLock>
        <ScreenPage>

            <P5jsType projectMetadata={state.projectMetadata}/>
        </ScreenPage>
        </AuthLock>
    );
}

export default EditorPage;