import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_nQhVA9vHC",
    client_id: "3jssdi6ka6iq8s2aeil20f9jg5",
    redirect_uri: "http://localhost:5173/",
    response_type: "code",
    scope: "phone openid email",
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider {...cognitoAuthConfig}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </AuthProvider>
  </StrictMode>,
)
