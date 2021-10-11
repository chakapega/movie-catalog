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

export type SelectedFiltersType = {
  genreId?: string;
  providerId?: string;
  startDate?: string;
  endDate?: string;
} | null;

export type GenreType = {
  id: number;
  name: string;
};

export type ProviderType = {
  provider_id: number;
  provider_name: string;
};
