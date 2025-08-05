import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Tooltip,
  IconButton,
} from "@mui/material";
import {
  ArrowDropUp,
  ArrowDropDown,
  Remove as DashIcon,
  InfoOutlined as InfoIcon,
} from "@mui/icons-material";

const metrics = [
  {
    label: "Energy Costs",
    value: "$5,152",
    delta: -3.3,
    percent: "3.3%",
    isPositive: true, // green downward arrow
  },
  {
    label: "Demand Charges",
    value: "$6,301",
    delta: +1.2,
    percent: "1.2%",
    isPositive: false, // red upward arrow
  },
];

const softMetrics = [
  {
    label: "Price Satisfaction",
    value: "89%",
    delta: +0.2,
    percent: "0.2%",
    isPositive: true, // green upward arrow
  },
  {
    label: "Competitor Price Index",
    value: "62.50%",
    delta: -0.3,
    percent: "0.3%",
    isPositive: true, // green downward arrow
  },
];

const MetricRow = ({ label, value, delta, percent, isPositive }) => {
  const isSpecial = ["Demand Charges", "Energy Costs"].includes(label);
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1.2}
      borderBottom="1px solid #e0e0e0"
    >
      <Typography
        variant="body2"
        sx={{
          color: "#424242",
          fontWeight: isSpecial ? 700 : 500,
        }}
      >
        {label}: {value}
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          color: isPositive ? "#2e7d32" : "#c62828",
          fontSize: "0.875rem",
          fontWeight: 500,
        }}
      >
        {delta > 0 ? "+" : ""}
        {delta.toFixed(1)}% ({percent})
        {isPositive ? (
          <ArrowDropDown fontSize="small" />
        ) : (
          <ArrowDropUp fontSize="small" />
        )}
      </Box>
    </Box>
  );
};

const CommissionRow = () => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    py={1.2}
    borderBottom="1px solid #e0e0e0"
  >
    <Box display="flex" alignItems="center">
      <Typography
        variant="body2"
        sx={{ color: "#424242", fontWeight: 700 }}
      >
        AlphaGrid Commission: $1,000
      </Typography>
      <Tooltip
        title="This represents AlphaGrid’s 3% commission fee, automatically deducted from your total revenue lift."
        arrow
      >
        <IconButton size="small" sx={{ ml: 0.5, color: "#757575" }}>
          <InfoIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
    <Box
      display="flex"
      alignItems="center"
      sx={{
        color: "#757575",
        fontSize: "0.875rem",
        fontWeight: 500,
      }}
    >
      (–)
    </Box>
  </Box>
);

const SummaryRow = () => (
  <Box display="flex" flexDirection="column" py={1.5}>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography
        variant="h6"
        sx={{ color: "#212121", fontWeight: 600 }}
      >
        Total Costs: $12,453
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          color: "#757575", // gray color for total change
          fontSize: "1rem",
          fontWeight: 600,
        }}
      >
        ±0.2%
        <DashIcon fontSize="medium" />
      </Box>
    </Box>
    <Typography
      variant="body2"
      sx={{
        color: "#757575",
        mt: 0.5,
        ml: "2px", // slight indent for alignment
      }}
    >
      No significant increase in operating costs post AutoPrice AI.
    </Typography>
  </Box>
);

export default function MetricsCard() {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          color: "#111",
          fontWeight: 700,
          mb: 1.5,
          textAlign: "left",
        }}
      >
        Costs and Quality Breakdown
      </Typography>
      <Card sx={{ borderRadius: 2, boxShadow: 3, maxWidth: 600, mx: "auto" }}>
        <CardContent>
          {metrics.map((metric, index) => (
            <MetricRow key={index} {...metric} />
          ))}
          <CommissionRow />
          {softMetrics.map((metric, index) => (
            <MetricRow key={index} {...metric} />
          ))}
          <SummaryRow />
        </CardContent>
      </Card>
    </>
  );
}
