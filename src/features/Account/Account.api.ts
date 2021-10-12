import qs from "qs";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { THE_MOVIE_DB_BASE_URL } from "constants/api";

const { REACT_APP_THE_MOVIE_DB_KEY } = process.env;

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({ baseUrl: THE_MOVIE_DB_BASE_URL }),
  endpoints: (builder) => ({
    getAccountDetails: builder.query({
      query: (session_id) => {
        const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY, session_id });

        return `account?${query}`;
      },
    }),
    getCreatedLists: builder.query({
      query: ({ session_id, account_id }) => {
        const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY, session_id });

        return `account/${account_id}/lists?${query}`;
      },
    }),
  }),
});

export const { useGetAccountDetailsQuery, useGetCreatedListsQuery } = accountApi;
