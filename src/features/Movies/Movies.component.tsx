import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { useAppSelector } from "store/hooks";
import { useGetMoviesByFiltersQuery } from "features/Filters/Filters.api";
import { FIRST_PAGE } from "constants/common";
import { Pagination } from "features/Pagination/Pagination.component";
import { Filters } from "features/Filters/Filters.component";
import { MoviesList } from "features/MoviesList/MoviesList.component";
import { useFilters } from "features/Filters/Filters.hooks";

export const Movies = () => {
  const { activeLanguage } = useAppSelector((state) => state.language);
  const {
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
  } = useFilters();
  const [page, setPage] = useState(FIRST_PAGE);
  const { data: searchedMoviesData } = useGetMoviesByFiltersQuery(
    { activeLanguage, selectedFilters, page },
    { skip: !selectedFilters }
  );

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
        changeGenreId={changeGenreId}
        providerId={providerId}
        changeProviderId={changeProviderId}
        startDate={startDate}
        changeStartDate={changeStartDate}
        endDate={endDate}
        changeEndDate={changeEndDate}
      />
      {searchedMoviesData?.results?.length && <MoviesList width="w-25" movies={searchedMoviesData.results} />}
      {searchedMoviesData?.total_pages && (
        <Pagination page={page} totalPages={searchedMoviesData.total_pages} changePage={changePage} />
      )}
    </Container>
  );
};
