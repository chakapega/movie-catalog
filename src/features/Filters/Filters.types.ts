import { ActiveLanguage } from "store/language/types";

export type FiltersProps = {
  submit: () => void;
  genreId?: string;
  changeGenreId: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  providerId?: string;
  changeProviderId: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  startDate?: any;
  changeStartDate: Function;
  endDate?: any;
  changeEndDate: Function;
};

export type SelectedFilters = {
  genreId?: string;
  providerId?: string;
  startDate?: string;
  endDate?: string;
} | null;

export type Genre = {
  id: number;
  name: string;
};

export type Provider = {
  display_priority: number;
  logo_path: string;
  provider_name: string;
  provider_id: number;
};

export type GetMovieProvidersResponse = {
  results: Provider[];
};

export type GetGenresResponse = {
  genres: Genre[];
};

export type GetMoviesByFiltersArgs = {
  activeLanguage: ActiveLanguage;
  selectedFilters: SelectedFilters;
  page?: number;
};
