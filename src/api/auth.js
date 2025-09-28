import {useAuth} from "react-oidc-context";
import {useState} from "react";
import {net} from "./net/net.js";
import {useReqState} from "./net/netutils.js";

export const useAdvAuth = ()=>{
    let auth = useAuth();
    let [username,setUsername]=useState(null);
    let [requestState,setRequestState]=useReqState(null);

    auth.usernameState = {
        username: username,
        setUsername: setUsername,
        requestState: requestState,
    }
    net.auth.getUsername(auth.user?.access_token,setRequestState).then(username=>{
        setUsername(username);
    });
}