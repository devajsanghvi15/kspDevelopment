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
import BoxHeader from "../components/BoxHeader";

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
    <>
    <BoxHeader title="Accident Distribution By Road Type" subtitle="Shows the total number of accidents in each type of road (2016-2023)" style={{display: 'flex', width: '100%'}} />
    <ResponsiveContainer width="100%" height="96%">
      <BarChart
        width={500}
        height={300}
        data={json_data}
        margin={{ top: 0, left: 10, right: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2785cc" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#2785cc" stopOpacity={0.4} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke={"#6b6d74"} />
        <XAxis
          dataKey="roadType"
          angle={-50}
          textAnchor="end"
          // interval={0}
          height={140}
          axisLine={false}
          tickLine={false}
        >
          <Label angle={-45} position="insideBottom" />
        </XAxis>
        <YAxis axisLine={false} tickLine={false}/>
        <Tooltip content={<CustomTooltip />}/>
        <Legend />
        <Bar dataKey="count" fill="url(#colorBar)" />
      </BarChart>
    </ResponsiveContainer>
    </>
  );
}

export default TypesRoadNew;

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: "black",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid black",
          color: "white",
          fontSize: "12px"
        }}
      >
        <p>District : {`${data.roadType}`}</p>
        <p>Number of accidents : {`${data.count}`}</p>
      </div>
    );
  }
  return null;
};

