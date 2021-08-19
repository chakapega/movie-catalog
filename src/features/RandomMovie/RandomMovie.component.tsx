import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import { Filters } from "features/Filters";
import { SelectedFiltersType } from "features/Movies/types";
import { EMPTY_STRING } from "constants/common";
import { getDateString, getRandomMovieId } from "utils";
import { useQuery } from "react-query";
import { getMoviesByFilters } from "features/Movies/Movies.api";
import { useAppSelector } from "hooks";
import { MovieDetails } from "features/MovieDetails/MovieDetails.component";

export const RandomMovie = () => {
  const activeLanguage = useAppSelector((state) => state.language.activeLanguage);
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const [genreId, setGenreId] = useState<string>(EMPTY_STRING);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersType>(null);

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
  }, [refetch, selectedFilters, activeLanguage]);

  const genreChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => setGenreId(event.target.value);

  const submitHandler = () => {
    setSelectedFilters({
      genreId,
      startDate: startDate ? getDateString(startDate) : startDate,
      endDate: endDate ? getDateString(endDate) : endDate,
    });
  };

  const randomMovieId = areMoviesSuccess && getRandomMovieId(searchedMoviesData.results);

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
      {selectedFilters && randomMovieId && <MovieDetails movieId={randomMovieId} />}
    </Container>
  );
};
