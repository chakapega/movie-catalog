import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useQuery } from "react-query";

import * as api from "features/MovieLists/MovieLists.api";
import { MoviesList } from "features/Dashboard/MoviesList";

export const ListDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: listDetails, refetch } = useQuery(["getListDetails", id], () => api.getListDetails(id));

  return (
    <Container>
      {listDetails && (
        <>
          <h3>{listDetails.name}</h3>
          <span>{listDetails.description}</span>
          <MoviesList
            width="w-25"
            withDeleteButton
            list_id={listDetails.id}
            refetch={refetch}
            movies={listDetails.items}
          />
        </>
      )}
    </Container>
  );
};
