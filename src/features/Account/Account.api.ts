import qs from "qs";

import { SessionIdType } from "store/auth/types";
import { THE_MOVIE_DB_BASE_URL } from "constants/api";

const { REACT_APP_THE_MOVIE_DB_KEY } = process.env;

export const getDetails = async (session_id: SessionIdType) => {
  const query = qs.stringify({ api_key: REACT_APP_THE_MOVIE_DB_KEY, session_id });

  const response = await fetch(`${THE_MOVIE_DB_BASE_URL}/account?${query}`);
  const accountDetails = await response.json();

  return accountDetails;
};
