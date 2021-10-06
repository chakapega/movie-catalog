import moment from "moment";

import { LanguageType } from "store/language/types";
import { COUNTRY_CODES } from "constants/language";
import { IMAGE_TMDB_BASE_URL } from "constants/api";
import { DATE_FORMAT, INDEX_OF_FIRST_ELEMENT } from "constants/common";
import { NUMBER_OF_ACTORS_IN_LIST, NUMBER_OF_MOVIES_IN_LIST } from "features/Dashboard/Dashboard.constants";
import { MoviesType } from "features/MoviesList/MoviesList.types";
import { ActorsType } from "features/MovieDetails/CastList/types";

export const getCountryCode = (activeLanguage: LanguageType) =>
  activeLanguage && (COUNTRY_CODES as any)[activeLanguage];

export const getImageUrl = (posterPath: string) => `${IMAGE_TMDB_BASE_URL}/${posterPath}`;

export const limiteNumberOfMovies = (movies: MoviesType) =>
  movies.slice(INDEX_OF_FIRST_ELEMENT, NUMBER_OF_MOVIES_IN_LIST);

export const limiteNumberOfActors = (actors: ActorsType) =>
  actors.slice(INDEX_OF_FIRST_ELEMENT, NUMBER_OF_ACTORS_IN_LIST);

export const getDateString = (date: Date) => {
  return moment(date).format(DATE_FORMAT);
};

export const getRandomMovieId = (movies: MoviesType) => {
  const randomMovieIndex = Math.floor(Math.random() * movies.length);

  return String(movies[randomMovieIndex].id);
};
