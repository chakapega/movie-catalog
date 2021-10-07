import React, { useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import englishLocale from "date-fns/locale/en-US";
import russianLocale from "date-fns/locale/ru";
import { useQuery } from "react-query";

import { useAppSelector } from "hooks";
import { Language } from "constants/language";
import { FiltersProps, GenreType, ProviderType } from "./Filters.types";
import * as api from "features/Filters/Filters.api";
import { EMPTY_GENRES_VALUE } from "features/Movies/Movies.constants";

import "react-datepicker/dist/react-datepicker.css";

registerLocale(Language.english, englishLocale);
registerLocale(Language.russian, russianLocale);

export const Filters: React.FC<FiltersProps> = ({
  submit,
  genreId,
  changeGenreId,
  providerId,
  changeProviderId,
  startDate,
  changeStartDate,
  endDate,
  changeEndDate,
}) => {
  const { t } = useTranslation();
  const activeLanguage = useAppSelector((state) => state.language.activeLanguage);

  const { data: genres } = useQuery(["getGenres", activeLanguage], () => api.getGenres(activeLanguage), {
    initialData: EMPTY_GENRES_VALUE,
  });

  const { data: providers } = useQuery(["getMovieProviders", activeLanguage], () =>
    api.getMovieProviders(activeLanguage)
  );

  useEffect(() => {
    setDefaultLocale(activeLanguage!);
  }, [activeLanguage]);

  return (
    <Row className="m-3">
      {genres.length && (
        <Col xs="auto">
          <p>{t("Genre")}</p>
          <Form.Select size="sm" value={genreId} onChange={changeGenreId}>
            <option value="">{t("All")}</option>
            {genres.map(({ id, name }: GenreType) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Form.Select>
        </Col>
      )}
      {providers.length && (
        <Col xs="auto">
          <p>{t("Provider")}</p>
          <Form.Select size="sm" value={providerId} onChange={changeProviderId}>
            <option value="">{t("All")}</option>
            {providers.map(({ provider_id, provider_name }: ProviderType) => (
              <option key={provider_id} value={provider_id}>
                {provider_name}
              </option>
            ))}
          </Form.Select>
        </Col>
      )}
      <Col>
        <DatePicker
          selected={startDate}
          onChange={(date) => changeStartDate(date)}
          startDate={startDate}
          endDate={endDate}
          isClearable={startDate}
          placeholderText={t("Start release date")}
          dropdownMode="select"
          selectsStart
          peekNextMonth
          showMonthDropdown
          showYearDropdown
        />
        <div className="data-pickers-separator" />
        <DatePicker
          selected={endDate}
          onChange={(date) => changeEndDate(date)}
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          isClearable={endDate}
          placeholderText={t("End release date")}
          dropdownMode="select"
          selectsEnd
          peekNextMonth
          showMonthDropdown
          showYearDropdown
        />
      </Col>
      <Col>
        <Button variant="primary" onClick={submit} className="mt-3">
          {t("Apply")}
        </Button>
      </Col>
    </Row>
  );
};