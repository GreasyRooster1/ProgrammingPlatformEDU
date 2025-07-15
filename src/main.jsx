import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {Auth0Provider} from "@auth0/auth0-react";

const onRedirectCallback = (appState) => {
    window.location.replace(
        appState && appState.returnTo
            ? appState.returnTo
            : window.location.href
    );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Auth0Provider
          domain="dev-pqbjxkbpmw3pn3x7.us.auth0.com"
          clientId="ZDY58e8OF70FyubRaf6r7VtoGaVNanNV"
          authorizationParams={{
              redirect_uri: window.location.origin,
              audience:"https://generalapi.com"
          }}
          onRedirectCallback={onRedirectCallback}
      >
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Auth0Provider>
  </StrictMode>,
)
