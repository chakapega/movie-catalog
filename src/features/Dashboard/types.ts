type MovieType = {
  id: number;
  title: string;
};

export type MoviesListProps = {
  movies: Array<MovieType>;
};

export type DashboardStateType = {
  isLoadingNowPlayingMovies: boolean;
  nowPlayingMovies: [] | Array<MovieType>;
  nowPlayingMoviesError: null | object;
  isLoadingUpcomingMovies: boolean;
  upcomingMovies: [] | Array<MovieType>;
  upcomingMoviesError: null | object;
  isLodaingPopularMovies: boolean;
  popularMovies: [] | Array<MovieType>;
  popularMoviesError: null | object;
};

export type DashboardActionType = {
  type: string;
  payload: Array<MovieType>;
};
