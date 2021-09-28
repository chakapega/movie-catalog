import React from "react";
import { ListGroup, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { ListsListProps } from "../types";

export const ListsList: React.FC<ListsListProps> = ({ lists }) => (
  <ListGroup>
    {lists.map(({ id, name }) => (
      <ListGroup.Item key={id} action>
        <LinkContainer exact to={`/list/${id}`}>
          <Nav.Link>{name}</Nav.Link>
        </LinkContainer>
      </ListGroup.Item>
    ))}
  </ListGroup>
);
