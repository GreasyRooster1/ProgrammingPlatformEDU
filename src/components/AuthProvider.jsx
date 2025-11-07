import React from 'react';
import {useAuth} from "react-oidc-context";
import LoadingScreen from "./LoadingScreen.jsx";

function AuthProvider(props) {
    const auth = useAuth();

    if (auth.isLoading) {
        return <LoadingScreen />;
    }

    if (auth.error) {
        //todo error screen
        return <div>Encountering error... {auth.error.message}</div>;
    }

    return props.children;
}

export function signOutRedirect(){
    const clientId = "3jssdi6ka6iq8s2aeil20f9jg5";
    const logoutUri = "http://localhost:5173/";
    const cognitoDomain = "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_nQhVA9vHC";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
}

export default AuthProvider;