import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import * as DistrictData from "../districtData/MainCausePieData";
import BoxHeader from "../components/BoxHeader";

function MainCausePieNew({ district }) {
  const oldName = district;
  district = district.replace(/[ .]/g, "");

  const json_data = DistrictData[`${district}Pie`];

  var total = 0;

    json_data.forEach((element, index) => {
      total = total + element.count;
    });

  const pieColors = ["#0b8f78", "#12efc8", "#71f5de", "#d0fcf4"];

  return (
    <>
      <BoxHeader
        title={`Main Cause Of Accidents in ${oldName}`}
        subtitle={`Shows the percentage of main causes of the accidents in ${oldName} (2016-2023)`}
        style={{ display: "flex", width: "100%" }}
      />
      <ResponsiveContainer width="100%" height="94%">
        <PieChart
          width={500}
          height={300}
          margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <Pie
            data={json_data}
            innerRadius={110}
            outerRadius={180}
            dataKey="count"
            fill="#8884d8"
            paddingAngle={5}
            nameKey="mainCause"
          >
            {json_data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip content={<CustomTooltip total={total} />} />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

export default MainCausePieNew;

const CustomTooltip = ({ active, payload, total }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const percentage = ((data.count / total) * 100).toFixed(3);

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
          color: "white",
        }}
      >
        <p>Main Cause: {`${data.mainCause}`}</p>
        <p>Number of accidents: {`${data.count}`}</p>
        <p>Percentage: {`${percentage}%`}</p>
      </div>
    );
  }
  return null;
};
