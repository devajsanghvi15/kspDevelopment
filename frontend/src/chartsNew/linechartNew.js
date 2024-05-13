import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function LinechartNew() {
  const json_data = [
    { year: 2016, count: 37248 },
    { year: 2017, count: 37068 },
    { year: 2018, count: 37708 },
    { year: 2019, count: 38759 },
    { year: 2020, count: 32980 },
    { year: 2021, count: 33556 },
    { year: 2022, count: 38138 },
    { year: 2023, count: 39633 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={json_data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[32000, 40000]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line dataKey="count" fill="red" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LinechartNew;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "5px",
          border: "1px solid black",
        }}
      >
        <p>Year: {`${data.year}`}</p>
        <p>Count: {`${data.count}`}</p>
      </div>
    );
  }
};
