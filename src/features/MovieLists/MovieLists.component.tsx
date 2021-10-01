import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

import { useCreatedLists } from "hooks/common";
import { CreateList } from "./CreateList";
import { ListsList } from "./ListsList";

export const MovieLists = () => {
  const { t } = useTranslation();
  const { createdLists, refetch } = useCreatedLists();

  return (
    <Container>
      <Row>
        <Col>
          <span>{t("Create list")}</span>
          <CreateList refetch={refetch} />
        </Col>
      </Row>
      <Row>
        <Col>
          <span>{t("Created lists")}</span>
          {createdLists?.length && <ListsList lists={createdLists} refetch={refetch} />}
        </Col>
      </Row>
    </Container>
  );
};
