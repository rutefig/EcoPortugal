import React from "react";
import {Nav, Navbar} from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>EcoPortugal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="ml-auto">
        <Nav.Link href="#sugerir">Sugerir</Nav.Link>
        <Nav.Link href="#reportar">Reportar</Nav.Link>
        <Nav.Link href="#informacoes">Informações</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
