import React, { useState, useEffect } from "react";
import { Container, Row, Table, Form } from "react-bootstrap";
import LineChart from "./components/LineChart";
import { athletes, IM, FLY, BK, BR, FR, SPR, DIST } from "./Constants";
import { Link } from "react-router-dom";
import Nav from "./Nav";

// import { useParams } from "react-router-dom";

export default function Coach() {
    // const { id = "undefined" } = useParams();
    const [filterStroke, setFilterStroke] = useState("");
    const [filterDist, setFilterDist] = useState("");
    const [active, setActive] = useState([]);
    const [progressive, setProgressive] = useState([]);

    const updateActive = (arr) => {
        arr.sort((a, b) => b.hours - a.hours);
        setActive(arr);
    };

    const updateProgressive = (arr) => {
        progressive.sort((a, b) => b.progression - a.progression);
        setProgressive(arr);
    };

    const updateTables = (arr) => {
        updateActive(arr);
        updateProgressive(arr);
    };

    useEffect(() => {
        updateTables(athletes);
    }, []);

    useEffect(() => {
        let temp = athletes;
        if (filterStroke !== "") {
            temp = temp.filter((athlete) => athlete.stroke.includes(filterStroke));
        }
        if (filterDist !== "") {
            temp = temp.filter((athlete) => athlete.speciality == filterDist);
        }
        updateTables(temp);
    }, [filterStroke, filterDist]);

    console.log(filterStroke);

    return (
        <div
            style={{
                padding: "2rem"
            }}
        >
            <Nav />
            <Container>
                <Row>
                    <h1>Team Name</h1>
                    <h2>Coach Name</h2>
                    <h3> Filter:</h3>
                    <div>
                        Stroke:{" "}
                        <Form.Select onChange={(e) => setFilterStroke(e.target.value)}>
                            <option value="">No Filter</option>
                            <option value={IM}>{IM}</option>
                            <option value={FLY}>{FLY}</option>
                            <option value={BK}>{BK}</option>
                            <option value={BR}>{BR}</option>
                            <option value={FR}>{FR}</option>
                        </Form.Select>
                    </div>
                    <div>
                        Speciality:{" "}
                        <Form.Select onChange={(e) => setFilterDist(e.target.value)}>
                            <option value="">No Filter</option>
                            <option value={SPR}>{SPR}</option>
                            <option value={DIST}>{DIST}</option>
                        </Form.Select>
                    </div>
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
                            {active.map((athlete) => (
                                <tr>
                                    <td>
                                        <Link to={`/athlete`}>{athlete.name}</Link>
                                    </td>
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
                            {progressive.map((athlete) => (
                                <tr>
                                    <td>
                                        <Link to={`/athlete`}>{athlete.name}</Link>
                                    </td>
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
