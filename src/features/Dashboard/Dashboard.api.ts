import qs from "qs";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { THE_MOVIE_DB_BASE_URL } from "constants/api";
import { getCountryCode } from "utils";
import { GetMoviesResponse, GetMoviesArgs } from "./Dashboard.types";

const { REACT_APP_THE_MOVIE_DB_KEY } = process.env;

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({ baseUrl: THE_MOVIE_DB_BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ moviesType, activeLanguage }: GetMoviesArgs) => {
        const countryCode = getCountryCode(activeLanguage);
        const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY, language: countryCode });

        return `movie/${moviesType}?${query}`;
      },
      transformResponse: (response: GetMoviesResponse) => response.results,
    }),
  }),
});

export const { useGetMoviesQuery } = dashboardApi;
