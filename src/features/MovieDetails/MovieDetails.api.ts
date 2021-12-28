import qs from "qs";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { THE_MOVIE_DB_BASE_URL } from "constants/api";
import { getCountryCode } from "utils";
import { movieInfoType } from "./MovieDetails.constants";
import { GetMovieInfoArgs } from "./MovieDetails.types";

const { REACT_APP_THE_MOVIE_DB_KEY } = process.env;

export const movieDetailsApi = createApi({
  reducerPath: "movieDetailsApi",
  baseQuery: fetchBaseQuery({ baseUrl: THE_MOVIE_DB_BASE_URL }),
  endpoints: (builder) => ({
    getMovieInfo: builder.query({
      query: ({ activeLanguage, movieId, infoType }: GetMovieInfoArgs) => {
        const countryCode = getCountryCode(activeLanguage);
        const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY, language: countryCode });

        return `movie/${movieId}${infoType === movieInfoType.details ? "" : "/" + infoType}?${query}`;
      },
    }),
  }),
});

export const { useGetMovieInfoQuery } = movieDetailsApi;
