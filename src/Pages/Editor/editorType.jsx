import React, {useRef, useState} from "react";
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import styles from "./editorPage.module.css";
import LessonPanel from "./panels/lesson/LessonPanel.jsx";
import CodePanel from "./panels/code/CodePanel.jsx";
import OutputPanel from "./panels/output/OutputPanel.jsx";
import ConsolePanel from "./panels/console/ConsolePanel.jsx";

class EditorType {
    constructor(projectMetadata) {
        this.projectMetadata = projectMetadata;
    }

    save(){
        //throw new Error("Save must be implemented.")
        console.log(this);
        this.projectMetadata.id="asd"
    }

    getEditorUI(){
        return (
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

                        <Panel defaultSize={60} className={styles.consolePanel} onClick={handle(this.save,this)}>
                            {this.projectMetadata.id}
                            <ConsolePanel />
                        </Panel>
                    </PanelGroup>
                </Panel>
            </PanelGroup>
        )
    }
}

function useEditor(initialData) {
    const editorRef = useRef();
    if (!editorRef.current) {
        editorRef.current = new EditorType(initialData);
    }
    return editorRef.current;
}

function useEditorProjection(editor) {
    const [projection, setProjection] = useState(editorProjection(editor));
    return {
        ...projection,
        // each change function modifies the car AND updates the projection
        changeColor: (newColor) => {
            editor.changeColor(newColor);
            setProjection(editorProjection(editor));
        },
    };
}

function editorProjection(editor) {
    // include any data your components need
    return { id: editor.projectMetadata.id};
}

export {EditorType,useEditor,useEditorProjection};