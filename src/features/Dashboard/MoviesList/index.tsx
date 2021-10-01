import React from "react";
import { ListGroup, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { MoviesListProps } from "features/Dashboard/types";

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <ListGroup className="mt-3">
    {movies.map(({ id, title }) => (
      <ListGroup.Item key={id} action>
        <LinkContainer exact to={`/movie-details/${id}`}>
          <Nav.Link>{title}</Nav.Link>
        </LinkContainer>
      </ListGroup.Item>
    ))}
  </ListGroup>
);
