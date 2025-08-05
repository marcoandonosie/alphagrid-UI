import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function WeekdayWeekendToggle() {
  const [selected, setSelected] = useState("WEEKDAY");

  const handleChange = (event, newSelection) => {
    if (newSelection !== null) {
      setSelected(newSelection);
    }
  };

  return (
    <ToggleButtonGroup
      value={selected}
      exclusive
      onChange={handleChange}
      sx={{
        borderRadius: "8px",
        border: "1px solid #ccc",
        ".Mui-selected": {
          backgroundColor: "#f5f5f5",
          color: "#000",
          fontWeight: 700,
        },
        ".MuiToggleButton-root": {
          textTransform: "none",
          padding: "6px 16px",
          fontWeight: 500,
          fontSize: "0.875rem",
          color: "#555",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        },
      }}
    >
      <ToggleButton value="WEEKDAY">WEEKDAY</ToggleButton>
      <ToggleButton value="WEEKEND">WEEKEND</ToggleButton>
    </ToggleButtonGroup>
  );
}
