import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import * as api from "features/MovieLists/MovieLists.api";
import { ListDetailsType } from "features/MovieLists/types";
import { MoviesList } from "features/Dashboard/MoviesList";

export const ListDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [listDetails, setListDetails] = useState<ListDetailsType>();

  useEffect(() => {
    (async () => {
      if (id) {
        const listDetails = await api.getDetails(id);

        setListDetails(listDetails);
      }
    })();
  }, [id]);

  return (
    <Container>
      {listDetails && (
        <>
          <h3>{listDetails.name}</h3>
          <span>{listDetails.description}</span>
          <MoviesList movies={listDetails.items} />
        </>
      )}
    </Container>
  );
};
