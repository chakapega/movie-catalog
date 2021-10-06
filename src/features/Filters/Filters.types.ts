export type FiltersProps = {
  submit: () => void;
  genreId?: string;
  changeGenre: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  startDate?: any;
  changeStartDate: Function;
  endDate?: any;
  changeEndDate: Function;
};

export type SelectedFiltersType = {
  genreId?: string;
  startDate?: string;
  endDate?: string;
} | null;

export type GenreType = {
  id: number;
  name: string;
};
