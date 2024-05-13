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
import BoxHeader from "../components/BoxHeader";

function AccOverYearsDisNew({ district }) {
  const oldName = district;
  district = district.replace(/[ .]/g, "");

  const json_data = DistrictData[`${district}Line`];
  const counts = json_data.map(data => data.count);

var minCount = Math.min(...counts);
if(minCount >= 20)
    minCount -= 20;
const maxCount = Math.max(...counts) + 10;

  return (
    <>
    <BoxHeader title={`Trends In Accidents in ${oldName}`} subtitle={`Shows the total number of accidents in ${oldName} each year (2016-2023)`} style={{display: 'flex', width: '100%'}} />
      <ResponsiveContainer width="100%" height="94%">
        <LineChart width={500} height={300} data={json_data} margin={{ top: 0, left: 6, right: 4, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#48494e" />
          <XAxis dataKey="year" tickLine={false} />
          <YAxis tickLine={false} axisLine={false} domain={[minCount, maxCount]} />
          <Legend />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="count" dot={true} stroke="#71f5de" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default AccOverYearsDisNew;

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: "black",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: "5px",
          border: "1px solid black",
          color: "white"
        }}
      >
        <p>Year : {`${data.year}`}</p>
        <p>Number of accidents : {`${data.count}`}</p>
      </div>
    );
  }
  return null;
};
