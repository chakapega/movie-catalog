import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";

import { useAppSelector, useFilters } from "hooks/common";
import { getMoviesByFilters } from "./Movies.api";
import { FIRST_PAGE } from "constants/common";
import { Pagination } from "features/Pagination";
import { MoviesList } from "features/Dashboard/MoviesList";
import { Filters } from "features/Filters";

export const Movies = () => {
  const activeLanguage = useAppSelector((state) => state.language.activeLanguage);
  const {
    genreId,
    changeGenre,
    startDate,
    changeStartDate,
    endDate,
    changeEndDate,
    selectedFilters,
    changeSelectedFilters,
  } = useFilters();
  const [page, setPage] = useState(FIRST_PAGE);
  const {
    isSuccess: areMoviesSuccess,
    data: searchedMoviesData,
    refetch,
  } = useQuery(
    ["getMoviesByFilters", activeLanguage, page],
    () => getMoviesByFilters(activeLanguage, selectedFilters, page),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  useEffect(() => {
    if (selectedFilters) refetch();
  }, [refetch, selectedFilters, activeLanguage, page]);

  const changePage = (selectedPage: number) => setPage(selectedPage);

  const submit = () => {
    changeSelectedFilters();
    setPage(FIRST_PAGE);
  };

  return (
    <Container>
      <Filters
        submit={submit}
        genreId={genreId}
        changeGenre={changeGenre}
        startDate={startDate}
        changeStartDate={changeStartDate}
        endDate={endDate}
        changeEndDate={changeEndDate}
      />
      {areMoviesSuccess && selectedFilters && (
        <>
          <MoviesList width="w-25" movies={searchedMoviesData.results} />
          <Pagination page={page} totalPages={searchedMoviesData.total_pages} changePage={changePage} />
        </>
      )}
    </Container>
  );
};
