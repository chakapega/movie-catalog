import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const LogOutButton = () => {
  const { t } = useTranslation();
  const { logout } = useAuth0();

  return (
    <Button
      className='m-3'
      variant='danger'
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }>
      {t("Log Out")}
    </Button>
  );
};
