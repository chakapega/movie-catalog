import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import * as api from "./Auth.api";

const { REACT_APP_AUTH_REDIRECT_URL } = process.env;

export const LogInButton = () => {
  const { t } = useTranslation();

  const logIn = () => {
    api.createRequestToken().then((request_token) => {
      window.location.replace(
        `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${REACT_APP_AUTH_REDIRECT_URL}`
      );
    });
  };

  return (
    <Button className='m-3' onClick={() => logIn()}>
      {t("Log In")}
    </Button>
  );
};
