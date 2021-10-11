type ActorType = {
  id: number;
  name: string;
};

export type ActorsType = Array<ActorType>;

export type CastListProps = {
  cast: ActorsType;
};
