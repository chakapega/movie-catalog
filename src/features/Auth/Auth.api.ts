import qs from "qs";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { THE_MOVIE_DB_BASE_URL } from "constants/api";

const { REACT_APP_THE_MOVIE_DB_KEY } = process.env;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: THE_MOVIE_DB_BASE_URL }),
  endpoints: (builder) => ({
    createRequestToken: builder.mutation({
      query: () => {
        const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY });

        return `authentication/token/new?${query}`;
      },
    }),
    createSession: builder.mutation({
      query: (request_token) => {
        const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY });

        return {
          url: `authentication/session/new?${query}`,
          method: "POST",
          body: { request_token },
        };
      },
    }),
    deleteSession: builder.mutation({
      query: (session_id) => {
        const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY });

        return {
          url: `authentication/session?${query}`,
          method: "DELETE",
          body: { session_id },
        };
      },
    }),
  }),
});

export const { useCreateRequestTokenMutation, useCreateSessionMutation, useDeleteSessionMutation } = authApi;
