import { useState } from "react";

import { SelectedFilters } from "./Filters.types";
import { getDateString } from "utils";
import { INITIAL_FILTER_VALUE } from "constants/common";

export const useFilters = () => {
  const [genreId, setGenreId] = useState<string | undefined>(INITIAL_FILTER_VALUE);
  const [providerId, setProviderId] = useState<string | undefined>(INITIAL_FILTER_VALUE);
  const [startDate, setStartDate] = useState<any>(INITIAL_FILTER_VALUE);
  const [endDate, setEndDate] = useState<any>(INITIAL_FILTER_VALUE);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(null);

  const changeGenreId = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setGenreId(event.target.value || INITIAL_FILTER_VALUE);

  const changeProviderId = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setProviderId(event.target.value || INITIAL_FILTER_VALUE);

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
