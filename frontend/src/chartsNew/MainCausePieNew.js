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

function MainCausePieNew({ district }) {
  district = district.replace(/[ .]/g, "");

  const json_data = DistrictData[`${district}Pie`];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FFFFFF"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(3)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={500} height={300}>
        <Pie
          data={json_data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          // outerRadius={80}
          fill="#8884d8"
          dataKey="count"
          nameKey="mainCause"
        >
          {json_data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default MainCausePieNew;

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
        <p>{`${data.mainCause}: ${data.count}`}</p>
      </div>
    );
  }
  return null;
};
