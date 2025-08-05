import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "BP Pulse", value: 22, sites: 5, energy: 61259 },
  { name: "Tesla", value: 30, sites: 6, energy: 84535 },
  { name: "EVgo", value: 25, sites: 4, energy: 70580 },
  { name: "Electrify America", value: 23, sites: 3, energy: 63476 },
];

const COLORS = ["#7e57c2", "#ff7043", "#29b6f6", "#66bb6a"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const tooltipData = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: "#fff",
          padding: "8px 12px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          fontSize: "0.875rem",
        }}
      >
        <p style={{ margin: 0, fontWeight: 600 }}>
          {tooltipData.name}: {tooltipData.value}%
        </p>
        <p style={{ margin: "4px 0 0 0" }}>📍 Sites in Area: {tooltipData.sites}</p>
        <p style={{ margin: 0 }}>
          ⚡ Total Energy: {tooltipData.energy.toLocaleString()} kWh
        </p>
      </div>
    );
  }
  return null;
};

export default function Leaderboard() {
  return (
    <Card sx={{ backgroundColor: "#fff", borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography
          variant="h6"
          align="center"
          sx={{ marginBottom: 1, fontWeight: 600 }}
        >
          Local Market Share
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}%`}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
