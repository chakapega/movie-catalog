import React from "react";
import { Col, Form } from "react-bootstrap";

import { useAppSelector, useAppDispatch } from "store/hooks";
import { LANGUAGES } from "constants/language";
import { changeActiveLanguage } from "store/language";

export const LanguageSwitcher = () => {
  const { activeLanguage } = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    dispatch(changeActiveLanguage(value));
    localStorage.setItem("activeLanguage", value);
  };

  return (
    <Col xs="auto">
      <Form.Select size="sm" value={activeLanguage} onChange={handleChange}>
        {LANGUAGES.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </Form.Select>
    </Col>
  );
};
