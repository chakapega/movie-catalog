import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { THE_MOVIE_DB_AUTHENTICATION_URL } from "constants/api";
import { useCreateRequestTokenMutation } from "./Auth.api";

const { REACT_APP_AUTH_REDIRECT_URL } = process.env;

export const LogInButton = () => {
  const { t } = useTranslation();
  const [createRequestToken, { data }] = useCreateRequestTokenMutation();

  useEffect(() => {
    if (data?.request_token) {
      window.location.replace(
        `${THE_MOVIE_DB_AUTHENTICATION_URL}/${data.request_token}?redirect_to=${REACT_APP_AUTH_REDIRECT_URL}`
      );
    }
  }, [data?.request_token]);

  return (
    <Button className="m-3" onClick={createRequestToken}>
      {t("Log In")}
    </Button>
  );
};
