import { Movies } from "features/Dashboard/Dashboard.types";

export type ListDetailsType = {
  id: string;
  name: string;
  description: string;
  items: Movies;
};
