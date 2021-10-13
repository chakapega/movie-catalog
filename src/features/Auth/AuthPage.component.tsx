import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import qs from "qs";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { useCreateSessionMutation } from "./Auth.api";
import { useAppDispatch } from "store/hooks";
import { saveSessionId } from "store/auth";

export const AuthPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { request_token, approved } = qs.parse(location.search, { ignoreQueryPrefix: true });
  const [createSession, { data }] = useCreateSessionMutation();

  useEffect(() => {
    if (data?.session_id) {
      dispatch(saveSessionId(data?.session_id));
      localStorage.setItem("session_id", data?.session_id);
      history.push("/");
    }
  }, [data?.session_id, dispatch, history]);

  return (
    <>
      <span className="m-3">{approved ? t("Permission approved") : t("Permission denied")}</span>
      {approved && (
        <Button className="m-3" onClick={() => createSession(request_token)}>
          {t("Finish authorization")}
        </Button>
      )}
    </>
  );
};
