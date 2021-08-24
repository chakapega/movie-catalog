import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { LinkContainer } from "react-router-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { AuthenticationButton } from "features/Auth/AuthenticationButton";

export const Header = () => {
  const { t } = useTranslation();
  const { user } = useAuth0();

  return (
    <Navbar bg='light' expand='lg' className='header__navbar'>
      <Navbar.Toggle aria-controls='navbar-nav' />
      <Navbar.Collapse id='navbar-nav'>
        <Nav className='mr-auto'>
          <LinkContainer exact to='/'>
            <Nav.Link>{t("Dashboard")}</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/movies'>
            <Nav.Link>{t("Movies")}</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/random-movie'>
            <Nav.Link>{t("Random movie")}</Nav.Link>
          </LinkContainer>
        </Nav>
        <LanguageSwitcher />
        <AuthenticationButton />
        {user?.email && <span>{user.email}</span>}
      </Navbar.Collapse>
    </Navbar>
  );
};
