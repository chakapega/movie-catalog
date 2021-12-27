import React from "react";
import { ListGroup } from "react-bootstrap";

import { Movies } from "features/Dashboard/Dashboard.types";

export const RecommendedMoviesList: React.FC<{ recommendedMovies: Movies }> = ({ recommendedMovies }) => (
  <ListGroup variant="flush">
    {recommendedMovies.map(({ id, title }) => (
      <ListGroup.Item key={id}>{title}</ListGroup.Item>
    ))}
  </ListGroup>
);
