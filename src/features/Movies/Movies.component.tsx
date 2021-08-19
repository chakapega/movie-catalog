import React, { useEffect, useState } from "react";
import { useAppSelector } from "hooks";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";

import { SelectedFiltersType } from "./types";
import { getMoviesByFilters } from "./Movies.api";
import { EMPTY_STRING, PAGE_NUMBER_ONE } from "constants/common";
import { Pagination } from "features/Pagination";
import { MoviesList } from "features/Dashboard/MoviesList";
import { getDateString } from "utils";
import { Filters } from "features/Filters";

export const Movies = () => {
  const activeLanguage = useAppSelector((state) => state.language.activeLanguage);
  const [genreId, setGenreId] = useState<string>(EMPTY_STRING);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersType>(null);
  const [page, setPage] = useState(PAGE_NUMBER_ONE);
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const {
    isSuccess: areMoviesSuccess,
    data: searchedMoviesData,
    refetch,
  } = useQuery(["getMoviesByFilters", activeLanguage, page], () => getMoviesByFilters(activeLanguage, selectedFilters, page), {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  useEffect(() => {
    if (selectedFilters) refetch();
  }, [refetch, selectedFilters, activeLanguage, page]);

  const genreChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => setGenreId(event.target.value);

  const changePageHandler = (selectedPage: number) => setPage(selectedPage);

  const submitHandler = () => {
    setSelectedFilters({
      genreId,
      startDate: startDate ? getDateString(startDate) : startDate,
      endDate: endDate ? getDateString(endDate) : endDate,
    });
    setPage(PAGE_NUMBER_ONE);
  };

  return (
    <Container>
      <Filters
        submitHandler={submitHandler}
        genreChangeHandler={genreChangeHandler}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        genreId={genreId}
        startDate={startDate}
        endDate={endDate}
      />
      {areMoviesSuccess && selectedFilters && (
        <>
          <MoviesList movies={searchedMoviesData.results} />
          <Pagination page={page} totalPages={searchedMoviesData.total_pages} changePageHandler={changePageHandler} />
        </>
      )}
    </Container>
  );
};
