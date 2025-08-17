import React from 'react';
import AuthLock from "../../components/AuthLock.jsx";
import styles from "./homePage.module.css";
import {useAuth0} from "@auth0/auth0-react";
import Loading from "../../Loading.jsx";
import HomeGrid from "./HomeGrid.jsx";
import HomeGridItem from "./HomeGridItem.jsx";
import ProjectsBlock from "./ProjectsBlock/ProjectsBlock.jsx";

function HomePage() {
    let {user, isLoading, isAuthenticated,loginWithRedirect} = useAuth0();

    if(isLoading) {
        return (<Loading/>);
    }else if(!isAuthenticated) {
        loginWithRedirect({redirectUrl: window.location.href});
        return (<Loading/>);
    }

    return (
        <AuthLock>
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
                        <ProjectsBlock />
                    </HomeGridItem>
                </HomeGrid>
            </div>
        </AuthLock>
    );
}

export default HomePage;