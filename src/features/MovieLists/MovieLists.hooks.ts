import { useAppSelector } from "hooks";
import { useQuery } from "react-query";

import * as accountApi from "features/Account/Account.api";

export const useCreatedLists = () => {
  const session_id = useAppSelector((state) => state.auth.session_id);
  const accountDetails = useAppSelector((state) => state.account.accountDetails);

  const { data: createdLists, refetch } = useQuery(["getCreatedLists", session_id, accountDetails?.id], () =>
    accountApi.getCreatedLists(session_id, accountDetails!.id)
  );

  return { createdLists, refetch };
};
