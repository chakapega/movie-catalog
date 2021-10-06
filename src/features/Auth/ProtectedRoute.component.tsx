import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAppSelector } from "hooks";

export const ProtectedRoute: React.FC<{ component: React.FC; path: string }> = ({ component, path }) => {
  const session_id = useAppSelector((state) => state.auth.session_id);

  return session_id ? <Route component={component} path={path} /> : <Redirect to="/" />;
};
