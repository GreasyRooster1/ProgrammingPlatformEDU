import React, {useRef, useState} from "react";
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import styles from "./editorPage.module.css";
import LessonPanel from "./panels/lesson/LessonPanel.jsx";
import CodePanel from "./panels/code/CodePanel.jsx";
import OutputPanel from "./panels/output/OutputPanel.jsx";
import ConsolePanel from "./panels/console/ConsolePanel.jsx";
import {handle} from "../../api/util.js"
import EditorPage from "./EditorPage.jsx";

class EditorType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.projectMetadata
        }
        console.log(this.state)
    }

    save = () => {
        throw new Error("Save must be implemented.")
    }

    render(){
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

                        <Panel defaultSize={60} className={styles.consolePanel}>
                            <ConsolePanel />
                        </Panel>
                    </PanelGroup>
                </Panel>
            </PanelGroup>
        )
    }
}

export default EditorPage;