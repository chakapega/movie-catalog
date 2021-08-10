import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

import { useAppSelector } from "hooks";
import { getMovieDetails } from "./MovieDetails.api";
import { getImageUrl } from "utils";

export const MovieDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const activeLanguage = useAppSelector((state) => state.language.activeLanguage);
  const { isSuccess, data: movieDetails } = useQuery(["movieDetails", id, activeLanguage], () =>
    getMovieDetails(id, activeLanguage)
  );

  return (
    <>
      {isSuccess && (
        <Container>
          <h3>{movieDetails.title}</h3>
          <p>{movieDetails.overview}</p>
          <Container>
            <Row>
              <Col>
                <img src={getImageUrl(movieDetails.poster_path)} alt='poster' />
              </Col>
              <Col>
                <p>{`${t("Release date")}: ${movieDetails.release_date}`}</p>
                <p>{`${t("Rating")}: ${movieDetails.vote_average}`}</p>
                {movieDetails.tagline && <p>{`${t("Tagline")}: ${movieDetails.tagline}`}</p>}
              </Col>
            </Row>
          </Container>
        </Container>
      )}
    </>
  );
};
