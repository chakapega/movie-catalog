import React, { useEffect, useState } from "react";
import { useAppSelector } from "hooks";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";

import { GenreType, SelectedFiltersType } from "./types";
import { getGenres, getMoviesByFilters } from "./Movies.api";
import { EMPTY_GENRES_VALUE } from "./Movies.constants";
import { EMPTY_STRING, PAGE_NUMBER_ONE } from "constants/common";
import { Pagination } from "features/Pagination";
import { MoviesList } from "features/Dashboard/MoviesList";

export const Movies = () => {
  const { t } = useTranslation();
  const activeLanguage = useAppSelector((state) => state.language.activeLanguage);
  const { isSuccess: areGenresSuccess, data: genres } = useQuery(
    ["getGenres", activeLanguage],
    () => getGenres(activeLanguage),
    { initialData: EMPTY_GENRES_VALUE }
  );
  const [selectedGenreId, setSelectedGenreId] = useState<string>(EMPTY_STRING);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersType>(null);
  const [page, setPage] = useState(PAGE_NUMBER_ONE);
  const {
    isSuccess: areMoviesSuccess,
    data: searchedMoviesData,
    refetch,
  } = useQuery(["getMoviesByFilters", page], () => getMoviesByFilters(activeLanguage, selectedFilters, page), {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  useEffect(() => {
    if (selectedFilters) refetch();
  }, [refetch, selectedFilters, activeLanguage, page]);

  const genreChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => setSelectedGenreId(event.target.value);

  const submitHandler = () => {
    setSelectedFilters({ genreId: selectedGenreId });
    setPage(PAGE_NUMBER_ONE);
  };

  const changePageHandler = (selectedPage: number) => setPage(selectedPage);

  return (
    <Container>
      <Row className='m-3'>
        {areGenresSuccess && (
          <Col xs='auto'>
            <p>{t("Genre")}</p>
            <Form.Select size='sm' value={selectedGenreId} onChange={genreChangeHandler}>
              <option value=''></option>
              {genres.map(({ id, name }: GenreType) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Form.Select>
          </Col>
        )}
        <Col>
          <Button variant='primary' onClick={submitHandler}>
            {t("Apply")}
          </Button>
        </Col>
      </Row>
      {areMoviesSuccess && (
        <>
          <MoviesList movies={searchedMoviesData.results} />
          <Pagination page={page} totalPages={searchedMoviesData.total_pages} changePageHandler={changePageHandler} />
        </>
      )}
    </Container>
  );
};
