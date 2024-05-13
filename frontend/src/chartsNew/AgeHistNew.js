import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label
} from "recharts";
import BoxHeader from "../components/BoxHeader";

function AgeHistNew() {
  const json_data = {
    1: 2939,
    2: 2543,
    3: 3129,
    4: 3591,
    5: 3524,
    6: 3643,
    7: 3207,
    8: 3356,
    9: 2879,
    10: 3621,
    11: 3257,
    12: 4587,
    13: 5316,
    14: 8037,
    15: 10569,
    16: 16148,
    17: 22680,
    18: 20808,
    19: 32838,
    20: 33536,
    21: 31590,
    22: 37001,
    23: 35486,
    24: 36246,
    25: 48681,
    26: 37647,
    27: 31750,
    28: 48158,
    29: 27574,
    30: 61236,
    31: 21111,
    32: 43524,
    33: 23841,
    34: 25897,
    35: 64006,
    36: 29550,
    37: 20019,
    38: 38816,
    39: 17345,
    40: 54783,
    41: 12385,
    42: 29617,
    43: 16742,
    44: 12902,
    45: 56167,
    46: 15913,
    47: 13540,
    48: 24904,
    49: 11014,
    50: 38586,
    51: 8165,
    52: 17146,
    53: 10002,
    54: 10556,
    55: 31733,
    56: 11112,
    57: 7537,
    58: 14669,
    59: 8229,
    60: 26120,
    61: 4701,
    62: 8908,
    63: 5660,
    64: 4385,
    65: 20319,
    66: 3446,
    67: 3636,
    68: 5098,
    69: 2149,
    70: 11158,
    71: 1632,
    72: 3078,
    73: 1860,
    74: 1646,
    75: 5175,
    76: 1324,
    77: 781,
    78: 1286,
    79: 447,
    80: 2712,
    81: 343,
    82: 607,
    83: 354,
    84: 339,
    85: 1094,
    86: 253,
    87: 149,
    88: 143,
    89: 79,
    90: 270,
    91: 45,
    92: 55,
    93: 43,
    94: 34,
    95: 98,
    96: 19,
    97: 16,
    98: 12,
    99: 3,
    100: 6,
  };


return (
  <>
  <BoxHeader title="Accident Distribution By Age" subtitle="Shows the total number of accidents for each age (2016-2023)" style={{display: 'flex', width: '100%'}} />
  <ResponsiveContainer width="100%" height="85%">
    <BarChart
      width={500}
      height={300}
      data={Object.entries(json_data).map(([age, count]) => ({ age, count }))}
      margin={{ top: 0, left: 4, right: 0, bottom: 0 }}
      // barCategoryGap={0}
      // barGap={0}
    >
      <defs>
        <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#71f5de" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#71f5de" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid vertical={false} stroke={"#48494e"} />
      <XAxis
        dataKey="age"
        // angle={-50}
        textAnchor="end"
        interval={9}
        axisLine={false}
        tickLine={false}
      >
        <Label angle={-45} position="insideBottom" />
      </XAxis>
      <YAxis axisLine={false} tickLine={false} domain={[0, 65000]}/>
      <Tooltip content={<CustomTooltip />}/>
      <Legend />
      <Bar dataKey="count" fill="url(#colorBar)" />
    </BarChart>
  </ResponsiveContainer>
  </>
);

}

export default AgeHistNew;

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
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
        <p>Age : {payload[0].payload["age"]}</p>
        <p>Number of accidents : {payload[0].value}</p>
      </div>
    );
  }
  return null;
};
