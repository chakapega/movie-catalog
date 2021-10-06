import React from "react";
import { ListGroup } from "react-bootstrap";

import { MoviesType } from "features/MoviesList/MoviesList.types";

export const RecommendedMoviesList: React.FC<{ recommendedMovies: MoviesType }> = ({ recommendedMovies }) => (
  <ListGroup variant="flush">
    {recommendedMovies.map(({ id, title }) => (
      <ListGroup.Item key={id}>{title}</ListGroup.Item>
    ))}
  </ListGroup>
);
