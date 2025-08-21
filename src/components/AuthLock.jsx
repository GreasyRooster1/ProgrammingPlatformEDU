import React, {useEffect} from 'react';
import AuthProvider  from "./AuthProvider.jsx";
import {useAuth0} from "@auth0/auth0-react";
import LoadingScreen from "../LoadingScreen.jsx";

function AuthLock(props) {
    const {isAuthenticated,isLoading,loginWithRedirect} = useAuth0();

    if(isLoading) {
        return (<LoadingScreen/>);
    }else if(!isAuthenticated) {
        loginWithRedirect({redirectUrl: window.location.href});
        return (<LoadingScreen/>);
    }

    return (
       <AuthProvider setUserData={props.setUserData}>
           {props.children}
       </AuthProvider>
    );
}

export default AuthLock;