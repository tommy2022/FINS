import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

// import { useParams } from "react-router-dom";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Butterfly stroke 100m",
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Freestyle 100m",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

export default function AthleteChart() {
  return (
    <>
      <h1 style={{ fontSize: 18, color: "gray" }}>Best Practice Time</h1>
      <div className="App">
        <Line width={1000} data={data} title={"Best time progression"} />
      </div>
    </>
  );
}
