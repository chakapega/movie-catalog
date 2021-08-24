export type FiltersProps = {
  submitHandler: () => void;
  genreChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  setStartDate: Function;
  setEndDate: Function;
  genreId: string;
  startDate: any;
  endDate: any;
};