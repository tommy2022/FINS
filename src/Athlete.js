import React from "react";
import WorkoutCard from "./athelete-components/workout_card";

// import { useParams } from "react-router-dom";

export default function Athlete() {
  // const { id = "undefined" } = useParams();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <h2>WORKOUT HISTORY</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
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
    </>
  );
}
