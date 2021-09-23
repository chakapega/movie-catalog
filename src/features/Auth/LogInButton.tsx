import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import * as api from "./Auth.api";

export const LogInButton = () => {
  const { t } = useTranslation();

  const logIn = () => {
    api.createRequestToken().then((request_token) => {
      window.location.replace(
        `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=http://localhost:3000/auth-page`
      );
    });
  };

  return (
    <Button className='m-3' onClick={() => logIn()}>
      {t("Log In")}
    </Button>
  );
};
