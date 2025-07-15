import React, {useState} from 'react';
import {handle} from "../../api/util.js";
import {useAuth0} from "@auth0/auth0-react";

function LoginErrors() {
    const { getAccessTokenWithPopup,loginWithRedirect, getAccessTokenSilently} = useAuth0();
    const [state, setState] = useState({
        showResult: false,
        apiMessage: "",
        error: null,
    });

    const handleConsent = async () => {
        try {
            await getAccessTokenWithPopup();
            setState({
                ...state,
                error: null,
            });
        } catch (error) {
            setState({
                ...state,
                error: error.error,
            });
        }

        await callApi();
    };

    const handleLoginAgain = async () => {
        try {
            await loginWithRedirect();
            setState({
                ...state,
                error: null,
            });
        } catch (error) {
            setState({
                ...state,
                error: error.error,
            });
        }

        await callApi();
    };

    const callApi = async () => {
        console.log("call api");
        try {
            const token = await getAccessTokenSilently();
            console.log("token", token);
        } catch (error) {
            setState({
                ...state,
                error: error.error,
            });
        }
    };

    return (
        <>
            {state.error === "consent_required" && (
                <div color="warning">
                    You need to{" "}
                    <a
                        href="#/"
                        className="alert-link"
                        onClick={(e) => handle(e, handleConsent)}
                    >
                        consent to get access to users api
                    </a>
                </div>
            )}

            {state.error === "login_required" && (
                <div color="warning">
                    You need to{" "}
                    <a
                        href="#/"
                        className="alert-link"
                        onClick={(e) => handle(e, handleLoginAgain())}
                    >
                        log in again
                    </a>
                </div>
            )}

            <button onClick={callApi}>api</button>
        </>
    );
}

export default LoginErrors;