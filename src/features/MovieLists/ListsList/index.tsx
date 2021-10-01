import React from "react";
import { ListGroup, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { useAppSelector } from "hooks/common";
import { ListsListProps } from "features/MovieLists/types";
import { DeleteListIcon } from "./DeleteListIcon";
import * as api from "features/MovieLists/MovieLists.api";

export const ListsList: React.FC<ListsListProps> = ({ lists, refetch }) => {
  const session_id = useAppSelector((state) => state.auth.session_id);

  const deleteList = (id: number) => {
    api.deleteList(session_id!, id).then(() => refetch());
  };

  return (
    <ListGroup className="m-3">
      {lists.map(({ id, name }) => (
        <ListGroup.Item className="lists-list-item" key={id} action>
          <LinkContainer exact to={`/movie-list/${id}`}>
            <Nav.Link className="lists-list-link">{name}</Nav.Link>
          </LinkContainer>
          <div onClick={() => deleteList(id)}>
            <DeleteListIcon />
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
