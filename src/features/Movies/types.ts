export type GenreType = {
  id: number;
  name: string;
};

export type SelectedFiltersType = {
  genreId?: string;
  startDate?: string;
  endDate?: string;
} | null;
