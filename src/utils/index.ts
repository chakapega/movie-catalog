import moment from "moment";

import { ActiveLanguage } from "store/language/types";
import { COUNTRY_CODES } from "constants/language";
import { IMAGE_TMDB_BASE_URL } from "constants/api";
import { DATE_FORMAT, INDEX_OF_FIRST_ELEMENT } from "constants/common";
import { NUMBER_OF_ACTORS_IN_LIST, NUMBER_OF_MOVIES_IN_LIST } from "features/Dashboard/Dashboard.constants";
import { Movies } from "features/Dashboard/Dashboard.types";
import { Actors } from "features/MovieDetails/CastList/types";

export const getCountryCode = (activeLanguage: ActiveLanguage): string => COUNTRY_CODES[activeLanguage];

export const getImageUrl = (posterPath: string) => `${IMAGE_TMDB_BASE_URL}/${posterPath}`;

export const limiteNumberOfMovies = (movies: Movies) => movies.slice(INDEX_OF_FIRST_ELEMENT, NUMBER_OF_MOVIES_IN_LIST);

export const limiteNumberOfActors = (actors: Actors) =>
  actors.slice(INDEX_OF_FIRST_ELEMENT, NUMBER_OF_ACTORS_IN_LIST);

export const getDateString = (date: Date) => {
  return moment(date).format(DATE_FORMAT);
};

export const getRandomMovieId = (movies: Movies) => {
  const randomMovieIndex = Math.floor(Math.random() * movies.length);

  return String(movies[randomMovieIndex].id);
};
