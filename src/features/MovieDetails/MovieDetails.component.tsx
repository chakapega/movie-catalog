import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

import { useAppSelector } from "hooks";
import { getMovieDetails, getMovieCredits } from "./MovieDetails.api";
import { getImageUrl, limiteNumberOfActors } from "utils";
import { CastList } from "./CastList";

export const MovieDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const activeLanguage = useAppSelector((state) => state.language.activeLanguage);
  const { isSuccess: areMovieDetailsSuccess, data: movieDetails } = useQuery(["movieDetails", id, activeLanguage], () =>
    getMovieDetails(id, activeLanguage)
  );
  const { isSuccess: areMovieCreditsSuccess, data: movieCredits } = useQuery(["movieCredits", id, activeLanguage], () =>
    getMovieCredits(id, activeLanguage)
  );

  return (
    <>
      {areMovieDetailsSuccess && (
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
                {areMovieCreditsSuccess && (
                  <>
                    <p>{`${t("Starring")}:`}</p>
                    <CastList cast={limiteNumberOfActors(movieCredits.cast)} />
                  </>
                )}
              </Col>
            </Row>
          </Container>
        </Container>
      )}
    </>
  );
};
