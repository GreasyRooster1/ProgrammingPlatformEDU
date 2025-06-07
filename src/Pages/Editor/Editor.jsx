import React from 'react';
import ScreenPage from "../../components/screenPage/ScreenPage.jsx";
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import styles from "./editor.module.css";

function Editor() {
    return (
        <ScreenPage>
            <PanelGroup autoSaveId="example" storage={null} direction="horizontal">
                <Panel defaultSize={25} className={styles.stepsPanel}>
                    steps
                </Panel>
                <PanelResizeHandle />

                <Panel className={styles.codePanel}>
                    code
                </Panel>
                <PanelResizeHandle />

                <Panel defaultSize={25}>
                    <PanelGroup autoSaveId="example" storage={null} direction="vertical">
                        <Panel defaultSize={60} className={styles.outputPanel}>
                            output
                        </Panel>
                        <PanelResizeHandle />
                        <Panel defaultSize={60} className={styles.consolePanel}>
                            console
                        </Panel>
                    </PanelGroup>
                </Panel>
            </PanelGroup>;
        </ScreenPage>
    );
}

export default Editor;