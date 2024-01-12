import React from "react";
import {
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Area,
} from "recharts";

const Statistics = () => {
    const statistics = [
        {
            year: 2015,
            candidatesHired: 120,
        },
        {
            year: 2016,
            candidatesHired: 150,
        },
        {
            year: 2017,
            candidatesHired: 200,
        },
        {
            year: 2018,
            candidatesHired: 180,
        },
        {
            year: 2019,
            candidatesHired: 250,
        },
        {
            year: 2020,
            candidatesHired: 300,
        },
        {
            year: 2021,
            candidatesHired: 280,
        },
        {
            year: 2022,
            candidatesHired: 320,
        },
        {
            year: 2023,
            candidatesHired: 350,
        },
        {
            year: 2024,
            candidatesHired: 380,
        },
    ];

    return (
        <div className="flex justify-center my-10">
            <div>
                <div className="w-full h-[250px]">
                    <ResponsiveContainer>
                        <AreaChart
                            data={statistics}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient
                                    id="colorPv"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="20%"
                                        stopColor="#82ca9d"
                                        stopOpacity={0.7}
                                    />
                                    <stop
                                        offset="80%"
                                        stopColor="#82ca9d"
                                        stopOpacity={0.2}
                                    />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="year" />
                            <YAxis dataKey="candidatesHired" />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="candidatesHired"
                                stroke="#82ca9d"
                                fillOpacity={1}
                                fill="url(#colorPv)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <h1 className="text-4xl text-center lg:text-5xl my-5">
                    Actively Hired Statistics
                </h1>
            </div>
        </div>
    );
};

export default Statistics;
