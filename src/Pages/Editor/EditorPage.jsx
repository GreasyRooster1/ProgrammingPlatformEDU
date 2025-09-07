import React, {useState} from 'react';
import ScreenPage from "../../components/screenPage/ScreenPage.jsx";
import AuthLock from "../../components/AuthLock.jsx";
import {defaultAuthData} from "../../components/AuthProvider.jsx";
import {useLocation} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import LoadingScreen from "../../LoadingScreen.jsx";
import P5jsType from "./editorTypes/p5jsType.jsx";

function EditorPage() {
    const [userData, setUserData] = useState(defaultAuthData());
    let {user, isLoading, isAuthenticated,loginWithRedirect} = useAuth0();
    const {state} = useLocation();

    if(state===null){
        location.href="/home";
    }

    if(isLoading) {
        return (<LoadingScreen/>);
    }else if(!isAuthenticated) {
        loginWithRedirect({redirectUrl: window.location.href});
        return (<LoadingScreen/>);
    }

    return (
        <AuthLock setUserData={setUserData}>
        <ScreenPage>

            <P5jsType projectMetadata={state.projectMetadata} token={userData.token}/>
        </ScreenPage>
        </AuthLock>
    );
}

export default EditorPage;