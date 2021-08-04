import { useAppThunkDispatch, useAppSelector } from "hooks";
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import * as actions from "./Dashboard.actions";

import { MoviesList } from "./MoviesList";

export const Dashboard = () => {
  const { t } = useTranslation();
  const dispatch = useAppThunkDispatch();
  const activeLanguage = useAppSelector((state) => state.language.activeLanguage);
  const {
    isLoadingNowPlayingMovies,
    nowPlayingMovies,
    isLoadingUpcomingMovies,
    upcomingMovies,
    isLodaingPopularMovies,
    popularMovies,
  } = useAppSelector((state) => state.dashboard);
  const getNowPlayingMoviesAvailable = !nowPlayingMovies.length && !isLoadingNowPlayingMovies;
  const getUpcomingMoviesAvailable = !upcomingMovies.length && !isLoadingUpcomingMovies;
  const getPopularMoviesAvailable = !popularMovies.length && !isLodaingPopularMovies;

  useEffect(() => {
    if (getNowPlayingMoviesAvailable) {
      dispatch(actions.getNowPlayingMovies(activeLanguage));
    }
  }, [getNowPlayingMoviesAvailable, activeLanguage, dispatch]);

  useEffect(() => {
    if (getUpcomingMoviesAvailable) {
      dispatch(actions.getUpcomingMovies(activeLanguage));
    }
  }, [getUpcomingMoviesAvailable, activeLanguage, dispatch]);

  useEffect(() => {
    if (getPopularMoviesAvailable) {
      dispatch(actions.getPopularMovies(activeLanguage));
    }
  }, [getPopularMoviesAvailable, activeLanguage, dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <h3>{t("Now playing")}</h3>
          <MoviesList movies={nowPlayingMovies} />
        </Col>
        <Col>
          <h3>{t("Upcoming")}</h3>
          <MoviesList movies={upcomingMovies} />
        </Col>
        <Col>
          <h3>{t("Popular")}</h3>
          <MoviesList movies={popularMovies} />
        </Col>
      </Row>
    </Container>
  );
};
