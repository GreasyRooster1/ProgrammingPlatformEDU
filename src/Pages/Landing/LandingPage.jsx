import React from 'react';
import AuthProvider, {signOutRedirect} from "../../components/AuthProvider.jsx";
import {useAuth} from "react-oidc-context";
import {useNavigate} from "react-router-dom";

function LandingPage() {
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <AuthProvider>
            <div>
                landing
                <button onClick={() => auth.signinRedirect()}>Login</button>
                {auth.isAuthenticated &&
                (<button onClick={() => auth.removeUser()}>
                    Log Out
                </button>)
                }
                token: {auth.user?.access_token}
                <button onClick={() => navigate("/home")}>
                    Home
                </button>
            </div>
        </AuthProvider>
    )
}

export default LandingPage;