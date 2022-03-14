import React from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2';

const LineChart = () => {
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
}

export default LineChart;