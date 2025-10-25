import {useEffect, useRef, useState} from "react";
import P5Executor from "../Executors/P5Executor.jsx";
import EditorType from "../editorType.jsx";
import {net} from "../../../api/net/net.js";
import {useAuth} from "react-oidc-context";
import {Panel, PanelResizeHandle} from "react-resizable-panels";
import TypedLanguageType from "../typedLanguageType.jsx";
import TabGroup from "../../../components/navigation/TabGroup.jsx";
import StepsList from "./LessonType/StepsList.jsx";

import styles from "./LessonType.module.css";
import StepEditor from "./LessonType/StepEditor.jsx";
import StepPreview from "./LessonType/StepPreview.jsx";
import P5jsType from "./p5jsType.jsx";
import DataPanel from "./LessonType/DataPanel.jsx";

function LessonType(props){
    let auth = useAuth();
    const [lessonData, setLessonData] = useState(null);
    const [selectedStep, setSelectedStep] = useState(null);
    const [stepData, setStepData] = useState(null);
    const [currentComponents, setCurrentComponents] = useState(null);

    useEffect(() => {
        if(!stepData){
            return;
        }
        let newData = {...lessonData};
        newData.steps[selectedStep] = stepData;
        setLessonData(newData);
        setCurrentComponents(stepData.components);
        console.log("step data update load")
    },[stepData])

    useEffect(() => {
        setStepData(lessonData?.steps[selectedStep]);
    },[selectedStep]);

    const loadProject = async ()=>{
        let blob = await net.proj.getFile(auth.user?.access_token,[props.projectMetadata.id,"main"])
        let text = await blob.text();
        setLessonData(JSON.parse(text));
    }

    return (
        <EditorType
            noOutput
            noCode
            noRun
            loadProject={loadProject}
            {...props}
        >
            <Panel defaultSize={10} minSize={10} maxSize={20} className={styles.tabsPanel}>
                <StepsList lessonData={lessonData} setLessonData={setLessonData} setSelectedStep={setSelectedStep} selectedStep={selectedStep}/>
            </Panel>
            <PanelResizeHandle />

            <Panel minSize={15} className={styles.editorPanel} >
                <StepEditor stepData={stepData} setStepData={setStepData} components={currentComponents} setComponents={setCurrentComponents} selectedStep={selectedStep}/>
            </Panel>
            <PanelResizeHandle />

            <Panel minSize={15} className={styles.dataPanel}>
                <DataPanel />
            </Panel>
        </EditorType>
    )
}

export default LessonType;