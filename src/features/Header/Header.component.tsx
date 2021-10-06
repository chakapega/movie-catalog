import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { LinkContainer } from "react-router-bootstrap";

import { useAppSelector } from "hooks";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { AuthenticationButton } from "features/Auth/AuthenticationButton.component";
import { AccountDetails } from "features/Account/AccountDetails.component";

export const Header = () => {
  const { t } = useTranslation();
  const session_id = useAppSelector((state) => state.auth.session_id);

  return (
    <Navbar bg="light" expand="lg" className="header__navbar">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer exact to="/">
            <Nav.Link>{t("Dashboard")}</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/movies">
            <Nav.Link>{t("Movies")}</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/random-movie">
            <Nav.Link>{t("Random movie")}</Nav.Link>
          </LinkContainer>
          {session_id && (
            <LinkContainer to="/movie-lists">
              <Nav.Link>{t("Movie lists")}</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
        <LanguageSwitcher />
        <AccountDetails />
        <AuthenticationButton />
      </Navbar.Collapse>
    </Navbar>
  );
};
