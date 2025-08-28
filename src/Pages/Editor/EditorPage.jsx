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

function EditorPage() {
    const [userData, setUserData] = useState(defaultAuthData());
    const {state} = useLocation();
    const 
    console.log(state);

    return (
        <AuthLock setUserData={setUserData}>
        <ScreenPage>
            <PanelGroup direction="horizontal">
                <Panel defaultSize={25} className={styles.stepsPanel}>
                    <LessonPanel />
                </Panel>
                <PanelResizeHandle />

                <Panel className={styles.codePanel}>
                    <CodePanel />
                </Panel>
                <PanelResizeHandle />

                <Panel defaultSize={25}>
                    <PanelGroup direction="vertical">
                        <Panel defaultSize={60} className={styles.outputPanel}>
                            <OutputPanel />
                        </Panel>
                        <PanelResizeHandle />

                        <Panel defaultSize={60} className={styles.consolePanel}>
                            <ConsolePanel />
                        </Panel>
                    </PanelGroup>
                </Panel>
            </PanelGroup>;
        </ScreenPage>
        </AuthLock>
    );
}

export default EditorPage;