import { useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "store/types";
import { SelectedFiltersType } from "types/common";
import { getDateString } from "utils";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const initialFiltersState = {
  genreId: undefined,
  startDate: undefined,
  endDate: undefined,
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
