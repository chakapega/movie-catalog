type MovieType = {
  id: number;
  title: string;
  poster_path: string;
};

export type MoviesType = Array<MovieType>;

export type MoviesListProps = {
  width?: string;
  movies: MoviesType;
};
