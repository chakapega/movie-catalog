import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

import { useAppSelector } from "store/hooks";
import { movieType } from "./Dashboard.constants";
import { useGetMoviesQuery } from "./Dashboard.api";
import { MoviesList } from "features/MoviesList/MoviesList.component";
import { limiteNumberOfMovies } from "utils";

export const Dashboard = () => {
  const { t } = useTranslation();
  const { activeLanguage } = useAppSelector((state) => state.language);
  const { data: nowPlayingMovies } = useGetMoviesQuery({
    moviesType: movieType.nowPlaying,
    activeLanguage,
  });
  const { data: upcomingMovies } = useGetMoviesQuery({
    moviesType: movieType.upcoming,
    activeLanguage,
  });
  const { data: popularMovies } = useGetMoviesQuery({
    moviesType: movieType.popular,
    activeLanguage,
  });

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="text-center">{t("Now playing")}</h3>
          {nowPlayingMovies?.length && <MoviesList movies={limiteNumberOfMovies(nowPlayingMovies)} />}
        </Col>
        <Col>
          <h3 className="text-center">{t("Upcoming")}</h3>
          {upcomingMovies?.length && <MoviesList movies={limiteNumberOfMovies(upcomingMovies)} />}
        </Col>
        <Col>
          <h3 className="text-center">{t("Popular")}</h3>
          {popularMovies?.length && <MoviesList movies={limiteNumberOfMovies(popularMovies)} />}
        </Col>
      </Row>
    </Container>
  );
};
