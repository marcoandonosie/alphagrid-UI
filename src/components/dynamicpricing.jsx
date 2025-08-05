import { Box, Typography } from "@mui/material";

const GradientBar = () => {
  const currentPercentile = 3; // 3 out of 100 sites
  const markerLeft = `${currentPercentile}%`;

  return (
    <Box sx={{ width: "100%", maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="subtitle1" mb={1} fontWeight={600}>
        Sites in your ZIP using Dynamic Pricing
      </Typography>
      <Box
        sx={{
          position: "relative",
          height: 20,
          borderRadius: 10,
          background: "linear-gradient(to right, #bca4ff, #3b82f6, #888)",
        }}
      >
        {/* Marker */}
        <Box
          sx={{
            position: "absolute",
            left: markerLeft,
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 18,
            height: 18,
            borderRadius: "50%",
            backgroundColor: "#6a0dad",
            border: "2px solid white",
            boxShadow: "0 0 0 2px #6a0dad",
          }}
        />
      </Box>

      {/* Labels */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 1,
          px: 0.5,
          fontSize: 12,
          color: "#666",
        }}
      >
        <Typography variant="caption">Early</Typography>
        <Typography variant="caption">Growing</Typography>
        <Typography variant="caption">Saturated</Typography>
      </Box>

      {/* Copywriting */}
      <Typography
        variant="body2"
        mt={2}
        align="center"
        fontWeight={600}
        color="success.main"
      >
        +27.6% profit uplift with dynamic pricing
      </Typography>
    </Box>
  );
};

export default GradientBar;
