import React, {useEffect} from 'react';
import {EMPTY_FUNC} from "../../api/func.js";

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

    return (
        <>{props.children}</>
    );
}

export default Executor;