import qs from "qs";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { THE_MOVIE_DB_BASE_URL } from "constants/api";
import { ActiveLanguage } from "store/language/types";
import { getCountryCode } from "utils";
import { GetGenresResponse, GetMovieProvidersResponse, GetMoviesByFiltersArgs } from "features/Filters/Filters.types";

const { REACT_APP_THE_MOVIE_DB_KEY } = process.env;

export const filtersApi = createApi({
  reducerPath: "filtersApi",
  baseQuery: fetchBaseQuery({ baseUrl: THE_MOVIE_DB_BASE_URL }),
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: (activeLanguage: ActiveLanguage) => {
        const countryCode = getCountryCode(activeLanguage);
        const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY, language: countryCode });

        return `genre/movie/list?${query}`;
      },
      transformResponse: (response: GetGenresResponse) => response.genres,
    }),
    getMovieProviders: builder.query({
      query: (activeLanguage: ActiveLanguage) => {
        const countryCode = getCountryCode(activeLanguage);
        const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY, language: countryCode });

        return `watch/providers/movie?${query}`;
      },
      transformResponse: (response: GetMovieProvidersResponse) => response.results,
    }),
    getMoviesByFilters: builder.query({
      query: ({ activeLanguage, selectedFilters, page }: GetMoviesByFiltersArgs) => {
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

        return `discover/movie?${query}`;
      },
    }),
  }),
});

export const { useGetMovieProvidersQuery, useGetGenresQuery, useGetMoviesByFiltersQuery } = filtersApi;
