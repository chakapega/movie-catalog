import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

import { useAppSelector } from "hooks/common";
import * as accountApi from "features/Account/Account.api";

export const MovieLists = () => {
  const { t } = useTranslation();
  const session_id = useAppSelector((state) => state.auth.session_id);
  const accountDetails = useAppSelector((state) => state.account.accountDetails);
  const { data: createdLists, refetch } = useQuery(
    "getCreatedLists",
    () => accountApi.getCreatedLists(session_id, accountDetails!.id),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  useEffect(() => {
    if (session_id && accountDetails?.id) {
      refetch();
    }
  }, [session_id, accountDetails?.id, refetch]);

  return <span className="m-3">{t("Created lists")}</span>;
};
