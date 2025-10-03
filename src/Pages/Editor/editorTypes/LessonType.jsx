import {useEffect, useRef, useState} from "react";
import P5Executor from "../Executors/P5Executor.jsx";
import EditorType from "../editorType.jsx";
import {net} from "../../../api/net/net.js";
import {useAuth} from "react-oidc-context";
import {Panel, PanelResizeHandle} from "react-resizable-panels";
import TypedLanguageType from "../typedLanguageType.jsx";
import TabGroup from "../../../components/navigation/TabGroup.jsx";
import StepsTab from "./LessonType/StepsTab.jsx";

import styles from "./LessonType.module.css";
import StepEditor from "./LessonType/StepEditor.jsx";
import StepPreview from "./LessonType/StepPreview.jsx";

function LessonType(props){
    let auth = useAuth();
    const [lessonData, setLessonData] = useState(null);
    const [selectedStep, setSelectedStep] = useState(null);
    const [stepData, setStepData] = useState(null);

    useEffect(() => {
        if(!stepData){
            return;
        }
        let newData = {...lessonData};
        newData.steps[selectedStep] = stepData;
        setLessonData(newData);
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
            loadProject={loadProject}
            {...props}
        >
            <Panel defaultSize={10} minSize={10} maxSize={20} className={styles.tabsPanel}>
                <StepsTab lessonData={lessonData} setSelectedStep={setSelectedStep} selectedStep={selectedStep}/>
            </Panel>
            <PanelResizeHandle />

            <Panel minSize={15} className={styles.editorPanel}>
                <TabGroup
                    tabs={[
                        {name:"Step",element:(<StepEditor stepData={stepData} setStepData={setStepData} selectedStep={selectedStep}/>)},
                        {name:"Code",element:(<h1>Code</h1>)},
                        {name:"Data",element:(<h1>Data</h1>)}
                    ]}
                />
            </Panel>
            <PanelResizeHandle />

            <Panel minSize={15}>
                <StepPreview stepData={stepData} />
            </Panel>
        </EditorType>
    )
}

export default LessonType;