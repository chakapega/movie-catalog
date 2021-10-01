import React from "react";
import { ListGroup, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { MoviesListProps } from "features/Dashboard/types";
import { getImageUrl } from "utils";

export const MoviesList: React.FC<MoviesListProps> = ({ width, movies }) => (
  <ListGroup className={`mt-3 ${width || ""}`}>
    {movies.map(({ id, title, poster_path }) => (
      <ListGroup.Item key={id} action>
        <LinkContainer exact to={`/movie-details/${id}`}>
          <Nav.Link title={title}>
            <img className="movies-list-poster" src={getImageUrl(poster_path)} alt="poster" />
          </Nav.Link>
        </LinkContainer>
      </ListGroup.Item>
    ))}
  </ListGroup>
);
