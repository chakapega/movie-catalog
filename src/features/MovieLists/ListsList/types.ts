export type ListType = {
  id: number;
  name: string;
  description: string;
};

export type ListsListProps = {
  lists: Array<ListType>;
  refetch: Function;
};