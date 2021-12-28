type Actor = {
  id: number;
  name: string;
};

export type Actors = Actor[];

export type CastListProps = {
  cast: Actors;
};
