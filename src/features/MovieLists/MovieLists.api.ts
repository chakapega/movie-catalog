import qs from "qs";

import { THE_MOVIE_DB_BASE_URL } from "constants/api";

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
  const data = await response.json();

  return data;
};

export const deleteList = (session_id: string, list_id: number) => {
  const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY, session_id });

  return fetch(`${THE_MOVIE_DB_BASE_URL}/list/${list_id}?${query}`, {
    method: "DELETE",
  });
};
