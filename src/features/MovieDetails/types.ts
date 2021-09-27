import { MoviesType } from "features/Dashboard/types";

type ActorType = {
  id: number;
  name: string;
};

export type ActorsType = Array<ActorType>;

export type CastListProps = {
  cast: ActorsType;
};

export type RecommendedMoviesListProps = {
  recommendedMovies: MoviesType;
};

export type MovieDetailsProps = {
  movieId?: string;
};
