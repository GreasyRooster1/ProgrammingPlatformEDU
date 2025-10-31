import React from 'react';
import styles from "./request.module.css"
import ScreenPage from "./components/screenPage/ScreenPage.jsx";
import Loading from "./Loading.jsx";
import Error from "./Error.jsx";

function Pending(props) {
    if(props.requestState.isError) {
        return <Loading />;
    }
    if(props.requestState.isLoading) {
        return <Error message={props.showError?props.requestState.error:undefined} />;
    }
}

export default Pending;