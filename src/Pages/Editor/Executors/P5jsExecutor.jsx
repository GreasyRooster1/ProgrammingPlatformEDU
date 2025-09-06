import React from 'react';
import Executor from "../Executor.jsx";


function P5JsExecutor(props) {
    const onExecute = () => {

    }

    const onCleanup = () => {

    }

    return (
        <Executor
            onExecute={onExecute}
            onCleanup={onCleanup}
            {...props}
        >
            <iframe src={"./p5jsexecutor"}>

            </iframe>
        </Executor>
    );
}

export default P5JsExecutor;