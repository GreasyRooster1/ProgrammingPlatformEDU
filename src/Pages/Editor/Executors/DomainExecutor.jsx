import React, {useEffect, useState} from 'react';
import Executor from "../Executor.jsx";
import {EXEC_URL, IS_EXEC_DEV} from "../../../api/constants.js";
import {useAuth} from "react-oidc-context";
import {net} from "../../../api/net/net.js";
import {useReqState} from "../../../api/net/netutils.js";
import Loading from "../../../components/Loading.jsx";


function DomainExecutor(props) {
    let auth = useAuth();
    const [requestState,setRequestState] = useReqState();
    const [username,setUsername] = useState("");

    useEffect(() => {
        net.auth.getUsername(auth.user?.access_token,setRequestState).then((d)=>{
            console.log(d)
            setUsername(d);
        })
    }, []);

    useEffect(() => {
        console.log(requestState.error)
    },[requestState]);

    const onExecute = () => {

    }

    const onCleanup = () => {

    }

    const execUrl = `${EXEC_URL}/dev/${username}/${props.projectMetadata.named_ref}`;

    if(requestState.isLoading){
        return <Loading />;
    }

    return (
        <Executor
            onExecute={onExecute}
            onCleanup={onCleanup}
            {...props}
        >
            <iframe src={execUrl} sandbox={"allow-scripts"}>

            </iframe>
        </Executor>
    );
}

export default DomainExecutor;