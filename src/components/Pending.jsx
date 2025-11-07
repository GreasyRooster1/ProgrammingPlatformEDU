import React from 'react';
import styles from "./pending.module.css"
import ScreenPage from "./screenPage/ScreenPage.jsx";
import Loading from "./Loading.jsx";
import Error from "./Error.jsx";

function Pending(props) {
    if(props.requestState.isError) {
        return <Error message={props.showError?props.requestState.error:undefined} />;
    }
    if(props.requestState.isLoading) {
        return <Loading />;
    }

    return props.children;
}

export default Pending;