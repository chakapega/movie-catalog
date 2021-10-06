import React from "react";
import { ListGroup } from "react-bootstrap";

import { CastListProps } from "./types";

export const CastList: React.FC<CastListProps> = ({ cast }) => (
  <ListGroup variant="flush">
    {cast.map(({ id, name }) => (
      <ListGroup.Item key={id}>{name}</ListGroup.Item>
    ))}
  </ListGroup>
);
