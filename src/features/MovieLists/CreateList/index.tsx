import React, { useState } from "react";
import { Form, Button, Toast } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { EMPTY_STRING_VALUE } from "constants/common";
import * as api from "features/MovieLists/MovieLists.api";
import { useAppSelector } from "hooks/common";

export const CreateList: React.FC<{ refetch: Function }> = ({ refetch }) => {
  const { t } = useTranslation();
  const session_id = useAppSelector((state) => state.auth.session_id);
  const [isShowToast, setIsShowToast] = useState(false);
  const [status, setStatus] = useState<string>();
  const [name, setName] = useState(EMPTY_STRING_VALUE);
  const [description, setDescription] = useState(EMPTY_STRING_VALUE);

  const resetForm = () => {
    setName(EMPTY_STRING_VALUE);
    setDescription(EMPTY_STRING_VALUE);
  };

  const createList = () => {
    api.createList(session_id!, name, description).then(({ success }) => {
      if (success) {
        setStatus("Success");
        resetForm();
        setIsShowToast(true);
        refetch();
      } else {
        setStatus("Error");
        setIsShowToast(true);
      }
    });
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
        <Button variant="primary" onClick={() => createList()} disabled={!name || !description}>
          {t("Create list")}
        </Button>
        {isShowToast && (
          <Toast className="m-5" onClose={() => setIsShowToast(false)}>
            <Toast.Header>
              <strong className="me-auto">{t(status!)}</strong>
            </Toast.Header>
          </Toast>
        )}
      </Form>
    </>
  );
};
