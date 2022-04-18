import React from "react";

import { Button, Container, Card, Form, Row, Tabs, Tab } from "react-bootstrap";
import Nav from "./Nav";

export default function Homepage() {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "2rem",
        height: "100vh",
      }}
    >
      <Nav />
      <Card
        style={{
          padding: "2rem",
        }}
      >
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Athlete">
            <h1>Athlete Sign-In</h1>
            <Container>
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

                  <Button variant="primary" type="submit" href="/athlete">
                    Login
                  </Button>
                </Form>
              </Row>
            </Container>
          </Tab>

          <Tab eventKey="profile" title="Coach">
            <h1>Coach Sign-In</h1>
            <Container>
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

                  <Button variant="primary" type="submit" href="/coach">
                    Login
                  </Button>
                </Form>
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </Card>
    </div>
  );
}
