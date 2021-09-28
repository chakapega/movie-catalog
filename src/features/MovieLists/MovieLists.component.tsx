import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { Container, Row, Col } from "react-bootstrap";

import { useAppSelector } from "hooks/common";
import * as accountApi from "features/Account/Account.api";
import { CreateList } from "./CreateList";
import { ListsList } from "./ListsList";

export const MovieLists = () => {
  const { t } = useTranslation();
  const session_id = useAppSelector((state) => state.auth.session_id);
  const accountDetails = useAppSelector((state) => state.account.accountDetails);
  const { data: createdLists, refetch } = useQuery(
    "getCreatedLists",
    () => accountApi.getCreatedLists(session_id, accountDetails!.id),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  useEffect(() => {
    if (session_id && accountDetails?.id) {
      refetch();
    }
  }, [session_id, accountDetails?.id, refetch]);

  return (
    <Container>
      <Row>
        <Col>
          <span className="m-5">{t("Create list")}</span>
          <CreateList refetch={refetch} />
        </Col>
      </Row>
      <span className="m-3">{t("Created lists")}</span>
      {createdLists?.length && (
        <Row>
          <Col>
            <ListsList lists={createdLists} />
          </Col>
        </Row>
      )}
    </Container>
  );
};
