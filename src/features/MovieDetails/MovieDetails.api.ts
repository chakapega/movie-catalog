import { THE_MOVIE_DB_BASE_URL } from "constants/api";
import { LanguageType } from "store/language/types";
import { getCountryCode } from "utils";

const { REACT_APP_THE_MOVIE_DB_KEY } = process.env;

export const getMovieDetails = async (movieId: string, activeLanguage: LanguageType) => {
  const countryCode = getCountryCode(activeLanguage);

  const response = await fetch(
    `${THE_MOVIE_DB_BASE_URL}/${movieId}?api_key=${REACT_APP_THE_MOVIE_DB_KEY}&language=${countryCode}&page=1`
  );
  const data = await response.json();

  return data;
};
