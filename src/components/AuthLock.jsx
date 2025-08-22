import React, {useEffect, useState} from 'react';
import AuthProvider  from "./AuthProvider.jsx";
import {useAuth0} from "@auth0/auth0-react";
import LoadingScreen from "../LoadingScreen.jsx";

function AuthLock(props) {
    const {user, isAuthenticated,isLoading,getAccessTokenSilently,loginWithRedirect } = useAuth0();
    let setUserData = props.setUserData;
    const [finishedWriting, setFinishedWriting] = useState(false);
    useEffect(() => {
        if(!isLoading && isAuthenticated) {
            getAccessTokenSilently().then((e)=>{
                setUserData({
                    token:e,
                    isAuthenticated:true,
                })
                setFinishedWriting(true);
            })
        }
    },[isLoading,isAuthenticated])

    if(isLoading) {
        return (<LoadingScreen/>);
    }else if(!finishedWriting) {
        return (<LoadingScreen/>);
    }else if(!isAuthenticated) {
        loginWithRedirect({redirectUrl: window.location.href});
        return (<LoadingScreen/>);
    }
    return (
        <>
            {props.children}
        </>
    );
}

export default AuthLock;