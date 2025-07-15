import React from 'react';
import AuthProvider  from "./AuthProvider.jsx";
import {useAuth0} from "@auth0/auth0-react";
import Loading from "../Loading.jsx";

function AuthLock(props) {
    const {isAuthenticated,isLoading,loginWithRedirect} = useAuth0();

    let content = props.children;

    if(isLoading) {
        content = (<Loading/>);
    }else if(!isAuthenticated) {
        loginWithRedirect()
        content = (<Loading/>);
    }

    return (
       <AuthProvider setUserData={props.setUserData}>
           {content}
       </AuthProvider>
    );
}

export default AuthLock;