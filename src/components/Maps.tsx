import React from 'react';
import { useQuery } from 'react-query';
import LineGraph from './LineGraph';
import CovidMap from './CovidMap';

interface HistoricalData {
    cases: { [date: string]: number };
    deaths: { [date: string]: number };
    recovered: { [date: string]: number };
}

const Maps: React.FC = () => {
    const { isLoading, error, data } = useQuery<HistoricalData>(
        'historicalData',
        () =>
            fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30')
                .then((res) => res.json())
    );

    if (isLoading) return <p>Loading...</p>;
    if (error) {
        const err = error as { message?: string };
        return err.message ? <p>Error: {err.message}</p> : <p>Error: Unknown error</p>;
    }

    const historicalData = data ? data.cases : {};

    const chartData = Object.keys(historicalData).map((date: string) => ({
        date,
        cases: historicalData[date],
    }));

    return (
        <div className="h-screen flex flex-col">
            <div className="h-150 flex justify-center items-center">
                <div className="text-center flex flex-col">
                    <h2 className="mx-auto text-3xl font-bold">Covid Case Fluctuation</h2>
                    <LineGraph data={chartData} />
                </div>
            </div>
            <div className="flex-1">
                <CovidMap />
            </div>
        </div>
    );
};

export default Maps;
