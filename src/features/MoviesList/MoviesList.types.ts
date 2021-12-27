import { Movies } from 'features/Dashboard/Dashboard.types';

export type MoviesListProps = {
  width?: string;
  withDeleteButton?: boolean;
  list_id?: string;
  refetch?: Function;
  movies: Movies;
};
