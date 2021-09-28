import React from "react";
import { ListGroup } from "react-bootstrap";

import { RecommendedMoviesListProps } from "../types";

export const RecommendedMoviesList: React.FC<RecommendedMoviesListProps> = ({ recommendedMovies }) => (
  <ListGroup variant="flush">
    {recommendedMovies.map(({ id, title }) => (
      <ListGroup.Item key={id}>{title}</ListGroup.Item>
    ))}
  </ListGroup>
);
