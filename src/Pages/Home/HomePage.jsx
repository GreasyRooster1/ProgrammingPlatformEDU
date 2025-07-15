import React from 'react';
import AuthLock from "../../components/AuthLock.jsx";

function HomePage() {
    return (
        <AuthLock>
            home
        </AuthLock>
    );
}

export default HomePage;