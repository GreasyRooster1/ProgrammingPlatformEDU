import React, {useEffect, useState} from 'react';
import AuthProvider  from "./AuthProvider.jsx";
import {useAuth0} from "@auth0/auth0-react";
import LoadingScreen from "./LoadingScreen.jsx";
import {useAuth} from "react-oidc-context";
import {Navigate} from "react-router-dom";

function AuthLock(props) {
    const auth = useAuth();

    if (auth.isLoading) {
        return <LoadingScreen />;
    }

    if (auth.error) {
        //todo error screen
        return <div>Encountering error... {auth.error.message}</div>;
    }

    if(auth.isAuthenticated) {
        return props.children;
    }else{
        return <Navigate to="/" replace />
    }
}

export default AuthLock;