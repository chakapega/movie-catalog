import { LanguageType } from "store/language/types";
import { COUNTRY_CODES } from "constants/language";
import { IMAGE_TMDB_BASE_URL } from "constants/api";
import { INDEX_OF_FIRST_ELEMENT } from "constants/common";
import { NUMBER_OF_MOVIES_IN_LIST } from "features/Dashboard/Dashboard.constants";
import { MoviesType } from "features/Dashboard/types";

export const getCountryCode = (activeLanguage: LanguageType) =>
  activeLanguage && (COUNTRY_CODES as any)[activeLanguage];

export const getImageUrl = (posterPath: string) => `${IMAGE_TMDB_BASE_URL}/${posterPath}`;

export const limiteNumberOfMovies = (movies: MoviesType) =>
  movies.slice(INDEX_OF_FIRST_ELEMENT, NUMBER_OF_MOVIES_IN_LIST);
