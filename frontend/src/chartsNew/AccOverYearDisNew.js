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
import * as DistrictData from "../districtData/AccidentLineData";

function AccOverYearsDisNew({ district }) {
  district = district.replace(/[ .]/g, "");

  const data = DistrictData[`${district}Line`];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line dataKey="count" fill="red" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AccOverYearsDisNew;

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
