import React from "react";
import { ListGroup, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useTranslation } from "react-i18next";

import { MoviesListProps } from "./MoviesList.types";
import { getImageUrl } from "utils";
import * as api from "features/MovieLists/MovieLists.api";
import { useAppDispatch, useAppSelector } from "hooks";
import { HIDE_SPINNER, SHOW_SPINNER } from "store/spinner/actionTypes";
import { SHOW_NOTICE } from "store/notice/actionTypes";

export const MoviesList: React.FC<MoviesListProps> = ({ width, withDeleteButton, list_id, refetch, movies }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const session_id = useAppSelector((state) => state.auth.session_id);

  const deleteMovieFromList = async (id: number) => {
    dispatch({ type: SHOW_SPINNER });

    const { status_message } = await api.deleteMovieFromList(list_id!, session_id, id);

    dispatch({ type: HIDE_SPINNER });
    dispatch({ type: SHOW_NOTICE, payload: status_message });

    refetch!();
  };

  return (
    <ListGroup className={`mt-3 ${width || ""}`}>
      {movies.map(({ id, title, poster_path }) => (
        <ListGroup.Item key={id}>
          <LinkContainer exact to={`/movie-details/${id}`}>
            <Nav.Link title={title}>
              <img className="movies-list-poster" src={getImageUrl(poster_path)} alt="poster" />
            </Nav.Link>
          </LinkContainer>
          {withDeleteButton && (
            <Button variant="danger" size="sm" className="m-3" onClick={() => deleteMovieFromList(id)}>
              {t("Delete")}
            </Button>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
