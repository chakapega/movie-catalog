import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "store/hooks";

import { useDeleteSessionMutation } from "./Auth.api";
import { removeSessionId } from "store/auth";

export const LogOutButton = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { session_id } = useAppSelector((state) => state.auth);
  const [deleteSession, { isSuccess }] = useDeleteSessionMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(removeSessionId());
      localStorage.removeItem("session_id");
    }
  }, [isSuccess, dispatch]);

  return (
    <Button className="m-3" variant="danger" onClick={() => deleteSession(session_id)}>
      {t("Log Out")}
    </Button>
  );
};
