import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import { useGetListDetailsQuery } from "features/MovieLists/MovieLists.api";
import { MoviesList } from "features/MoviesList/MoviesList.component";

export const ListDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: listDetails, refetch } = useGetListDetailsQuery(id);

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
