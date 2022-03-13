import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import LineChart from "./components/LineChart";

// import { useParams } from "react-router-dom";

export default function Coach() {
  // const { id = "undefined" } = useParams();
  return <div>

    <Container>

      <Row>
        <h1>Coach Name</h1>
        <h2>Team Name</h2>
      </Row>

      <Row>

        <h3>Most Active</h3>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Specialty</th>
              <th>Training Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Joseph</td>
              <td>Sprints</td>
              <td>4.6</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thorton</td>
              <td>Distance</td>
              <td>3.2</td>
            </tr>
            <tr>
              <td colSpan={3}>Team</td>
              <td>@46.2</td>
            </tr>
          </tbody>
        </Table>

      </Row>

      <Row>

        <h3>Most Progressive</h3>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Specialty</th>
              <th>Progression</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tim</td>
              <td>Jones</td>
              <td>Sprints</td>
              <td>3.0%</td>
            </tr>
            <tr>
              <td>Tony</td>
              <td>Mack</td>
              <td>Distance</td>
              <td>2.8%</td>
            </tr>
            <tr>
              <td colSpan={3}>Team</td>
              <td>@0.7%</td>
            </tr>
          </tbody>
        </Table>

      </Row>

      <Row>
        <LineChart />
      </Row>

    </Container>

  </div>
}
