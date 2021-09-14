export type FiltersProps = {
  submit: () => void;
  genreId?: string;
  changeGenre: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  startDate?: any;
  changeStartDate: Function;
  endDate?: any;
  changeEndDate: Function;
};
