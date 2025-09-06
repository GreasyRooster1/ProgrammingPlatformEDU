import React, {useEffect, useRef, useState} from "react";
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import styles from "./editorPage.module.css";
import LessonPanel from "./panels/lesson/LessonPanel.jsx";
import CodePanel from "./panels/code/CodePanel.jsx";
import OutputPanel from "./panels/output/OutputPanel.jsx";
import ConsolePanel from "./panels/console/ConsolePanel.jsx";
import {EMPTY_FUNC, handle} from "../../api/func.js"
import EditorPage from "./EditorPage.jsx";
import Loading from "../../Loading.jsx";
import HeaderFlex from "../../components/headerFlex/HeaderFlex.jsx";
import home from "../../icons/Home.svg";
import play from "../../icons/Play.svg";
import stop from "../../icons/Stop.svg"
import SaveIcon from "../../icons/Save.svg?react"
import share from "../../icons/Share.svg";
import PrimaryButton from "../../components/buttons/PrimaryButton.jsx";

/*
* onMount
* async loadProjects
* onSave
* onRequestError
*/
function EditorType(props){
    let onMount = props.onMount||EMPTY_FUNC;
    let loadProject = props.loadProject||EMPTY_FUNC;
    let onSave = props.onSave||EMPTY_FUNC;
    let onRequestError = props.onRequestError||EMPTY_FUNC;

    let [loadedProject,setLoadedProject] = useState(false);


    useEffect(() => {
        loadProject().then(()=>{
            setLoadedProject(true)
        });
        onMount();
    }, []);

    return (
        <HeaderFlex className={styles.wrapper} headClassName={styles.head} bodyClassName={styles.body} headContent={
            <>
                <div className={styles.iconGroup}>
                    <img src={home}/>
                </div>
                <div className={styles.iconGroup}>
                    <PrimaryButton className={styles.runButton} icon={play}>Run</PrimaryButton>
                    <SaveIcon className={styles.saveIcon} onClick={onSave} />
                    <img src={share}/>
                </div>
            </>
        }>
            <PanelGroup direction="horizontal">
            <Panel defaultSize={25} className={styles.stepsPanel}>
                    <LessonPanel />
                </Panel>
                <PanelResizeHandle />

                <Panel className={styles.codePanel}>
                    {loadedProject?props.codeEditor:<Loading />}
                </Panel>
                <PanelResizeHandle />

                <Panel defaultSize={25}>
                    <PanelGroup direction="vertical">
                        <Panel defaultSize={60} className={styles.outputPanel}>
                            <OutputPanel executor={props.executor}/>
                        </Panel>
                        <PanelResizeHandle />

                        <Panel defaultSize={60} className={styles.consolePanel}>
                            <ConsolePanel />
                        </Panel>
                    </PanelGroup>
                </Panel>
            </PanelGroup>
        </HeaderFlex>
    )
}

export default EditorType;