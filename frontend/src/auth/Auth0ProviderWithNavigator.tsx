import { useCreateMyUser } from "@/api/MyUserApi";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import React from "react";

type Props = {
    children: React.ReactNode;
};

function Auth0ProviderWithNavigator({ children }: Props) {
    const {createUser}= useCreateMyUser();
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    // Check if environment variables are correctly loaded
    if (!domain || !clientId || !redirectUri) {
        throw new Error("Unable to initialize auth!");
    }

    const onRedirectCallback = (appState?: AppState, user?: User) => {
        if(user?.sub && user?.email){
            createUser({auth0Id: user.sub, email:user.email});
        }
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{ redirect_uri: redirectUri }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
}

export default Auth0ProviderWithNavigator;
