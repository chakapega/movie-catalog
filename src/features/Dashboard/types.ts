type MovieType = {
  id: number;
  title: string;
};

export type MoviesType = Array<MovieType>;

export type MoviesListProps = {
  movies: MoviesType;
};
