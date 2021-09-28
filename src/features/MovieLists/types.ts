type List = {
  id: number;
  name: string;
  description: string;
};

export type ListsListProps = {
  lists: Array<List>;
  refetch: Function;
};
