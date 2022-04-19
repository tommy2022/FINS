import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

// import { useParams } from "react-router-dom";

const test_set = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  options: {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "probability",
          },
        },
      ],
    },
  },
  datasets: [
    {
      label: "10 x 400 IM (Yards)",
      data: [33, 23, 60, 41, 44, 20],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "15 x 200 Freestyle (Yards)",
      data: [33, 25, 35, 51, 23, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

const sprint_set = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "25 Yard Free ",
      data: [10, 53, 85, 41, 44, 65],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "50 Yard Free",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

const goals = {
  labels: [
    "50 Yard Free",
    "100 Yard Free",
    "50 Yard Back",
    "100 Yard Back",
    "50  Yard Fly",
    "100 Yard Fly",
  ],
  datasets: [
    {
      label: "Goal Time",
      data: [13, 21, 20, 30, 21, 25],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Best Practice Time",
      data: [15, 35, 35, 30, 30, 20],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

export default function AthleteChart() {
  return (
    <>
      <h1 style={{ fontSize: 18, color: "gray" }}>Test Set Metrics</h1>
      <br></br>
      <div className="App">
        <Line width={1000} data={test_set} title={"Best time progression"} />
      </div>
      <br></br>
      <h1 style={{ fontSize: 18, color: "gray" }}>Sprint Set Metrics</h1>
      <div className="App">
        <Line width={1000} data={sprint_set} title={"Best time progression"} />
      </div>
      <br></br>

      <h1 style={{ fontSize: 18, color: "gray" }}>Goal Time Analysis</h1>
      <div className="App">
        <Line width={1000} data={goals} title={"Best time progression"} />
      </div>
    </>
  );
}
