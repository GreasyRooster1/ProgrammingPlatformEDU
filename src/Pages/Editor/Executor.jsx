import React, {useEffect} from 'react';
import {EMPTY_FUNC} from "../../api/util.js";

/*
* onMount
* onExecute
*/
function Executor(props) {
    let onMount = props.onMount||EMPTY_FUNC;
    let onExecute = props.onExecute||EMPTY_FUNC;

    useEffect(() => {
        onMount()
    }, []);

    useEffect(() => {
        onExecute()
    }, [props.projectData]);

    return (
        <div>
            {props.children}
        </div>
    );
}

export default Executor;