import React, {useEffect, useRef, useState} from "react";
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import styles from "./editorPage.module.css";
import LessonPanel from "./panels/lesson/LessonPanel.jsx";
import CodePanel from "./panels/code/CodePanel.jsx";
import OutputPanel from "./panels/output/OutputPanel.jsx";
import ConsolePanel from "./panels/console/ConsolePanel.jsx";
import {EMPTY_FUNC, handle} from "../../api/util.js"
import EditorPage from "./EditorPage.jsx";

/*
* onMount
* loadProjects
* onSave
* onRequestError
*/
function EditorType(props){
    props.onMount = props.onMount||EMPTY_FUNC;
    props.loadProjects = props.loadProjects||EMPTY_FUNC;
    props.onSave = props.onSave||EMPTY_FUNC;
    props.onRequestError = props.onRequestError||EMPTY_FUNC;


    useEffect(() => {
        props.onMount();
        props.loadProject();
    }, []);

    return (
        <PanelGroup direction="horizontal">
            <Panel defaultSize={25} className={styles.stepsPanel}>
                <LessonPanel />
            </Panel>
            <PanelResizeHandle />

            <Panel className={styles.codePanel}>
                {props.codeEditor}
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
        </PanelGroup>
    )
}

export default EditorType;