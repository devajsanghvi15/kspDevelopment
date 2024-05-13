import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import BoxHeader from '../components/BoxHeader';

const VicSexNew = () => {
  const json_data = [
    { Sex: 'MALE', count: 995095 },
    { Sex: 'FEMALE', count: 469951 }
  ];

  var total = 0;

    json_data.forEach((element, index) => {
      total = total + element.count;
    });


  const pieColors = ["#0b8f78", "#12efc8"];


  return (
    <>
      <BoxHeader
        title="Victim Sex Distribution"
        subtitle="Shows the percentage of sex of accident victims (2016-2023)"
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
            nameKey="Sex"
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

export default VicSexNew;

const CustomTooltip = ({ active, payload, total }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const percentage = ((data.count / total) * 100).toFixed(2);

    return (
      <div
        style={{
          backgroundColor: "black",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid black",
          color: "white",
        }}
      >
        <p>Sex: {`${data.Sex}`}</p>
        <p>Number of victims: {`${data.count}`}</p>
        <p>Percentage: {`${percentage}%`}</p>
      </div>
    );
  }
  return null;
};