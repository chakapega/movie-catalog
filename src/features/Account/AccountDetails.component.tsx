import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "store/hooks";
import * as api from "./Account.api";
import { saveAccountDetails, removeAccountDetails } from "store/auth";

export const AccountDetails = () => {
  const { session_id, accountDetails } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      if (session_id) {
        const accountDetails = await api.getDetails(session_id);

        dispatch(saveAccountDetails(accountDetails));
      } else {
        dispatch(removeAccountDetails());
      }
    })();
  }, [session_id, dispatch]);

  return accountDetails?.username ? <span className="m-3">{accountDetails.username}</span> : null;
};
