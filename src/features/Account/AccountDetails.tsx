import React, { useState, useEffect } from "react";

import { useAppSelector } from "hooks/common";
import * as api from "./Account.api";

export const AccountDetails = () => {
  const session_id = useAppSelector((state) => state.auth.session_id);
  const [accountDetails, setAccountDetails] = useState<{ username: string } | null>();

  useEffect(() => {
    session_id
      ? api.getDetails(session_id).then((accountDetails) => setAccountDetails(accountDetails))
      : setAccountDetails(null);
  }, [session_id]);

  return accountDetails?.username ? <span className='m-3'>{accountDetails.username}</span> : null;
};
