"use client";
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
  Label,
} from "recharts";

function OoCountPlotNew() {
  const json_data = [
    { districtName: "Bagalkot", count: 6247 },
    { districtName: "Ballari", count: 4134 },
    { districtName: "Belagavi City", count: 4486 },
    { districtName: "Belagavi Dist", count: 14905 },
    { districtName: "Bengaluru City", count: 33878 },
    { districtName: "Bengaluru Dist", count: 15082 },
    { districtName: "Bidar", count: 8132 },
    { districtName: "Chamarajanagar", count: 4383 },
    { districtName: "Chickballapura", count: 4954 },
    { districtName: "Chikkamagaluru", count: 6919 },
    { districtName: "Chitradurga", count: 11619 },
    { districtName: "Dakshina Kannada", count: 6562 },
    { districtName: "Davanagere", count: 7375 },
    { districtName: "Dharwad", count: 3350 },
    { districtName: "Gadag", count: 2642 },
    { districtName: "Hassan", count: 15181 },
    { districtName: "Haveri", count: 5367 },
    { districtName: "Hubballi Dharwad City", count: 3488 },
    { districtName: "K.G.F", count: 1119 },
    { districtName: "Kalaburagi", count: 5295 },
    { districtName: "Kalaburagi City", count: 3507 },
    { districtName: "Karnataka Railways", count: 37 },
    { districtName: "Kodagu", count: 3646 },
    { districtName: "Kolar", count: 4645 },
    { districtName: "Koppal", count: 4398 },
    { districtName: "Mandya", count: 14720 },
    { districtName: "Mangaluru City", count: 7711 },
    { districtName: "Mysuru City", count: 6152 },
    { districtName: "Mysuru Dist", count: 10465 },
    { districtName: "Raichur", count: 4730 },
    { districtName: "Ramanagara", count: 10521 },
    { districtName: "Shivamogga", count: 11490 },
    { districtName: "Tumakuru", count: 16267 },
    { districtName: "Udupi", count: 8960 },
    { districtName: "Uttara Kannada", count: 8504 },
    { districtName: "Vijayanagara", count: 4163 },
    { districtName: "Vijayapur", count: 7127 },
    { districtName: "Yadgir", count: 2929 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={300} data={json_data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="districtName"
          angle={-45}
          textAnchor="end"
          interval={0}
          height={120}
        >
          <Label angle={-45} position="insideBottom" />
        </XAxis>
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="count" fill="red" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default OoCountPlotNew;

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
        <p>{`${data.districtName}: ${data.count}`}</p>
      </div>
    );
  }
  return null;
};
