import React from "react";
import { ListGroup, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "store/hooks";
import * as api from "features/MovieLists/MovieLists.api";
import { showSpinner, hideSpinner } from "store/spinner";
import { ListsListProps } from "./types";

export const ListsList: React.FC<ListsListProps> = ({ lists, refetch }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { session_id } = useAppSelector((state) => state.auth);

  const deleteList = async (id: number) => {
    dispatch(showSpinner());

    await api.deleteList(session_id!, id);

    refetch();
    dispatch(hideSpinner());
  };

  return (
    <ListGroup className="m-3">
      {lists.map(({ id, name }) => (
        <ListGroup.Item className="lists-list-item" key={id}>
          <LinkContainer exact to={`/movie-list/${id}`}>
            <Nav.Link className="lists-list-link">{name}</Nav.Link>
          </LinkContainer>
          <Button variant="danger" size="sm" onClick={() => deleteList(id)}>
            {t("Delete")}
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
