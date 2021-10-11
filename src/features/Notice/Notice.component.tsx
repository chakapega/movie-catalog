import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { hideNotice } from "store/notice";

export const Notice = () => {
  const { t } = useTranslation();
  const { isShow, text } = useAppSelector((state) => state.notice);
  const dispatch = useAppDispatch();

  const handleClose = () => dispatch(hideNotice());

  return (
    <Modal show={isShow} onHide={handleClose}>
      <Modal.Body>{text}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {t("Close")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
