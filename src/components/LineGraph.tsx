import React from 'react';
import { Chart, ScatterController, LineController, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { Line, Scatter } from 'react-chartjs-2';

Chart.register(
    ScatterController,
    LineController,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
);


interface Props {
    data: {
        date: string;
        cases: number;
    }[];
}

const LineGraph: React.FC<Props> = ({ data }) => {
    const labels = data.map((item) => item.date);
    const values = data.map((item) => item.cases);

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Cases',
                data: values,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div style={{ height: 200 }}>
            <Line data={chartData} />
        </div>
    );
};

export default LineGraph;
