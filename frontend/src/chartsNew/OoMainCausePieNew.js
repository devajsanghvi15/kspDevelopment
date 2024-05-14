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
import BoxHeader from "../components/BoxHeader";

function OoMainCausePieNew() {
  const json_data = [
    { mainCause: "Human Error", count: 235674 },
    { mainCause: "Vehicle Defect", count: 7018 },
    { mainCause: "Others", count: 51300 },
    { mainCause: "Road Environment Defect", count: 1098 },
  ];

  var total = 0;

    json_data.forEach((element, index) => {
      total = total + element.count;
    });


  // const pieColors = ["#0b8f78", "#12efc8", "#71f5de", "#d0fcf4"];
  const pieColors = [ "#144266", "#1d6499", "#31a6ff", "#5ab8ff"];

  return (
    <>
      <BoxHeader
        title="Main Cause Of Accidents"
        subtitle="Shows the percentage of main causes of the accidents (2016-2023)"
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

export default OoMainCausePieNew;

const CustomTooltip = ({ active, payload, total }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const percentage = ((data.count / total) * 100).toFixed(3);

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
        <p>Main Cause: {`${data.mainCause}`}</p>
        <p>Number of accidents: {`${data.count}`}</p>
        <p>Percentage: {`${percentage}%`}</p>
      </div>
    );
  }
  return null;
};
