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
import BoxHeader from "../components/BoxHeader";

function SeverityLineNew({ district }) {
  const oldName = district;
  district = district.replace(/[ .]/g, "");
  const json_data = DistrictData[`${district}SevLine`];

  return (
    <>
      <BoxHeader
        title={`Trends In Severity Of Accidents in ${oldName}`}
        subtitle={`Shows the total number of accidents in ${oldName} each year (2016-2023) according to their severity`}
        style={{ display: "flex", width: "100%" }}
      />
      <ResponsiveContainer width="100%" height="94%">
        <LineChart
          width={500}
          height={300}
          data={json_data}
          margin={{ top: 0, left: 2, right: 4, bottom: 0 }}
        >
          <CartesianGrid vertical={false} stroke="#6b6d74" />
          <XAxis dataKey="year" tickLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Legend />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="Damage Only"
            dot={true}
            stroke="#f2b455"
          />
          <Line type="monotone" dataKey="Fatal" dot={true} stroke="#076050" />
          <Line
            type="monotone"
            dataKey="Grievous Injury"
            dot={true}
            stroke="#8884d8"
          />
          <Line type="monotone" dataKey="Others" dot={true} stroke="#31a6ff" />
          <Line
            type="monotone"
            dataKey="Simple Injury"
            dot={true}
            stroke="#12efc8"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default SeverityLineNew;

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip" style={{
        backgroundColor: "black",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        color: "white",
        fontSize: "12px"
      }}>
        <p className="label">{`Year: ${label}`}</p>
        {payload.map((item, index) => (
          <p key={index} className="desc" >
            {`${item.name}: ${item.value}`}
          </p>
        ))}
      </div>
    );
  }

  return null;
};