import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const test_set = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "10 x 400 IM (Yards)",
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "15 x 200 Freestyle (Yards)",
      data: [33, 25, 35, 51, 54, 76],
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
      data: [33, 53, 65, 75, 80, 90],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "50 Yard Free",
      data: [31, 40, 65, 70, 85, 100],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

const goals = {
  labels: [
    "50 Yard",
    "100 Yard",
    "150 Yard",
    "200 Yard",
    "250 Yard",
    "300 Yard",
  ],
  datasets: [
    {
      label: "Current team total distance",
      data: [33, 53, 65, 70, 85, 100],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Last month team total distance",
      data: [10, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

/* const LineChart = () => {
    return (
        <div>
            <Line
                data={{
                    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Total training Hours',
                        data: [10, 13, 19, 28, 40, 42, 45]
                    }]
                }}
                // options={{
                //     scales: {
                //         y: {
                //             beginAtZero: true
                //         }
                //     }
                // }}
                height={300}
                width={450}
            />
        </div>
    )
} */

const LineChart = () => {
  return (
    <>
      <h1 style={{ fontSize: 18, color: "gray" }}>Team total distance</h1>
      <div className="App">
        <Line width={1000} data={goals} title={"Best time progression"} />
      </div>
      <h1 style={{ fontSize: 18, color: "gray" }}>Team stats for this week</h1>
      <br></br>
      <div className="App">
        <Line width={1000} data={test_set} title={"Best time progression"} />
      </div>
      <br></br>
      <h1 style={{ fontSize: 18, color: "gray" }}>Team training hours</h1>
      <div className="App">
        <Line width={1000} data={sprint_set} title={"Best time progression"} />
      </div>
      <br></br>
    </>
  );
};
export default LineChart;
