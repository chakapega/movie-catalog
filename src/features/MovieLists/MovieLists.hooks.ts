import { useAppSelector } from "store/hooks";
import { useQuery } from "react-query";

import * as accountApi from "features/Account/Account.api";

export const useCreatedLists = () => {
  const { session_id, accountDetails } = useAppSelector((state) => state.auth);

  const { data: createdLists, refetch } = useQuery(["getCreatedLists", session_id, accountDetails?.id], () =>
    accountApi.getCreatedLists(session_id, accountDetails!.id)
  );

  return { createdLists, refetch };
};
