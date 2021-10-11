import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { EMPTY_STRING_VALUE, INDEX_OF_FIRST_ELEMENT } from "constants/common";
import * as api from "features/MovieLists/MovieLists.api";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { showSpinner, hideSpinner } from "store/spinner";
import { showNotice } from "store/notice";

export const CreateList: React.FC<{ refetch: Function }> = ({ refetch }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { session_id } = useAppSelector((state) => state.auth);
  const [name, setName] = useState(EMPTY_STRING_VALUE);
  const [description, setDescription] = useState(EMPTY_STRING_VALUE);

  const resetForm = () => {
    setName(EMPTY_STRING_VALUE);
    setDescription(EMPTY_STRING_VALUE);
  };

  const createList = async () => {
    dispatch(showSpinner());

    const { success, status_message, errors } = await api.createList(session_id!, name, description);

    dispatch(hideSpinner());

    if (success) {
      resetForm();
      dispatch(showNotice(status_message));
    } else {
      dispatch(showNotice(errors[INDEX_OF_FIRST_ELEMENT]));
    }

    refetch();
  };

  return (
    <>
      <Form className="m-3">
        <Form.Group className="mb-3">
          <Form.Label>{t("List name")}</Form.Label>
          <Form.Control type="text" value={name} onChange={({ target: { value } }) => setName(value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>{t("List description")}</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            value={description}
            onChange={({ target: { value } }) => setDescription(value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={createList} disabled={!name || !description}>
          {t("Create list")}
        </Button>
      </Form>
    </>
  );
};
