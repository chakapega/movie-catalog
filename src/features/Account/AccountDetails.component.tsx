import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "store/hooks";
import { useGetAccountDetailsQuery } from "./Account.api";
import { saveAccountDetails, removeAccountDetails } from "store/auth";

export const AccountDetails = () => {
  const { session_id, accountDetails } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const { data, isError } = useGetAccountDetailsQuery(session_id);

  useEffect(() => {
    isError ? dispatch(removeAccountDetails()) : dispatch(saveAccountDetails(data));
  }, [isError, data, dispatch]);

  return accountDetails?.username ? <span className="m-3">{accountDetails.username}</span> : null;
};
