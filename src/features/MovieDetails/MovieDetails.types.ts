import { ActiveLanguage } from "store/language/types";

export type GetMovieInfoArgs = {
  infoType: string;
  movieId: string;
  activeLanguage: ActiveLanguage;
};
