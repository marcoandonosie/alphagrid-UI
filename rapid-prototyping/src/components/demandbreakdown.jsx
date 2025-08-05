import React from "react";
import {
  Card,
  CardContent,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label,
} from "recharts";

// Generate data with the trend line stopping at TODAY
const generateData = () => {
  const startDate = new Date(2023, 10); // Nov 2023
  const totalMonths = 20; // Nov 2023 - Jul 2025
  const data = [];
  const todayIndex = Math.floor((totalMonths * 30) / 2); // halfway point

  for (let i = 0; i < totalMonths * 30; i++) {
    const date = new Date(startDate.getFullYear(), startDate.getMonth(), i + 1);
    const baseline = 3.0 + 0.05 * (i / 30); // gradual trend
    const noise = Math.random() * 3 - 1.5; // moderate fluctuations

    // Original line full length
    const originalValue = baseline + noise;

    // Trend stops at halfway (TODAY)
    const trendValue = i <= todayIndex ? baseline + noise : null;

    data.push({
      date: date.toISOString().slice(0, 10),
      original: Math.max(0, originalValue),
      trend: trendValue,
    });
  }
  return { data, todayIndex };
};

const { data, todayIndex } = generateData();

const options = [
  "Long-term Trend",
  "Yearly",
  "Monthly",
  "Weekly",
  "Holidays",
  "Cumulative Demand",
];

export default function EnergyDemandChart() {
  const [selectedOptions, setSelectedOptions] = React.useState({});

  const handleChange = (event) => {
    setSelectedOptions({
      ...selectedOptions,
      [event.target.name]: event.target.checked,
    });
  };

  // Get today’s date label
  const todayDate = data[todayIndex].date;

  return (
    <Card
      sx={{
        borderRadius: "20px",
        border: "2px solid #a1a1ff",
        p: 2,
        bgcolor: "#fafafa",
      }}
    >
      <CardContent>
        {/* Headline and Subtitle */}
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Your baseline forecast aligns with your historical performance.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            our forecast is 94% accurate across all trials
          </Typography>
        </Box>

        {/* Checkboxes */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mb: 1,
            justifyContent: "center",
          }}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option}
              control={
                <Checkbox
                  checked={!!selectedOptions[option]}
                  onChange={handleChange}
                  name={option}
                />
              }
              label={option}
            />
          ))}
        </Box>

        {/* Legend */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
          <Typography
            variant="body2"
            sx={{ mr: 2, color: "gray", display: "inline-flex", alignItems: "center" }}
          >
            <span
              style={{
                display: "inline-block",
                width: 12,
                height: 2,
                backgroundColor: "#999999",
                marginRight: 4,
              }}
            />
            Original
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#6a0dad", display: "inline-flex", alignItems: "center" }}
          >
            <span
              style={{
                display: "inline-block",
                width: 12,
                height: 2,
                backgroundColor: "#6a0dad",
                marginRight: 4,
              }}
            />
            Trend
          </Typography>
        </Box>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(tick) => tick.slice(0, 7)}
              angle={-45}
              textAnchor="end"
            />
            <YAxis
              label={{
                value: "% Change in Energy Demand vs Baseline",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle" },
              }}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="original"
              stroke="#999999"
              dot={false}
              name="Original"
            />
            <Line
              type="monotone"
              dataKey="trend"
              stroke="#6a0dad"
              strokeWidth={2}
              dot={false}
              name="Trend"
              connectNulls={false}
            />
            {/* TODAY Vertical Line */}
            <ReferenceLine
              x={todayDate}
              stroke="red"
              strokeDasharray="3 3"
              label={
                <Label
                  value="Today"
                  position="top"
                  style={{ fill: "red", fontWeight: "bold" }}
                />
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
