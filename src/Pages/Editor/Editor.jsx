import React from 'react';
import ScreenPage from "../../components/screenPage/ScreenPage.jsx";
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import styles from "./editor.module.css";
import Step from "./Step/Step.jsx";
import logo from '/vite.svg';

function Editor() {
    return (
        <ScreenPage>
            <PanelGroup direction="horizontal">
                <Panel defaultSize={25} className={styles.stepsPanel}>
                    <Step title="Step 1" image={logo} type="info">
                        This is a test step
                    </Step>
                    <Step title="Step 1" image={logo} type="code">
                        This is a test step
                    </Step>
                    <Step title="Step 1" image={logo} type="challenge">
                        This is a test step
                    </Step>
                    <Step title="Step 1" image={logo} type="check">
                        This is a test step
                    </Step>
                    <Step title="Step 1" image={logo} type="next">
                        This is a test step
                    </Step>
                </Panel>
                <PanelResizeHandle />

                <Panel className={styles.codePanel}>
                    code
                </Panel>
                <PanelResizeHandle />

                <Panel defaultSize={25}>
                    <PanelGroup direction="vertical">
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