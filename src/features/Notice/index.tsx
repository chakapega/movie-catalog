import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "hooks/common";
import { HIDE_NOTICE } from "store/notice/actionTypes";

export const Notice = () => {
  const { t } = useTranslation();
  const { isShowNotice, text } = useAppSelector((state) => state.notice);
  const dispatch = useAppDispatch();

  const handleClose = () => dispatch({ type: HIDE_NOTICE });

  return (
    <Modal show={isShowNotice} onHide={handleClose}>
      <Modal.Body>{text}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {t("Close")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
