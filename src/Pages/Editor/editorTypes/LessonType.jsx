import SingleFileLanguageType from "../SingleFileLanguageType.jsx";
import {useRef, useState} from "react";
import P5Executor from "../Executors/P5Executor.jsx";
import EditorType from "../editorType.jsx";
import {net} from "../../../api/net/net.js";
import {useAuth} from "react-oidc-context";
import {Panel, PanelResizeHandle} from "react-resizable-panels";
import TypedLanguageType from "../typedLanguageType.jsx";
import TabGroup from "../../../components/navigation/TabGroup.jsx";

function LessonType(props){
    let auth = useAuth();
    const [lessonJson, setLessonJson] = useState({});

    const loadProject = async ()=>{
        let blob = await net.proj.getFile(auth.user?.access_token,[props.projectMetadata.id,"main"])
        let text = await blob.text();
        setLessonJson(text)
    }

    return (
        <EditorType
            noOutput
            loadProject={loadProject}
            {...props}
        >
            <Panel>
                <TabGroup
                    tabs={[
                        {name:"Steps",element:(<h1>Steps</h1>)},
                        {name:"Steps",element:(<h1>Steps</h1>)},
                        {name:"Steps",element:(<h1>Steps</h1>)}
                    ]}
                />
            </Panel>
            <PanelResizeHandle />
        </EditorType>
    )
}

export default LessonType;