export type FiltersProps = {
  submit: () => void;
  changeGenre: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  setStartDate: Function;
  setEndDate: Function;
  genreId?: string;
  startDate?: any;
  endDate?: any;
};
