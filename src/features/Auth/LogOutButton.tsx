import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "hooks/common";

import * as api from "./Auth.api";
import { DELETE_SESSION_ID } from "store/auth/actionTypes";

export const LogOutButton = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const session_id = useAppSelector((state) => state.auth.session_id);

  const deleteSession = () => {
    api.deleteSession(session_id).then(() => dispatch({ type: DELETE_SESSION_ID }));
  };

  return (
    <Button className="m-3" variant="danger" onClick={() => deleteSession()}>
      {t("Log Out")}
    </Button>
  );
};
