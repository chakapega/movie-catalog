import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";

export const LogInButton = () => {
  const { t } = useTranslation();
  const { loginWithRedirect } = useAuth0();

  return (
    <Button className='m-3' onClick={() => loginWithRedirect()}>
      {t("Log In")}
    </Button>
  );
};
