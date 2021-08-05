import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { EMPTY_MOVIE_DETAILS_VALUE } from "./MovieDetails.constants";
import { useAppSelector } from "hooks";
import { getMovieDetails } from "./MovieDetails.api";
import { IMAGE_TMDB_BASE_URL } from "constants/api";

export const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const activeLanguage = useAppSelector((state) => state.language.activeLanguage);
  const [movieDetails, setMovieDetails] = useState(EMPTY_MOVIE_DETAILS_VALUE);
  const { t } = useTranslation();

  useEffect(() => {
    getMovieDetails(id, activeLanguage).then((movieDetails) => setMovieDetails(movieDetails));
  }, [id, activeLanguage]);

  return (
    <>
      {movieDetails && (
        <Container>
          <h3>{movieDetails.title}</h3>
          <p>{movieDetails.overview}</p>
          <Container>
            <Row>
              <Col>
                <img src={`${IMAGE_TMDB_BASE_URL}/${movieDetails.poster_path}`} alt='poster' />
              </Col>
              <Col>
                <p>{`${t("Release date")}: ${movieDetails.release_date}`}</p>
                <p>{`${t("Rating")}: ${movieDetails.vote_average}`}</p>
                <p>{`${t("Tagline")}: ${movieDetails.tagline}`}</p>
              </Col>
            </Row>
          </Container>
        </Container>
      )}
    </>
  );
};
