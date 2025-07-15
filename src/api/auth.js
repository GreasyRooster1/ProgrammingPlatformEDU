export async function handleConsent(state,setState,getAccessTokenWithPopup) {
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
}

export async function handleLoginAgain(state,setState,loginWithPopup) {
    try {
        await loginWithPopup();
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
}

export async function callApi(state,setState,getAccessTokenSilently){
    console.log("callApi");
    try {
        const token = await getAccessTokenSilently();

        const response = await fetch(`localhost:8000/api/external`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const responseData = await response.json();

        setState({
            ...state,
            showResult: true,
            apiMessage: responseData,
        });
    } catch (error) {
        setState({
            ...state,
            error: error.error,
        });
    }
}