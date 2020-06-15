import React, {Fragment} from "react";
import {Nav, Navbar} from "react-bootstrap";

const NavBar = () => {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#">EcoPortugal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Nav.Link href="#">Sugerir</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Reportar</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">Sugerir</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
}

export default NavBar;
