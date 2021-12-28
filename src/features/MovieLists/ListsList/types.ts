export type List = {
  id: number;
  name: string;
  description: string;
};

export type ListsListProps = {
  lists: List[];
  refetch: Function;
};