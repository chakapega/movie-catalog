import qs from "qs";

import { THE_MOVIE_DB_BASE_URL } from "constants/api";
import { SessionIdType } from "store/auth/types";

const { REACT_APP_THE_MOVIE_DB_KEY } = process.env;

export const createRequestToken = async () => {
  const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY });

  const response = await fetch(`${THE_MOVIE_DB_BASE_URL}/authentication/token/new?${query}`);
  const { request_token } = await response.json();

  return request_token;
};

export const createSession = async (request_token: string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined) => {
  const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY });

  const response = await fetch(`${THE_MOVIE_DB_BASE_URL}/authentication/session/new?${query}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ request_token }),
  });
  const { session_id } = await response.json();

  return session_id;
};

export const deleteSession = async (session_id: SessionIdType) => {
  const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY });

  return fetch(`${THE_MOVIE_DB_BASE_URL}/authentication/session?${query}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ session_id }),
  });
};
