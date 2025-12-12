import React, {useEffect, useState} from "react";
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import styles from "./editorPage.module.css";
import LessonPanel from "./panels/lesson/LessonPanel.jsx";
import OutputPanel from "./panels/output/OutputPanel.jsx";
import ConsolePanel from "./panels/console/ConsolePanel.jsx";
import {EMPTY_FUNC} from "~api/func.js"
import Loading from "../../components/Loading.jsx";
import HeaderFlex from "../../components/headerFlex/HeaderFlex.jsx";
import PlayIcon from "../../icons/Play.svg?react";
import SaveIcon from "../../icons/Save.svg?react"
import ShareIcon from "../../icons/Share.svg?react"
import HomeIcon from "../../icons/Home.svg?react"
import IconButton from "../../components/buttons/IconButton.jsx";
import {useNavigate} from "react-router-dom";
import {net} from "~api/net/net.js";
import {useAuth} from "react-oidc-context";
import {useReqState} from "~api/net/netutils.js";
import Pending from "~components/Pending.jsx";
import {Button} from "@radix-ui/themes";
import {usePreventLeave} from "~api/auth.js";

/*
* onMount
* async loadProjects *
* onSave
* onRun
*/
function EditorType(props){
    let auth = useAuth();
    let navigate = useNavigate();

    let onMount = props.onMount||EMPTY_FUNC;
    let loadProject = props.loadProject;
    let onSave = props.onSave||EMPTY_FUNC;
    let onRun = props.onRun||EMPTY_FUNC;

    let [loadedProject,setLoadedProject] = useState(false);
    let hasLesson = props.projectMetadata.lessonid!==null;
    let [lessonData, setLessonData] = useState(null);
    const [lessonDataRequestState,setLessonDataRequestState] = useReqState(true);

    useEffect(() => {
        loadProject().then(()=>{
            setLoadedProject(true)
        });
        onMount();
    }, []);

    useEffect(() => {
        if(!hasLesson) return;
        net.proj.getLesson(auth.user?.access_token,[props.projectMetadata.id],setLessonDataRequestState).then((data)=>{
            setLessonData(data);
        })
    }, []);

    usePreventLeave(props.isChanged);

    const runHandle = ()=>{
        onRun();
        if(props.execRef?.current){
            props.execRef.current.onExecute(loadProject);
        }
    }

    const homeRedirect=()=>{
        navigate("/home");
    }

    return (
        <HeaderFlex className={styles.wrapper} headClassName={styles.head} bodyClassName={styles.body} headContent={
            <>
                <div className={styles.iconGroup}>
                    <IconButton icon={(<HomeIcon />)} onClick={homeRedirect}/>
                </div>
                <div className={styles.iconGroup}>
                    {
                        !props.noRun &&
                        <Button onClick={runHandle} size="2" variant="solid">Run <PlayIcon width="1.1rem"/></Button>
                    }
                    <IconButton icon={(<SaveIcon />)} isHighlighted={props.isChanged} onClick={onSave} />
                    <IconButton icon={(<ShareIcon />)}/>
                </div>
            </>
        }>
            <PanelGroup direction="horizontal">
                {hasLesson &&
                    (<><Panel defaultSize={25} minSize={15} className={styles.stepsPanel}>
                            <Pending requestState={lessonDataRequestState}>
                                {lessonData && <LessonPanel lessonData={lessonData} savedStep={props.projectMetadata.lesson_current_step}/>}
                            </Pending>
                        </Panel>
                        <PanelResizeHandle /></>
                )}

                {props.children}

                {!props.noCode && <><Panel className={styles.codePanel} defaultSize={hasLesson?50:70} minSize={20}>
                    {loadedProject?props.codeEditor:<Loading />}
                </Panel>
                <PanelResizeHandle /></>}

                {!props.noOutput && <Panel defaultSize={25} minSize={20}>
                    <PanelGroup direction="vertical">
                        <Panel defaultSize={60} className={styles.outputPanel}>
                            <OutputPanel executor={props.executor}/>
                        </Panel>
                        <PanelResizeHandle />

                        <Panel defaultSize={60} className={styles.consolePanel}>
                            <ConsolePanel />
                        </Panel>
                    </PanelGroup>
                </Panel>}
            </PanelGroup>
        </HeaderFlex>
    )
}

export default EditorType;