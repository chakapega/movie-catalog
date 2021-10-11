import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { useQuery } from "react-query";

import { useAppSelector } from "store/hooks";
import { movieType } from "./Dashboard.constants";
import { getMovies } from "./Dashboard.api";
import { MoviesList } from "features/MoviesList/MoviesList.component";
import { limiteNumberOfMovies } from "utils";

export const Dashboard = () => {
  const { t } = useTranslation();
  const { activeLanguage } = useAppSelector((state) => state.language);
  const { isSuccess: areNowPlayingMoviesAvailable, data: nowPlayingMovies } = useQuery(
    [movieType.nowPlaying, activeLanguage],
    () => getMovies(movieType.nowPlaying, activeLanguage)
  );
  const { isSuccess: areUpcomingMoviesAvailable, data: upcomingMovies } = useQuery(
    [movieType.upcoming, activeLanguage],
    () => getMovies(movieType.upcoming, activeLanguage)
  );
  const { isSuccess: arePopularMoviesAvailable, data: popularMovies } = useQuery(
    [movieType.popular, activeLanguage],
    () => getMovies(movieType.popular, activeLanguage)
  );

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="text-center">{t("Now playing")}</h3>
          {areNowPlayingMoviesAvailable && <MoviesList movies={limiteNumberOfMovies(nowPlayingMovies)} />}
        </Col>
        <Col>
          <h3 className="text-center">{t("Upcoming")}</h3>
          {areUpcomingMoviesAvailable && <MoviesList movies={limiteNumberOfMovies(upcomingMovies)} />}
        </Col>
        <Col>
          <h3 className="text-center">{t("Popular")}</h3>
          {arePopularMoviesAvailable && <MoviesList movies={limiteNumberOfMovies(popularMovies)} />}
        </Col>
      </Row>
    </Container>
  );
};
