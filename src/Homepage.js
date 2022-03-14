import React from "react";

import { Button, Container, Form, Row } from "react-bootstrap";

export default function Homepage() {
  return <div>

    <Container>
      <Row>
        Dis da Homepage
      </Row>
      <Row>
        <Form className="rounded">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Row>
    </Container>
  </div>;
}
