import { LanguageType } from "store/language/types";
import { getCountryCode } from "utils";
import { THE_MOVIE_DB_BASE_URL } from "constants/api";
import { SelectedFiltersType } from "./types";

const { REACT_APP_THE_MOVIE_DB_KEY } = process.env;

export const getGenres = async (activeLanguage: LanguageType) => {
  const countryCode = getCountryCode(activeLanguage);

  const response = await fetch(
    `${THE_MOVIE_DB_BASE_URL}/genre/movie/list?api_key=${REACT_APP_THE_MOVIE_DB_KEY}&language=${countryCode}`
  );
  const { genres } = await response.json();

  return genres;
};

export const getMoviesByFilters = async (
  activeLanguage: LanguageType,
  selectedFilters: SelectedFiltersType,
  page: number
) => {
  const countryCode = getCountryCode(activeLanguage);
  const { genreId } = selectedFilters!;

  const response = await fetch(
    `${THE_MOVIE_DB_BASE_URL}/discover/movie?${
      genreId ? "with_genres=" + genreId : ""
    }&api_key=${REACT_APP_THE_MOVIE_DB_KEY}&language=${countryCode}&include_adult=false&page=${page}`
  );
  const data = await response.json();

  return data;
};
