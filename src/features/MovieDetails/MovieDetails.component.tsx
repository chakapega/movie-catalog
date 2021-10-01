import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

import { useAppSelector } from "hooks/common";
import { getMovieInfo } from "./MovieDetails.api";
import { getImageUrl, limiteNumberOfActors, limiteNumberOfMovies } from "utils";
import { CastList } from "./CastList";
import { RecommendedMoviesList } from "./RecommendedMoviesList";
import { movieInfoType } from "./MovieDetails.constants";
import { MovieDetailsProps } from "./types";
import { AddMovieToList } from "features/MovieLists/AddMovieToList";

export const MovieDetails: React.FC<MovieDetailsProps> = ({ movieId }) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const resultMovieId = movieId || id;
  const activeLanguage = useAppSelector((state) => state.language.activeLanguage);
  const session_id = useAppSelector((state) => state.auth.session_id);
  const [showAddMovieToList, setShowAddMovieToList] = useState(false);
  const { isSuccess: areMovieDetailsSuccess, data: movieDetails } = useQuery(
    [movieInfoType.details, resultMovieId, activeLanguage],
    () => getMovieInfo(movieInfoType.details, resultMovieId, activeLanguage)
  );
  const { isSuccess: areMovieCreditsSuccess, data: movieCredits } = useQuery(
    [movieInfoType.credits, resultMovieId, activeLanguage],
    () => getMovieInfo(movieInfoType.credits, resultMovieId, activeLanguage)
  );
  const { isSuccess: areRecommendedMoviesSuccess, data: recommendedMovies } = useQuery(
    [movieInfoType.recommendations, resultMovieId, activeLanguage],
    () => getMovieInfo(movieInfoType.recommendations, resultMovieId, activeLanguage)
  );

  return (
    <>
      {areMovieDetailsSuccess && (
        <Container className="movie-details-container">
          <h3>{movieDetails.title}</h3>
          <p>{movieDetails.overview}</p>
          <Container>
            <Row>
              <Col>
                <img src={getImageUrl(movieDetails.poster_path)} alt="poster" />
              </Col>
              <Col>
                {session_id && (
                  <Button className="mb-3" variant="success" onClick={() => setShowAddMovieToList(true)}>
                    {t("Add to list")}
                  </Button>
                )}
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
      {showAddMovieToList && <AddMovieToList setShowAddMovieToList={setShowAddMovieToList} />}
    </>
  );
};
