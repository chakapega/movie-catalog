import { useState } from "react";
import { useQuery } from "react-query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "store/types";
import { SelectedFiltersType } from "types/common";
import { getDateString } from "utils";
import * as accountApi from "features/Account/Account.api";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const initialFilterValue = undefined;

const initialFiltersState = {
  genreId: initialFilterValue,
  startDate: initialFilterValue,
  endDate: initialFilterValue,
};

export const useFilters = () => {
  const [genreId, setGenreId] = useState<string | undefined>(initialFiltersState.genreId);
  const [startDate, setStartDate] = useState<any>(initialFiltersState.startDate);
  const [endDate, setEndDate] = useState<any>(initialFiltersState.endDate);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersType>(null);

  const changeGenre = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setGenreId(event.target.value || initialFiltersState.genreId);

  const changeStartDate = (date: Date) => setStartDate(date);

  const changeEndDate = (date: Date) => setEndDate(date);

  const changeSelectedFilters = () =>
    setSelectedFilters({
      genreId,
      startDate: startDate ? getDateString(startDate) : startDate,
      endDate: endDate ? getDateString(endDate) : endDate,
    });

  return {
    genreId,
    changeGenre,
    startDate,
    changeStartDate,
    endDate,
    changeEndDate,
    selectedFilters,
    changeSelectedFilters,
  };
};

export const useCreatedLists = () => {
  const session_id = useAppSelector((state) => state.auth.session_id);
  const accountDetails = useAppSelector((state) => state.account.accountDetails);

  const { data: createdLists, refetch } = useQuery(["getCreatedLists", session_id, accountDetails?.id], () =>
    accountApi.getCreatedLists(session_id, accountDetails!.id)
  );

  return { createdLists, refetch };
};
