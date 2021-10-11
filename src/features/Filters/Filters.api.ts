import qs from "qs";

import { THE_MOVIE_DB_BASE_URL } from "constants/api";
import { ActiveLanguageType } from "store/language/types";
import { getCountryCode } from "utils";
import { SelectedFiltersType } from "features/Filters/Filters.types";

const { REACT_APP_THE_MOVIE_DB_KEY } = process.env;

export const getMovieProviders = async (activeLanguage: ActiveLanguageType) => {
  const countryCode = getCountryCode(activeLanguage);
  const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY, language: countryCode });

  const response = await fetch(`${THE_MOVIE_DB_BASE_URL}/watch/providers/movie?${query}`);
  const { results } = await response.json();

  return results;
};

export const getGenres = async (activeLanguage: ActiveLanguageType) => {
  const countryCode = getCountryCode(activeLanguage);
  const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY, language: countryCode });

  const response = await fetch(`${THE_MOVIE_DB_BASE_URL}/genre/movie/list?${query}`);
  const { genres } = await response.json();

  return genres;
};

export const getMoviesByFilters = async (
  activeLanguage: ActiveLanguageType,
  selectedFilters: SelectedFiltersType,
  page?: number
) => {
  const countryCode = getCountryCode(activeLanguage);
  const { genreId, providerId, startDate, endDate } = selectedFilters!;
  const query = qs.stringify({
    with_genres: genreId,
    with_watch_providers: providerId,
    api_key: REACT_APP_THE_MOVIE_DB_KEY,
    language: countryCode,
    include_adult: false,
    page,
    "primary_release_date.gte": startDate,
    "primary_release_date.lte": endDate,
  });

  const response = await fetch(`${THE_MOVIE_DB_BASE_URL}/discover/movie?${query}`);
  const data = await response.json();

  return data;
};
