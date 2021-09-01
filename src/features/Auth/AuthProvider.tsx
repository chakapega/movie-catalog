import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const { REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT_ID } = process.env;

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const history = useHistory();

  const onRedirectCallback = (appState: any) => history.push(appState?.returnTo || window.location.pathname);

  return (
    <Auth0Provider
      domain={REACT_APP_AUTH0_DOMAIN!}
      clientId={REACT_APP_AUTH0_CLIENT_ID!}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}>
      {children}
    </Auth0Provider>
  );
};
