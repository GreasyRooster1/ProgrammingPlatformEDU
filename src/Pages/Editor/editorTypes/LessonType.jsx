import {useEffect, useState} from "react";
import EditorType from "../EditorType.jsx";
import {net} from "../../../api/net/net.js";
import {useAuth} from "react-oidc-context";
import {Panel, PanelResizeHandle} from "react-resizable-panels";
import StepsList from "./LessonType/StepsList.jsx";

import styles from "./lessonType.module.css";
import StepEditor from "./LessonType/StepEditor.jsx";
import DataPanel from "./LessonType/DataPanel.jsx";

function LessonType(props){
    let auth = useAuth();
    const [lessonData, setLessonData] = useState(null);
    const [selectedStep, setSelectedStep] = useState(null);
    const [stepData, setStepData] = useState(null);
    const [currentComponents, setCurrentComponents] = useState(null);
    const [editorChanged, setEditorChanged] = useState(false);

    useEffect(() => {
        if(!stepData){
            return;
        }
        let newData = {...lessonData};
        newData.steps[selectedStep] = stepData;
        setLessonData(newData);
        setCurrentComponents(stepData.components);
    },[stepData])

    useEffect(() => {
        setStepData(lessonData?.steps[selectedStep]);
    },[selectedStep]);

    const loadProject = async ()=>{
        let blob = await net.proj.getFile(auth.user?.access_token,[props.projectMetadata.id,"main"])
        let text = await blob.text();
        setLessonData(JSON.parse(text));
    }

    const saveProject = async ()=> {
        setEditorChanged(false);
        net.proj.saveFile(
            auth.user?.access_token,
            [props.projectMetadata.id,"main"],
            JSON.stringify(lessonData),
            undefined)
    }

    return (
        <EditorType
            noOutput
            noCode
            noRun
            onSave={saveProject}
            loadProject={loadProject}
            isChanged={editorChanged}
            {...props}
        >
            <Panel defaultSize={10} minSize={10} maxSize={20} className={styles.tabsPanel}>
                <StepsList lessonData={lessonData} setLessonData={setLessonData} setSelectedStep={setSelectedStep} selectedStep={selectedStep}/>
            </Panel>
            <PanelResizeHandle />

            <Panel minSize={15} className={styles.editorPanel} >
                <StepEditor stepData={stepData} setStepData={setStepData} components={currentComponents} setComponents={setCurrentComponents} selectedStep={selectedStep} setEditorChanged={setEditorChanged}/>
            </Panel>
            <PanelResizeHandle />

            <Panel minSize={15} className={styles.dataPanel}>
                <DataPanel />
            </Panel>
        </EditorType>
    )
}

export default LessonType;