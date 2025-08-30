import React, {useEffect} from 'react';
import {EMPTY_FUNC} from "../../api/util.js";

/*
* onMount
*/
function Executor(props) {
    let onMount = props.onMount||EMPTY_FUNC;

    useEffect(() => {
        onMount()
    }, [props.projectData]);

    return (
        <div>
            {props.children}
        </div>
    );
}

export default Executor;