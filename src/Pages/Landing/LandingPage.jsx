import React from 'react';
import AuthProvider, {signOutRedirect} from "../../components/AuthProvider.jsx";
import {useAuth} from "react-oidc-context";
import {useNavigate} from "react-router-dom";
import {Button, Section} from "@radix-ui/themes";
import Nav from "~components/Nav.jsx";
import styles from "./landingPage.module.css";

function LandingPage() {
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <AuthProvider>
            <Nav className={styles.nav}>
                landing
                <Button onClick={() => auth.signinRedirect()}>Login</Button>
                {auth.isAuthenticated &&
                (<Button onClick={() => auth.removeUser()}>
                    Log Out
                </Button>)
                }
                token: {auth.user?.access_token}
                <Button onClick={() => navigate("/home")}>
                    Home
                </Button>
            </Nav>
            <Section size="2" />
        </AuthProvider>
    )
}

export default LandingPage;