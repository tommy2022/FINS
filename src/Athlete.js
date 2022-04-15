import React from "react";
import WorkoutCard from "./athelete-components/workout_card";
import AthleteChart from "./athelete-components/athlete_chart";
import Note from "./athelete-components/note";
import { Card } from "react-bootstrap";
import Nav from "./Nav";

// import { useParams } from "react-router-dom";

export default function Athlete() {
    // const { id = "undefined" } = useParams();
    return (
        <div
            style={{
                backgroundColor: "lightblue",
                padding: "2rem"
            }}
        >
            <Nav />
            <Card
                style={{
                    backgroundColor: "#F4F4F4"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around"
                    }}
                >
                    <h1>WORKOUT HISTORY</h1>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around"
                    }}
                >
                    <WorkoutCard
                        title={"Workout 1"}
                        subtitle={"01/10/2022 1pm"}
                        text={"I did freestyle stroke for 100m"}
                    />
                    <WorkoutCard
                        title={"Workout 2"}
                        subtitle={"01/08/2022 3pm"}
                        text={"I did butterfly stroke for 200m"}
                    />
                    <WorkoutCard
                        title={"Workout 3"}
                        subtitle={"01/06/2022 5pm"}
                        text={"I did breaststroke for 400m"}
                    />
                    <WorkoutCard
                        title={"Workout 5"}
                        subtitle={"01/02/2022 10am"}
                        text={"I did backstroke for 300m"}
                    />
                </div>
            </Card>
            <Card
                style={{
                    marginTop: "2rem",
                    backgroundColor: "#F4F4F4"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-around"
                    }}
                >
                    <h1>ATHLETE PROGRESSION</h1>
                    <AthleteChart />
                </div>
            </Card>
            <Card
                style={{
                    marginTop: "2rem",
                    backgroundColor: "#F4F4F4"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                        marginTop: "10px"
                    }}
                >
                    <h1>SWIMMER NOTES</h1>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around"
                    }}
                >
                    <Note
                        title={"Note 1"}
                        subtitle={"01/10/2022 1pm"}
                        text={"I'm in good shape i think"}
                    />
                    <Note
                        title={"Note 2"}
                        subtitle={"01/08/2022 3pm"}
                        text={"I got really tired"}
                    />
                    <Note
                        title={"Note 3"}
                        subtitle={"01/06/2022 5pm"}
                        text={"I need to improve this"}
                    />
                    <Note
                        title={"Note 5"}
                        subtitle={"01/02/2022 10am"}
                        text={"I'm trying this new technique"}
                    />
                </div>
            </Card>
        </div>
    );
}
