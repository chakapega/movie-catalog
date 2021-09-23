import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import qs from "qs";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import * as api from "./Auth.api";
import { useAppDispatch } from "hooks/common";
import { SAVE_SESSION_ID } from "store/auth/actionTypes";

export const AuthPage = () => {
  const { t } = useTranslation();
  let location = useLocation();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { request_token, approved } = qs.parse(location.search, { ignoreQueryPrefix: true });

  const createSession = async () => {
    const session_id = await api.createSession(request_token);

    dispatch({ type: SAVE_SESSION_ID, payload: session_id });
    history.push("/");
  };

  return (
    <>
      <span className='m-3'>{approved ? t("Permission approved") : t("Permission denied")}</span>
      {approved && (
        <Button className='m-3' onClick={() => createSession()}>
          {t("Finish authorization")}
        </Button>
      )}
    </>
  );
};
