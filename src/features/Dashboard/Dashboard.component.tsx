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
  const nowPlayingMoviesRequestAvailable = !nowPlayingMovies.length && !isLoadingNowPlayingMovies;
  const upcomingMoviesRequestAvailable = !upcomingMovies.length && !isLoadingUpcomingMovies;
  const popularMoviesRequestAvailable = !popularMovies.length && !isLodaingPopularMovies;

  useEffect(() => {
    if (nowPlayingMoviesRequestAvailable) {
      dispatch(actions.getNowPlayingMovies(activeLanguage));
    }
  }, [nowPlayingMoviesRequestAvailable, activeLanguage, dispatch]);

  useEffect(() => {
    if (upcomingMoviesRequestAvailable) {
      dispatch(actions.getUpcomingMovies(activeLanguage));
    }
  }, [upcomingMoviesRequestAvailable, activeLanguage, dispatch]);

  useEffect(() => {
    if (popularMoviesRequestAvailable) {
      dispatch(actions.getPopularMovies(activeLanguage));
    }
  }, [popularMoviesRequestAvailable, activeLanguage, dispatch]);

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
