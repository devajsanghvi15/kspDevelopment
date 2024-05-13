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

function SevNew() {
  const json_data = [
    {
      year: 2016,
      "Damage Only": 3682,
      Fatal: 5903,
      "Grievous Injury": 14947,
      Others: 1434,
      "Simple Injury": 11282,
    },
    {
      year: 2017,
      "Damage Only": 3560,
      Fatal: 6903,
      "Grievous Injury": 14326,
      Others: 1315,
      "Simple Injury": 10964,
    },
    {
      year: 2018,
      "Damage Only": 3187,
      Fatal: 8479,
      "Grievous Injury": 15424,
      Others: 1171,
      "Simple Injury": 9447,
    },
    {
      year: 2019,
      "Damage Only": 3046,
      Fatal: 9172,
      "Grievous Injury": 17252,
      Others: 785,
      "Simple Injury": 8504,
    },
    {
      year: 2020,
      "Damage Only": 2599,
      Fatal: 8382,
      "Grievous Injury": 14455,
      Others: 652,
      "Simple Injury": 6892,
    },
    {
      year: 2021,
      "Damage Only": 2435,
      Fatal: 8735,
      "Grievous Injury": 14550,
      Others: 746,
      "Simple Injury": 7090,
    },
    {
      year: 2022,
      "Damage Only": 2659,
      Fatal: 9841,
      "Grievous Injury": 17362,
      Others: 943,
      "Simple Injury": 7333,
    },
    {
      year: 2023,
      "Damage Only": 2738,
      Fatal: 9950,
      "Grievous Injury": 18215,
      Others: 1040,
      "Simple Injury": 7690,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={json_data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="Damage Only" stroke="#8884d8" />
        <Line type="monotone" dataKey="Fatal" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Grievous Injury" stroke="#ff7300" />{" "}
        {/* Orange */}
        <Line type="monotone" dataKey="Others" stroke="#0088ff" /> {/* Blue */}
        <Line type="monotone" dataKey="Simple Injury" stroke="#ff0080" />{" "}
        {/* Pink */}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SevNew;

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
