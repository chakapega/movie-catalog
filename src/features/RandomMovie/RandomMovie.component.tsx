import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { Filters } from "features/Filters/Filters.component";
import { getRandomMovieId } from "utils";
import { useQuery } from "react-query";
import { getMoviesByFilters } from "features/Filters/Filters.api";
import { useAppSelector } from "hooks";
import { MovieDetails } from "features/MovieDetails/MovieDetails.component";
import { useFilters } from "features/Filters/Filters.hooks";

export const RandomMovie = () => {
  const activeLanguage = useAppSelector((state) => state.language.activeLanguage);
  const [randomMovieId, setRandomMovieId] = useState<string | null>(null);
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
  const { data: searchedMoviesData, refetch } = useQuery(
    ["getMoviesByFilters", activeLanguage],
    () => getMoviesByFilters(activeLanguage, selectedFilters),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  useEffect(() => {
    if (selectedFilters) refetch();
  }, [refetch, selectedFilters, activeLanguage]);

  useEffect(() => {
    if (searchedMoviesData?.results) setRandomMovieId(getRandomMovieId(searchedMoviesData.results));
  }, [searchedMoviesData?.results]);

  const submit = () => {
    changeSelectedFilters();

    searchedMoviesData?.results && setRandomMovieId(getRandomMovieId(searchedMoviesData.results));
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
      {selectedFilters && randomMovieId && <MovieDetails movieId={randomMovieId} />}
    </Container>
  );
};
