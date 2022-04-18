import React, { useEffect, useState } from "react";

import {
  Button,
  Alert,
  Container,
  Card,
  Form,
  Row,
  Tabs,
  Tab,
} from "react-bootstrap";
import Nav from "./Nav";

export default function Homepage() {
  const [error, setError] = useState(0);

  const attemptLogin = (link) => {
    if (error === 2) window.location.href = link;
    else {
      setError(error + 1);
    }
  };

  const errorMsg =
    error === 1
      ? "The Email Address field is required"
      : "Email Address and Password does not match";

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
                  {error !== 0 && (
                    <Alert
                      variant="danger"
                      style={{
                        padding: "10px 0px 0px 10px",
                      }}
                    >
                      <p>{errorMsg}</p>
                    </Alert>
                  )}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="password"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                  </Form.Group>

                  <Button
                    variant="primary"
                    onClick={() => attemptLogin("/athlete")}
                  >
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
                  {error !== 0 && (
                    <Alert
                      variant="danger"
                      style={{
                        padding: "10px 0px 0px 10px",
                      }}
                    >
                      <p>{errorMsg}</p>
                    </Alert>
                  )}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" required />
                  </Form.Group>

                  <Button
                    variant="primary"
                    onClick={() => attemptLogin("/coach")}
                  >
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
