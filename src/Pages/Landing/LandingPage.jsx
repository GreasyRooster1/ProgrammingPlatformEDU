import React, {useState} from 'react';
import {useAuth0} from "@auth0/auth0-react";
import AuthProvider, {defaultAuthData, signOutRedirect} from "../../components/AuthProvider.jsx";
import {useAuth} from "react-oidc-context";

function LandingPage() {
    const auth = useAuth();

    return (
        <AuthProvider>
            <div>
                landing
                <button onClick={() => auth.signinRedirect()}>Login</button>
                <button onClick={() => signOutRedirect()}>
                    Log Out
                </button>
                token: {auth.user?.id_token}
            </div>
        </AuthProvider>
    )
}

export default LandingPage;