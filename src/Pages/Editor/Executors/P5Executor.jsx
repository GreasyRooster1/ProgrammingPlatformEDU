import React, {useEffect, useState} from 'react';
import Executor from "../Executor.jsx";
import {EXEC_URL, IS_EXEC_DEV} from "../../../api/constants.js";
import {useAuth} from "react-oidc-context";
import {net} from "../../../api/net/net.js";
import {useReqState} from "../../../api/net/netutils.js";
import Loading from "../../../Loading.jsx";


function P5Executor(props) {
    let iframe = (
        <iframe src={"http://localhost:8001/static/p5js-dev.html"} sandbox={"allow-scripts"}>

        </iframe>
    )

    const onExecute = () => {
        iframe.contentWindow.postMessage(props.editorData)
    }

    const onCleanup = () => {
        iframe.contentWindow.location.reload()
    }

    return (
        <Executor
            onExecute={onExecute}
            onCleanup={onCleanup}
            {...props}
        >
            {iframe}
        </Executor>
    );
}

export default P5Executor;