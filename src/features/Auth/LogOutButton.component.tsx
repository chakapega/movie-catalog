import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "store/hooks";

import * as api from "./Auth.api";
import { removeSessionId } from "store/auth";

export const LogOutButton = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { session_id } = useAppSelector((state) => state.auth);

  const deleteSession = () => {
    api.deleteSession(session_id).then(() => {
      dispatch(removeSessionId());

      localStorage.removeItem("session_id");
    });
  };

  return (
    <Button className="m-3" variant="danger" onClick={deleteSession}>
      {t("Log Out")}
    </Button>
  );
};
