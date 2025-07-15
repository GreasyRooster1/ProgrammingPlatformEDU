import React from 'react';
import AuthProvider  from "./AuthProvider.jsx";
import {useAuth0} from "@auth0/auth0-react";
import Loading from "../Loading.jsx";

function AuthLock(props) {
    const {isAuthenticated,isLoading,loginWithRedirect} = useAuth0();

    if(!isAuthenticated) {
        loginWithRedirect()
        return (<Loading/>);
    }

    if(isLoading) {
        return (<Loading/>);
    }

    return (
       <AuthProvider setUserData={props.setUserData}>
           {props.children}
       </AuthProvider>
    );
}

export default AuthLock;