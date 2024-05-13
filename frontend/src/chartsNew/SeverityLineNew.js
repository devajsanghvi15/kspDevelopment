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
import * as DistrictData from "../districtData/SeverityLineData";

function SeverityLineNew({ district }) {
  district = district.replace(/[ .]/g, "");
  const data = DistrictData[`${district}SevLine`];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="Damage Only" stroke="#8884d8" />
        <Line type="monotone" dataKey="Fatal" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Grievous Injury" stroke="#ff7300" />
        <Line type="monotone" dataKey="Others" stroke="#0088ff" />
        <Line type="monotone" dataKey="Simple Injury" stroke="#ff0080" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SeverityLineNew;

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Year: ${label}`}</p>
        {payload.map((item, index) => (
          <p key={index} className="desc" style={{ color: item.color }}>
            {`${item.name}: ${item.value}`}
          </p>
        ))}
      </div>
    );
  }

  return null;
};
