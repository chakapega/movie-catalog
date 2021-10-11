import { MoviesType } from "features/MoviesList/MoviesList.types";

export type ListDetailsType = {
  id: string;
  name: string;
  description: string;
  items: MoviesType;
};
