import React, { useState, useEffect } from "react";
import { Container, Row, Table } from "react-bootstrap";
import LineChart from "./components/LineChart";
import { atheltes } from "./Constants";

// import { useParams } from "react-router-dom";

export default function Coach() {
  // const { id = "undefined" } = useParams();
  const [filter, setFilter] = useState(null);

  return (
    <div>
      <Container>
        <Row>
          <h1>Team Name</h1>
          <h2>Coach Name</h2>
          <h3> (in the works - Tom - Filter based on stroke and speciality)</h3>
        </Row>

        <Row>
          <h3>Most Active</h3>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Specialty</th>
                <th>Stroke</th>
                <th>Training Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark Joseph</td>
                <td>Sprints</td>
                <td>IM, Freestyle</td>
                <td>4.6</td>
              </tr>
              <tr>
                <td>Jacob Thorton</td>
                <td>Distance</td>
                <td>Breaststroke</td>
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
                <th>Name</th>
                <th>Specialty</th>
                <th>Stroke</th>
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
          <h3>Team Training Hours for this week</h3>
          <LineChart />
        </Row>
      </Container>
    </div>
  );
}
