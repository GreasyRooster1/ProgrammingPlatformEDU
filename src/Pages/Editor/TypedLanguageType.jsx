import EditorType from "./EditorType.jsx";
import CodePanel from "./panels/code/CodePanel.jsx";
import {useRef, useState} from "react";
import {EMPTY_FUNC} from "~api/func.js";


/*
* onEditorMount
* onEditorChange
*/
function TypedLanguageType(props){
    const editorRef = useRef(null);

    let onEditorMount = props.onEditorMount||EMPTY_FUNC;
    let onEditorChange = props.onEditorChange||EMPTY_FUNC;
    let onSave = props.onSave||EMPTY_FUNC;
    let setEditorData = props.setEditorData||EMPTY_FUNC;

    let [editorChanged, setEditorChanged] = useState(false);

    const onMonacoMount = (editor,monaco)=>{
        editorRef.current = editor
        onEditorMount();
    }

    const onMonacoChange = (value,event)=>{
        onEditorChange();
        setEditorData(value);
        setEditorChanged(true);
    }

    const onSaveOverride = ()=>{
        setEditorChanged(false);
        console.log(editorChanged);
        onSave()
    }

    let codeEditor = (<CodePanel value={props.editorData??""} callbacks={{
        onMount:onMonacoMount,
        onChange:onMonacoChange,
    }}/>);

    return (
        <EditorType
            codeEditor={codeEditor}
            isChanged={editorChanged}
            {...props}
            onSave={onSaveOverride}
        />
    )
}

export default TypedLanguageType;