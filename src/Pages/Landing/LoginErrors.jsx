import React from 'react';
import {handle} from "../../api/util.js";
import {handleConsent, handleLoginAgain} from "../../api/auth.js";

function LoginErrors(props) {
    return (
        <>
            {props.state.error === "consent_required" && (
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

            {props.state.error === "login_required" && (
                <div color="warning">
                    You need to{" "}
                    <a
                        href="#/"
                        className="alert-link"
                        onClick={(e) => handle(e, handleLoginAgain)}
                    >
                        log in again
                    </a>
                </div>
            )}
        </>
    );
}

export default LoginErrors;