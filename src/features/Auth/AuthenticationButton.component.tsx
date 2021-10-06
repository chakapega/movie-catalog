import React from "react";

import { useAppSelector } from "hooks";
import { LogOutButton } from "./LogOutButton.component";
import { LogInButton } from "./LogInButton.component";

export const AuthenticationButton = () => {
  const session_id = useAppSelector((state) => state.auth.session_id);

  return session_id ? <LogOutButton /> : <LogInButton />;
};
