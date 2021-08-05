import { THE_MOVIE_DB_BASE_URL } from "constants/api";
import { LanguageType } from "store/language/types";
import { getCountryCode } from "utils";

const { REACT_APP_THE_MOVIE_DB_KEY } = process.env;

export const getNowPlayingMovies = async (activeLanguage: LanguageType) => {
  const countryCode = getCountryCode(activeLanguage);

  const response = await fetch(
    `${THE_MOVIE_DB_BASE_URL}/now_playing?api_key=${REACT_APP_THE_MOVIE_DB_KEY}&language=${countryCode}&page=1`
  );
  const { results } = await response.json();

  return results;
};

export const getUpcomingMovies = async (activeLanguage: LanguageType) => {
  const countryCode = getCountryCode(activeLanguage);

  const response = await fetch(
    `${THE_MOVIE_DB_BASE_URL}/upcoming?api_key=${REACT_APP_THE_MOVIE_DB_KEY}&language=${countryCode}&page=1`
  );
  const { results } = await response.json();

  return results;
};

export const getPopularMovies = async (activeLanguage: LanguageType) => {
  const countryCode = getCountryCode(activeLanguage);

  const response = await fetch(
    `${THE_MOVIE_DB_BASE_URL}/popular?api_key=${REACT_APP_THE_MOVIE_DB_KEY}&language=${countryCode}&page=1`
  );
  const { results } = await response.json();

  return results;
};
