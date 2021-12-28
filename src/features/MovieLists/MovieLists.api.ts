import qs from "qs";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { THE_MOVIE_DB_BASE_URL } from "constants/api";
import { SessionIdType } from "store/auth/types";

const { REACT_APP_THE_MOVIE_DB_KEY } = process.env;

export const createList = async (session_id: string, name: string, description: string) => {
  const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY, session_id });

  const response = await fetch(`${THE_MOVIE_DB_BASE_URL}/list?${query}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description }),
  });
  const result = await response.json();

  return result;
};

export const deleteList = async (session_id: string, list_id: number) => {
  const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY, session_id });

  const response = await fetch(`${THE_MOVIE_DB_BASE_URL}/list/${list_id}?${query}`, {
    method: "DELETE",
  });
  const result = await response.json();

  return result;
};

export const addMovieToList = async (list_id: string, session_id: string, movieId: string) => {
  const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY, session_id });

  const response = await fetch(`${THE_MOVIE_DB_BASE_URL}/list/${list_id}/add_item?${query}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ media_id: movieId }),
  });
  const result = await response.json();

  return result;
};

export const deleteMovieFromList = async (list_id: string, session_id: SessionIdType, movieId: number) => {
  const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY, session_id });

  const response = await fetch(`${THE_MOVIE_DB_BASE_URL}/list/${list_id}/remove_item?${query}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ media_id: movieId }),
  });
  const result = await response.json();

  return result;
};

export const movieListsApi = createApi({
  reducerPath: "movieListsApi",
  baseQuery: fetchBaseQuery({ baseUrl: THE_MOVIE_DB_BASE_URL }),
  endpoints: (builder) => ({
    getListDetails: builder.query({
      query: (list_id: string) => {
        const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY });

        return `list/${list_id}?${query}`;
      },
    }),
  }),
});

export const { useGetListDetailsQuery } = movieListsApi;
