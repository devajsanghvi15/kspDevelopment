import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

function TypesRoadNew() {
  const json_data = [
    { roadType: "NH", count: 91494 },
    { roadType: "State Highway", count: 62091 },
    { roadType: "Others", count: 58839 },
    { roadType: "City or Town Road", count: 20073 },
    { roadType: "Village Road", count: 16638 },
    { roadType: "Two way", count: 12815 },
    { roadType: "One way", count: 6157 },
    { roadType: "Major District Road", count: 5594 },
    { roadType: "Residential Street", count: 5583 },
    { roadType: "Minor District Road", count: 5482 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={300} data={json_data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="roadType"
          angle={-45}
          textAnchor="end"
          interval={0}
          height={120}
        >
          <Label angle={-45} position="insideBottom" />
        </XAxis>
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="count" fill="#ADD8E6" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default TypesRoadNew;

const CustomTooltip = ({ active, payload }) => {
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
        <p>{`${data.roadType}: ${data.count}`}</p>
      </div>
    );
  }
  return null;
};
