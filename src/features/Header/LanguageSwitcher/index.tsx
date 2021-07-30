import React from "react";
import { Col, Form } from "react-bootstrap";

import { LANGUAGES } from "constants/language";

export const LanguageSwitcher = () => (
  <Col xs='auto'>
    <Form.Select size='sm'>
      {LANGUAGES.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </Form.Select>
  </Col>
);
