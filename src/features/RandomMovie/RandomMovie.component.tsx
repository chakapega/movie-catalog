import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import { Filters } from "features/Filters";
import { getRandomMovieId } from "utils";
import { useQuery } from "react-query";
import { getMoviesByFilters } from "features/Movies/Movies.api";
import { useAppSelector, useFilters } from "hooks/common";
import { MovieDetails } from "features/MovieDetails/MovieDetails.component";

export const RandomMovie = () => {
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
  const {
    isSuccess: areMoviesSuccess,
    data: searchedMoviesData,
    refetch,
  } = useQuery(["getMoviesByFilters", activeLanguage], () => getMoviesByFilters(activeLanguage, selectedFilters), {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  useEffect(() => {
    if (selectedFilters) refetch();
    console.log(selectedFilters);
  }, [refetch, selectedFilters, activeLanguage]);

  const submit = () => {
    changeSelectedFilters();
  };

  const randomMovieId = areMoviesSuccess && getRandomMovieId(searchedMoviesData.results);

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
      {selectedFilters && randomMovieId && <MovieDetails movieId={randomMovieId} />}
    </Container>
  );
};
