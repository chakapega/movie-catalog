import { useAppSelector } from "store/hooks";

import { useGetCreatedListsQuery } from "features/Account/Account.api";

export const useCreatedLists = () => {
  const {
    auth: { session_id },
    account: { accountDetails },
  } = useAppSelector((state) => state);
  const { data, refetch } = useGetCreatedListsQuery({ session_id, id: accountDetails!.id });

  return { createdLists: data?.results, refetch };
};
