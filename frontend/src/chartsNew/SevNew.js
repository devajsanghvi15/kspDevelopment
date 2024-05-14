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
    <>
      <BoxHeader
        title="Trends In Severity Of Accidents"
        subtitle="Shows the total number of accidents in each year (2016-2023) according to their severity"
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

export default SevNew;

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
