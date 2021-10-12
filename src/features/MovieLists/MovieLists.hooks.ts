import { useAppSelector } from "store/hooks";

import { useGetCreatedListsQuery } from "features/Account/Account.api";

export const useCreatedLists = () => {
  const { session_id, accountDetails } = useAppSelector((state) => state.auth);

  const { data, refetch } = useGetCreatedListsQuery({ session_id, id: accountDetails!.id });

  return { createdLists: data?.results, refetch };
};
