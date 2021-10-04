import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { AddMovieToListProps, ListType } from "features/MovieLists/types";
import { useAppDispatch, useAppSelector, useCreatedLists } from "hooks/common";
import { EMPTY_STRING_VALUE, INDEX_OF_FIRST_ELEMENT } from "constants/common";
import * as api from "features/MovieLists/MovieLists.api";
import { HIDE_SPINNER, SHOW_SPINNER } from "store/spinner/actionTypes";
import { SHOW_NOTICE } from "store/notice/actionTypes";

export const AddMovieToList: React.FC<AddMovieToListProps> = ({ setShowAddMovieToList }) => {
  const { t } = useTranslation();
  const { id: movieId } = useParams<{ id: string }>();
  const session_id = useAppSelector((state) => state.auth.session_id);
  const [selectedListId, setSelectedListId] = useState<string>(EMPTY_STRING_VALUE);
  const dispatch = useAppDispatch();
  const { createdLists } = useCreatedLists();

  useEffect(() => {
    if (createdLists) setSelectedListId(String(createdLists[INDEX_OF_FIRST_ELEMENT].id));
  }, [createdLists]);

  const handleClose = () => setShowAddMovieToList(false);

  const changeSelectedListId = (event: React.ChangeEvent<HTMLSelectElement>) => setSelectedListId(event.target.value);

  const addMovieToList = async () => {
    dispatch({ type: SHOW_SPINNER });

    const { status_message } = await api.addMovieToList(selectedListId, session_id!, movieId);

    dispatch({ type: HIDE_SPINNER });
    dispatch({ type: SHOW_NOTICE, payload: status_message });

    handleClose();
  };

  return (
    <Modal show onHide={handleClose}>
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
