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
                        label: 'Hours Awake',
                        data: [18, 16, 13, 16, 12, 17, 13]
                    }]
                }}
                options={{
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }

                }
                height={300}
                width={450}
            />
        </div>
    )
}

export default LineChart;