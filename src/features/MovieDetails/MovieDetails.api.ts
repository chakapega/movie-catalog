import qs from "qs";

import { THE_MOVIE_DB_BASE_URL } from "constants/api";
import { LanguageType } from "store/language/types";
import { getCountryCode } from "utils";
import { movieInfoType } from "./MovieDetails.constants";

const { REACT_APP_THE_MOVIE_DB_KEY } = process.env;

export const getMovieInfo = async (infoType: string, movieId: string, activeLanguage: LanguageType) => {
  const countryCode = getCountryCode(activeLanguage);
  const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY, language: countryCode });

  const response = await fetch(
    `${THE_MOVIE_DB_BASE_URL}/movie/${movieId}${infoType === movieInfoType.details ? "" : "/" + infoType}?${query}`
  );
  const data = await response.json();

  return data;
};
