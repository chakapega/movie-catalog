import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import { Loader } from "features/Loader";

export const ProtectedRoute: React.FC<{ component: React.FC; path: string }> = ({ component }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loader isFullScreen />,
    })}
  />
);
