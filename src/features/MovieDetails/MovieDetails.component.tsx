import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

import { useAppSelector } from "hooks";
import { getMovieInfo } from "./MovieDetails.api";
import { getImageUrl, limiteNumberOfActors, limiteNumberOfMovies } from "utils";
import { CastList } from "./CastList";
import { RecommendedMoviesList } from "./RecommendedMoviesList";
import { movieInfoType } from "./MovieDetails.constants";

export const MovieDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const activeLanguage = useAppSelector((state) => state.language.activeLanguage);
  const { isSuccess: areMovieDetailsSuccess, data: movieDetails } = useQuery(
    [movieInfoType.details, id, activeLanguage],
    () => getMovieInfo(movieInfoType.details, id, activeLanguage)
  );
  const { isSuccess: areMovieCreditsSuccess, data: movieCredits } = useQuery(
    [movieInfoType.credits, id, activeLanguage],
    () => getMovieInfo(movieInfoType.credits, id, activeLanguage)
  );
  const { isSuccess: areRecommendedMoviesSuccess, data: recommendedMovies } = useQuery(
    [movieInfoType.recommendations, id, activeLanguage],
    () => getMovieInfo(movieInfoType.recommendations, id, activeLanguage)
  );

  return (
    <>
      {areMovieDetailsSuccess && (
        <Container className='movie-details__container'>
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
                {areRecommendedMoviesSuccess && (
                  <>
                    <p>{`${t("Recommended movies")}:`}</p>
                    <RecommendedMoviesList recommendedMovies={limiteNumberOfMovies(recommendedMovies.results)} />
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
