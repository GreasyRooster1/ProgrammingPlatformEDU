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
import {EditorType} from "./editorType.jsx";

function EditorPage() {
    const [userData, setUserData] = useState(defaultAuthData());
    const {state} = useLocation();
    const editor = new EditorType(state.projectMetadata);

    return (
        <AuthLock setUserData={setUserData}>
        <ScreenPage>
            {editor.getEditorUI()}
        </ScreenPage>
        </AuthLock>
    );
}

export default EditorPage;