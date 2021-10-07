import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "hooks";
import * as api from "./Account.api";
import { DELETE_ACCOUNT_DETAILS, SAVE_ACCOUNT_DETAILS } from "store/account/actionTypes";

export const AccountDetails = () => {
  const session_id = useAppSelector((state) => state.auth.session_id);
  const accountDetails = useAppSelector((state) => state.account.accountDetails);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      if (session_id) {
        const accountDetails = await api.getDetails(session_id);

        dispatch({ type: SAVE_ACCOUNT_DETAILS, payload: accountDetails });
      } else {
        dispatch({ type: DELETE_ACCOUNT_DETAILS, payload: session_id });
      }
    })();
  }, [session_id, dispatch]);

  return accountDetails?.username ? <span className="m-3">{accountDetails.username}</span> : null;
};
