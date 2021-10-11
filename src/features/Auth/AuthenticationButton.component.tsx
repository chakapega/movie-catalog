import React from "react";

import { useAppSelector } from "store/hooks";
import { LogOutButton } from "./LogOutButton.component";
import { LogInButton } from "./LogInButton.component";

export const AuthenticationButton = () => {
  const { session_id } = useAppSelector((state) => state.auth);

  return session_id ? <LogOutButton /> : <LogInButton />;
};
