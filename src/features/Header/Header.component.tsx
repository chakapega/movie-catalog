import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => (
  <Navbar bg='light' expand='lg'>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto'>
        <LinkContainer exact to='/'>
          <Nav.Link>Dashboard</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/movies'>
          <Nav.Link>Movies</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/random-movie'>
          <Nav.Link>Random movie</Nav.Link>
        </LinkContainer>
      </Nav>
      <LanguageSwitcher />
    </Navbar.Collapse>
  </Navbar>
);
