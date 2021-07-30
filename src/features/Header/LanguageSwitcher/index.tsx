import React from "react";
import { useAppSelector, useAppDispatch } from "hooks";
import { Col, Form } from "react-bootstrap";

import { LANGUAGES } from "constants/language";
import { SET_LANGUAGE } from "store/language/actionTypes";

export const LanguageSwitcher = () => {
  const activeLanguage = useAppSelector((state) => state.language.activeLanguage);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch({ type: SET_LANGUAGE, payload: event.target.value });

  return (
    <Col xs='auto'>
      <Form.Select size='sm' value={activeLanguage} onChange={handleChange}>
        {LANGUAGES.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </Form.Select>
    </Col>
  );
};
