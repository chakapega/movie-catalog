import { MoviesType } from "features/Dashboard/types";

export type ListType = {
  id: number;
  name: string;
  description: string;
};

export type ListsListProps = {
  lists: Array<ListType>;
  refetch: Function;
};

export type ListDetailsType = {
  id: string;
  name: string;
  description: string;
  items: MoviesType;
};

export type AddMovieToListProps = {
  setShowAddMovieToList: Function;
};
