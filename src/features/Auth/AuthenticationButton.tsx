import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { LogOutButton } from "./LogOutButton";
import { LogInButton } from "./LogInButton";

export const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogOutButton /> : <LogInButton />;
};
