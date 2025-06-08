import React from 'react';
import Step from "../../Step/Step.jsx";
import logo from "/vite.svg";

function LessonPanel() {
    return (
        <>
            <Step title="Step 1" image={logo} type="info">
                This is a test step
            </Step>
            <Step title="Step 2" image={logo} type="code">
                This is a test step
            </Step>
            <Step title="Step 3" image={logo} type="challenge">
                This is a test step
            </Step>
            <Step title="Step 4" image={logo} type="check">
                This is a test step
            </Step>
            <Step title="Step 5" image={logo} type="next">
                This is a test step
            </Step>
        </>
    );
}

export default LessonPanel;