import React from 'react';
import AuthProvider, {signOutRedirect} from "../../components/AuthProvider.jsx";
import {useAuth} from "react-oidc-context";
import {useNavigate} from "react-router-dom";
import {Button, Section} from "@radix-ui/themes";
import Nav from "~components/Nav.jsx";
import styles from "./landingPage.module.css";
import LoginButton from "~/Pages/Landing/LoginButton.jsx";

function LandingPage() {
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <AuthProvider>
            <Nav className={styles.nav}>
                <LoginButton auth={auth}/>
                <Button onClick={() => navigate("/home")}>
                    Home
                </Button>
            </Nav>
            <Section size="2" />
        </AuthProvider>
    )
}

export default LandingPage;