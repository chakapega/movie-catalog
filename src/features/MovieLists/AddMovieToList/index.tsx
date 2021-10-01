import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { AddMovieToListProps, ListType } from "features/MovieLists/types";
import { useAppSelector, useCreatedLists } from "hooks/common";
import { EMPTY_STRING_VALUE, INDEX_OF_FIRST_ELEMENT } from "constants/common";
import * as api from "features/MovieLists/MovieLists.api";

export const AddMovieToList: React.FC<AddMovieToListProps> = ({ setShowAddMovieToList }) => {
  const { t } = useTranslation();
  const { id: movieId } = useParams<{ id: string }>();
  const session_id = useAppSelector((state) => state.auth.session_id);
  const { createdLists } = useCreatedLists();
  const [selectedListId, setSelectedListId] = useState<string>(EMPTY_STRING_VALUE);

  useEffect(() => {
    if (createdLists) setSelectedListId(String(createdLists[INDEX_OF_FIRST_ELEMENT].id));
  }, [createdLists]);

  const close = () => setShowAddMovieToList(false);

  const changeSelectedListId = (event: React.ChangeEvent<HTMLSelectElement>) => setSelectedListId(event.target.value);

  const addMovieToList = () => {
    api.addMovieToList(selectedListId, session_id!, movieId);

    close();
  };

  return (
    <Modal show onHide={close}>
      <Modal.Body>
        <span>{t("List name")}</span>
        {createdLists && (
          <Form.Select className="mt-1" size="sm" value={selectedListId} onChange={changeSelectedListId}>
            {createdLists.map(({ id, name }: ListType) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Form.Select>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          {t("Close")}
        </Button>
        <Button variant="success" onClick={addMovieToList} disabled={!selectedListId}>
          {t("Add")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
