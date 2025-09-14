import React from 'react';
import Executor from "../Executor.jsx";
import {EXEC_URL, IS_EXEC_DEV} from "../../../api/constants.js";


function DomainExecutor(props) {
    const onExecute = () => {

    }

    const onCleanup = () => {

    }
    let username = ""
    const execUrl = IS_EXEC_DEV?
        `${EXEC_URL}/dev/${username}/${props.projectMetadata.named_ref}`:
        `${username}.${EXEC_URL}/${props.projectMetadata.named_ref}`;

    return (
        <Executor
            onExecute={onExecute}
            onCleanup={onCleanup}
            {...props}
        >
            <iframe src={execUrl}>

            </iframe>
        </Executor>
    );
}

export default DomainExecutor;