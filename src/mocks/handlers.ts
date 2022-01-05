import { rest } from "msw";

import { movies, genres, providers } from "./data";

import { THE_MOVIE_DB_BASE_URL } from "constants/api";

export const handlers = [
  rest.get(`${THE_MOVIE_DB_BASE_URL}/movie/now_playing`, (_, res, ctx) => res(ctx.json({ results: movies }))),
  rest.get(`${THE_MOVIE_DB_BASE_URL}/movie/upcoming`, (_, res, ctx) => res(ctx.json({ results: movies }))),
  rest.get(`${THE_MOVIE_DB_BASE_URL}/movie/popular`, (_, res, ctx) => res(ctx.json({ results: movies }))),
  rest.get(`${THE_MOVIE_DB_BASE_URL}/genre/movie/list`, (_, res, ctx) => res(ctx.json({ genres: genres }))),
  rest.get(`${THE_MOVIE_DB_BASE_URL}/watch/providers/movie`, (_, res, ctx) => res(ctx.json({ results: providers }))),
  rest.get(`${THE_MOVIE_DB_BASE_URL}/discover/movie`, (_, res, ctx) =>
    res(ctx.json({ page: 1, results: movies, total_pages: 1, total_results: 3 }))
  ),
];
