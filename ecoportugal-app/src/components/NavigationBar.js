import React from "react";
import {Nav, Navbar} from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">EcoPortugal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="ml-auto">
        <Nav.Link href="#home">Sugerir</Nav.Link>
        <Nav.Link href="#features">Reportar</Nav.Link>
        <Nav.Link href="#pricing">Informações</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
