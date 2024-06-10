
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    children: React.ReactNode;
};

function Auth0ProviderWithNavigator({ children }: Props) {
    
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
    const audience= import.meta.env.VITE_AUTH0_AUDIENCE;
    const navigate=useNavigate();
    // Check if environment variables are correctly loaded
    if (!domain || !clientId || !redirectUri || !audience) {
        throw new Error("Unable to initialize auth!");
    }

    const onRedirectCallback = async (appState?: AppState, user?: User) => {
      navigate("/auth-callback")
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{ redirect_uri: redirectUri,
                audience, }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
}

export default Auth0ProviderWithNavigator;


