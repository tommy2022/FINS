import React, { useState, useEffect } from "react";
import { Container, Row, Table } from "react-bootstrap";
import LineChart from "./components/LineChart";
import { athletes } from "./Constants";

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
              {athletes.map((athlete) => (
                <tr>
                  <td>{athlete.name}</td>
                  <td>{athlete.speciality}</td>
                  <td>
                    {athlete.stroke.map((stroke) => (
                      <span>{stroke}, </span>
                    ))}
                  </td>
                  <td>{athlete.hours}</td>
                </tr>
              ))}
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
              {athletes.map((athlete) => (
                <tr>
                  <td>{athlete.name}</td>
                  <td>{athlete.speciality}</td>
                  <td>
                    {athlete.stroke.map((stroke) => (
                      <span>{stroke}, </span>
                    ))}
                  </td>
                  <td>{athlete.progression}</td>
                </tr>
              ))}
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
