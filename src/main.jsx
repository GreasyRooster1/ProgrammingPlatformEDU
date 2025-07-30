import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {Auth0Provider} from "@auth0/auth0-react";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Auth0Provider
          domain="dev-pqbjxkbpmw3pn3x7.us.auth0.com"
          clientId="ZDY58e8OF70FyubRaf6r7VtoGaVNanNV"
          authorizationParams={{
              redirect_uri: window.location.origin,
              audience:"https://generalapi.com"
          }}
      >
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Auth0Provider>
  </StrictMode>,
)
