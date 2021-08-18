import React, { useEffect, useState } from "react";
import { useAppSelector } from "hooks";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import englishLocale from "date-fns/locale/en-US";
import russianLocale from "date-fns/locale/ru";

import { GenreType, SelectedFiltersType } from "./types";
import { getGenres, getMoviesByFilters } from "./Movies.api";
import { EMPTY_GENRES_VALUE } from "./Movies.constants";
import { EMPTY_STRING, PAGE_NUMBER_ONE } from "constants/common";
import { Pagination } from "features/Pagination";
import { MoviesList } from "features/Dashboard/MoviesList";
import { getDateString } from "utils";
import { language } from "constants/language";

import "react-datepicker/dist/react-datepicker.css";

registerLocale(language.english, englishLocale);
registerLocale(language.russian, russianLocale);

export const Movies = () => {
  const { t } = useTranslation();
  const activeLanguage = useAppSelector((state) => state.language.activeLanguage);
  const { isSuccess: areGenresSuccess, data: genres } = useQuery(
    ["getGenres", activeLanguage],
    () => getGenres(activeLanguage),
    { initialData: EMPTY_GENRES_VALUE }
  );
  const [genreId, setGenreId] = useState<string>(EMPTY_STRING);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersType>(null);
  const [page, setPage] = useState(PAGE_NUMBER_ONE);
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
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

  useEffect(() => {
    setDefaultLocale(activeLanguage!);
  }, [activeLanguage]);

  const genreChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => setGenreId(event.target.value);

  const changePageHandler = (selectedPage: number) => setPage(selectedPage);

  const submitHandler = () => {
    setSelectedFilters({
      genreId,
      startDate: startDate ? getDateString(startDate) : startDate,
      endDate: endDate ? getDateString(endDate) : endDate,
    });
    setPage(PAGE_NUMBER_ONE);
  };

  return (
    <Container>
      <Row className='m-3'>
        {areGenresSuccess && (
          <Col xs='auto'>
            <p>{t("Genre")}</p>
            <Form.Select size='sm' value={genreId} onChange={genreChangeHandler}>
              <option value=''>{t("All")}</option>
              {genres.map(({ id, name }: GenreType) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Form.Select>
          </Col>
        )}
        <Col className='date-pickers-container'>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            startDate={startDate}
            endDate={endDate}
            isClearable={startDate}
            placeholderText={t("Start release date")}
            dropdownMode='select'
            selectsStart
            peekNextMonth
            showMonthDropdown
            showYearDropdown
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            isClearable={endDate}
            placeholderText={t("End release date")}
            dropdownMode='select'
            selectsEnd
            peekNextMonth
            showMonthDropdown
            showYearDropdown
          />
        </Col>
        <Col>
          <Button variant='primary' onClick={submitHandler} className='mt-3'>
            {t("Apply")}
          </Button>
        </Col>
      </Row>
      {areMoviesSuccess && selectedFilters && (
        <>
          <MoviesList movies={searchedMoviesData.results} />
          <Pagination page={page} totalPages={searchedMoviesData.total_pages} changePageHandler={changePageHandler} />
        </>
      )}
    </Container>
  );
};
