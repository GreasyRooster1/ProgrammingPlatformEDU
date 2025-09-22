import React, {useEffect, useRef, useState} from 'react';
import Executor from "../Executor.jsx";
import {EXEC_URL, IS_EXEC_DEV} from "../../../api/constants.js";
import {useAuth} from "react-oidc-context";
import {net} from "../../../api/net/net.js";
import {useReqState} from "../../../api/net/netutils.js";
import Loading from "../../../Loading.jsx";


const P5Executor = React.forwardRef((props, ref) =>  {
    const iframeRef = useRef(null);

    let iframe = (
        <iframe
            ref={iframeRef}
            src={"http://localhost:8001/static/p5js-dev.html"}
            sandbox={"allow-scripts"}
        />
    )

    useEffect(() => {

    }, []);

    const onExecute = () => {

        if (iframeRef.current) {
            const contentWindow = iframeRef.current.contentWindow;
            console.log(contentWindow);
            contentWindow.postMessage(props.editorData)
        }
    }

    const onCleanup = () => {
        if (iframeRef.current) {
            const contentWindow = iframeRef.current.contentWindow;
            contentWindow.location.reload();
        }
    }

    React.useImperativeHandle(ref, () => ({
        onExecute: onExecute,
        onCleanup: onCleanup,
    }));

    return (
        <Executor
            onExecute={onExecute}
            onCleanup={onCleanup}
            {...props}
        >
            {iframe}
        </Executor>
    );
});

export default P5Executor;