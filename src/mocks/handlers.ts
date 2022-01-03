import { rest } from "msw";

import { movies } from "./data";

import { THE_MOVIE_DB_BASE_URL } from "constants/api";

export const handlers = [
  rest.get(`${THE_MOVIE_DB_BASE_URL}/movie/now_playing`, (_, res, ctx) => res(ctx.json({ results: movies }))),
  rest.get(`${THE_MOVIE_DB_BASE_URL}/movie/upcoming`, (_, res, ctx) => res(ctx.json({ results: movies }))),
  rest.get(`${THE_MOVIE_DB_BASE_URL}/movie/popular`, (_, res, ctx) => res(ctx.json({ results: movies }))),
];
