import { useState } from "react";

import { SelectedFiltersType } from "./Filters.types";
import { getDateString } from "utils";

const initialFilterValue = undefined;

export const useFilters = () => {
  const [genreId, setGenreId] = useState<string | undefined>(initialFilterValue);
  const [providerId, setProviderId] = useState<string | undefined>(initialFilterValue);
  const [startDate, setStartDate] = useState<any>(initialFilterValue);
  const [endDate, setEndDate] = useState<any>(initialFilterValue);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersType>(null);

  const changeGenreId = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setGenreId(event.target.value || initialFilterValue);

  const changeProviderId = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setProviderId(event.target.value || initialFilterValue);

  const changeStartDate = (date: Date) => setStartDate(date);

  const changeEndDate = (date: Date) => setEndDate(date);

  const changeSelectedFilters = () =>
    setSelectedFilters({
      genreId,
      providerId,
      startDate: startDate ? getDateString(startDate) : startDate,
      endDate: endDate ? getDateString(endDate) : endDate,
    });

  return {
    genreId,
    changeGenreId,
    providerId,
    changeProviderId,
    startDate,
    changeStartDate,
    endDate,
    changeEndDate,
    selectedFilters,
    changeSelectedFilters,
  };
};
