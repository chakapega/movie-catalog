import React from "react";

import { useAppSelector } from "hooks/common";
import { LogOutButton } from "./LogOutButton";
import { LogInButton } from "./LogInButton";

export const AuthenticationButton = () => {
  const session_id = useAppSelector((state) => state.auth.session_id);

  return session_id ? <LogOutButton /> : <LogInButton />;
};
