import React, {useState} from 'react';
import ScreenPage from "../../components/screenPage/ScreenPage.jsx";
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import styles from "./editorPage.module.css";
import Step from "./Step/Step.jsx";
import logo from '/vite.svg';
import LessonPanel from "./panels/lesson/LessonPanel.jsx";
import CodePanel from "./panels/code/CodePanel.jsx";
import OutputPanel from "./panels/output/OutputPanel.jsx";
import ConsolePanel from "./panels/console/ConsolePanel.jsx";
import AuthLock from "../../components/AuthLock.jsx";
import {defaultAuthData} from "../../components/AuthProvider.jsx";
import {useLocation} from "react-router-dom";
import EditorType from "./editorType.jsx";
import TypedLanguageType from "./typedLanguageType.jsx";
import SingleFileLanguageType from "./singleFileLanguageType.jsx";
import {useAuth0} from "@auth0/auth0-react";
import LoadingScreen from "../../LoadingScreen.jsx";
import P5jsType from "./editorTypes/p5jsType.jsx";

function EditorPage() {
    const [userData, setUserData] = useState(defaultAuthData());
    let {user, isLoading, isAuthenticated,loginWithRedirect} = useAuth0();
    const {state} = useLocation();

    if(isLoading) {
        return (<LoadingScreen/>);
    }else if(!isAuthenticated) {
        loginWithRedirect({redirectUrl: window.location.href});
        return (<LoadingScreen/>);
    }

    return (
        <AuthLock setUserData={setUserData}>
        <ScreenPage>

            <P5jsType projectMetadata={state.projectMetadata} token={userData.token}/>
        </ScreenPage>
        </AuthLock>
    );
}

export default EditorPage;