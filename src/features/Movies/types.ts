export type GenreType = {
  id: number;
  name: string;
};

export type SelectedFiltersType = {
  genreId: string;
  startDate: string | null;
  endDate: string | null;
} | null;
