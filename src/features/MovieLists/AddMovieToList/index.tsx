import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { EMPTY_STRING_VALUE, INDEX_OF_FIRST_ELEMENT } from "constants/common";
import * as api from "features/MovieLists/MovieLists.api";
import { showSpinner, hideSpinner } from "store/spinner";
import { showNotice } from "store/notice";
import { useCreatedLists } from "features/MovieLists/MovieLists.hooks";
import { List } from "features/MovieLists/ListsList/types";

export const AddMovieToList: React.FC<{ setShowAddMovieToList: Function }> = ({ setShowAddMovieToList }) => {
  const { t } = useTranslation();
  const { id: movieId } = useParams<{ id: string }>();
  const { session_id } = useAppSelector((state) => state.auth);
  const [selectedListId, setSelectedListId] = useState<string>(EMPTY_STRING_VALUE);
  const dispatch = useAppDispatch();
  const { createdLists } = useCreatedLists();

  useEffect(() => {
    if (createdLists) setSelectedListId(String(createdLists[INDEX_OF_FIRST_ELEMENT].id));
  }, [createdLists]);

  const handleClose = () => setShowAddMovieToList(false);

  const changeSelectedListId = (event: React.ChangeEvent<HTMLSelectElement>) => setSelectedListId(event.target.value);

  const addMovieToList = async () => {
    dispatch(showSpinner());

    const { status_message } = await api.addMovieToList(selectedListId, session_id!, movieId);

    dispatch(hideSpinner());
    dispatch(showNotice(status_message));
    handleClose();
  };

  return (
    <Modal show onHide={handleClose}>
      <Modal.Body>
        <span>{t("List name")}</span>
        {createdLists && (
          <Form.Select className="mt-1" size="sm" value={selectedListId} onChange={changeSelectedListId}>
            {createdLists.map(({ id, name }: List) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Form.Select>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {t("Close")}
        </Button>
        <Button variant="success" onClick={addMovieToList} disabled={!selectedListId}>
          {t("Add")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
