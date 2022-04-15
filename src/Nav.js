import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavDisplay() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">FINS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="\coach">Coach</Nav.Link>
            <Nav.Link href="\athelte">Athlete</Nav.Link>
            <Nav.Link href="\coach" className="ml-auto">
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
