import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "store/hooks";
import { useGetAccountDetailsQuery } from "./Account.api";
import { saveAccountDetails, removeAccountDetails } from "store/account";

export const AccountDetails = () => {
  const {
    auth: { session_id },
    account: { accountDetails },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { data, isError } = useGetAccountDetailsQuery(session_id);

  useEffect(() => {
    isError ? dispatch(removeAccountDetails()) : dispatch(saveAccountDetails(data));
  }, [isError, data, dispatch]);

  return accountDetails?.username ? <span className="m-3">{accountDetails.username}</span> : null;
};
