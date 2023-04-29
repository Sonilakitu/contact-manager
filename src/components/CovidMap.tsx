import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from 'react-query';
import CountryData from '../models/CountryData';

const CovidMap = () => {
    const [activeCountry, setActiveCountry] = useState<CountryData | null>(null);

    const { isLoading, error, data } = useQuery<CountryData[]>(
        'countries',
        () =>
            fetch('https://disease.sh/v3/covid-19/countries')
                .then((res) => res.json())
                .then((data) =>
                    data.map((country: any) => {
                        return {
                            country: country.country,
                            cases: country.cases,
                            active: country.active,
                            recovered: country.recovered,
                            deaths: country.deaths,
                            lat: country.countryInfo.lat,
                            long: country.countryInfo.long,
                            flag: country.countryInfo.flag
                        };
                    })
                )
    );

    if (isLoading) return <p>Loading...</p>;
    if (error) {
        const err = error as { message?: string };
        return err.message ? <p>Error: {err.message}</p> : <p>Error: Unknown error</p>;
    }




    return (
        <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {data?.map((country: any) => (
                <Marker
                    key={country.country}
                    position={[country.lat, country.long]}
                    eventHandlers={{
                        click: () => setActiveCountry(country),
                    }}
                />
            ))}
            {activeCountry && (
                <Popup position={[activeCountry.lat, activeCountry.long]}>
                    <div className="bg-white-100 p-4 rounded-md">
                        <h2 className="text-lg font-semibold">{activeCountry.country}</h2>
                        <p className="text-blue-500 font-medium">Cases: {activeCountry.cases}</p>
                        <p className="text-green-500 font-medium">Active: {activeCountry.active}</p>
                        <p className="text-yellow-500 font-medium">Recovered: {activeCountry.recovered}</p>
                        <p className="text-red-500 font-medium">Deaths: {activeCountry.deaths}</p>
                    </div>
                </Popup>
            )}
        </MapContainer>
    );
};

export default CovidMap;
