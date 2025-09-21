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
import play from "../../icons/Play.svg";
import SaveIcon from "../../icons/Save.svg?react"
import ShareIcon from "../../icons/Share.svg?react"
import HomeIcon from "../../icons/Home.svg?react"
import PrimaryButton from "../../components/buttons/PrimaryButton.jsx";
import IconButton from "../../components/buttons/IconButton.jsx";

/*
* onMount
* async loadProjects
* onSave
* onRun
*/
function EditorType(props){
    let onMount = props.onMount||EMPTY_FUNC;
    let loadProject = props.loadProject||EMPTY_FUNC;
    let onSave = props.onSave||EMPTY_FUNC;
    let onRun = props.onRun||EMPTY_FUNC;

    let [loadedProject,setLoadedProject] = useState(false);


    useEffect(() => {
        loadProject().then(()=>{
            setLoadedProject(true)
        });
        onMount();
    }, []);

    const runHandle = ()=>{
        onRun();
        if(props.execRef?.current){
            props.execRef.current.onExecute(loadProject);
        }
    }

    const homeRedirect=()=>{
        location.href="/home";
    }

    return (
        <HeaderFlex className={styles.wrapper} headClassName={styles.head} bodyClassName={styles.body} headContent={
            <>
                <div className={styles.iconGroup}>
                    <IconButton icon={(<HomeIcon />)} onClick={homeRedirect}/>
                </div>
                <div className={styles.iconGroup}>
                    <PrimaryButton className={styles.runButton} icon={play} onClick={runHandle}>Run</PrimaryButton>
                    <IconButton icon={(<SaveIcon />)} isHighlighted={props.saveHighlight} onClick={onSave} />
                    <IconButton icon={(<ShareIcon />)}/>
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