import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { THE_MOVIE_DB_AUTHENTICATION_URL } from "constants/api";
import * as api from "./Auth.api";

const { REACT_APP_AUTH_REDIRECT_URL } = process.env;

export const LogInButton = () => {
  const { t } = useTranslation();

  const logIn = async () => {
    const request_token = await api.createRequestToken();

    window.location.replace(
      `${THE_MOVIE_DB_AUTHENTICATION_URL}/${request_token}?redirect_to=${REACT_APP_AUTH_REDIRECT_URL}`
    );
  };

  return (
    <Button className="m-3" onClick={logIn}>
      {t("Log In")}
    </Button>
  );
};
