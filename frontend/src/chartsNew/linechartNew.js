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
import BoxHeader from "../components/BoxHeader";

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
    <>
    <BoxHeader title="Trends In Accidents" subtitle="Shows the total number of accidents in each year (2016-2023)" style={{display: 'flex', width: '100%'}} />
      <ResponsiveContainer width="100%" height="94%">
        <LineChart width={500} height={300} data={json_data} margin={{ top: 0, left: 6, right: 4, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#6b6d74" />
          <XAxis dataKey="year" tickLine={false} />
          <YAxis tickLine={false} axisLine={false} domain={[32000, 40000]} />
          <Legend />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="count" dot={true} stroke="#2785cc" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default LinechartNew;

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
        <p>Year : {`${data.year}`}</p>
        <p>Number of accidents : {`${data.count}`}</p>
      </div>
    );
  }
  return null;
};
