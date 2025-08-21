import React, {useState} from 'react';
import AuthLock from "../../components/AuthLock.jsx";
import styles from "./homePage.module.css";
import {useAuth0} from "@auth0/auth0-react";
import LoadingScreen from "../../LoadingScreen.jsx";
import HomeGrid from "./HomeGrid.jsx";
import HomeGridItem from "./HomeGridItem.jsx";
import ProjectsBlock from "./ProjectsBlock/ProjectsBlock.jsx";
import {defaultAuthData} from "../../components/AuthProvider.jsx";

function HomePage() {
    let {user, isLoading, isAuthenticated,loginWithRedirect} = useAuth0();
    const [userData, setUserData] = useState(defaultAuthData());

    if(isLoading) {
        return (<LoadingScreen/>);
    }else if(!isAuthenticated) {
        loginWithRedirect({redirectUrl: window.location.href});
        return (<LoadingScreen/>);
    }

    return (
        <AuthLock setUserData={setUserData}>
            <div className={styles.header}>
                <span className={styles.welcome}>Welcome, {user.name}</span>
            </div>
            <div className={styles.gridWrapper}>
                <HomeGrid>
                    <HomeGridItem>
                        projects
                    </HomeGridItem>
                    <HomeGridItem>
                        projects
                    </HomeGridItem>
                    <HomeGridItem>
                        projects
                    </HomeGridItem>
                    <HomeGridItem isLong={true}>
                        <ProjectsBlock userData={userData}/>
                    </HomeGridItem>
                </HomeGrid>
            </div>
        </AuthLock>
    );
}

export default HomePage;