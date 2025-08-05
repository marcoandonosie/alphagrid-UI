import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';

const MarketContextTile = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#7A5CFA',
        py: 3,
        borderRadius: 2,
        p: 3,
        boxShadow: 3,
        width: 360,
        minHeight: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Block 1: Header */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="700" color="white">
          📊 Local Market Overview
        </Typography>
        <Typography variant="body2" color="white" sx={{ opacity: 0.85 }}>
          Within 10 miles of your site, there are;
        </Typography>
      </Box>

      {/* Block 2: Stats */}
      <Box sx={{ mb: 2 }}>
  <Grid container justifyContent="space-between">
    <Grid item textAlign="center">
      <Typography
        variant="h5"
        fontWeight="bold"
        color="white"
        sx={{ fontSize: 32 }}
      >
        26
      </Typography>
      <Typography variant="caption" color="white">
        EV Charger Sites
      </Typography>
    </Grid>
    <Grid item textAlign="center">
      <Typography
        variant="h5"
        fontWeight="bold"
        color="white"
        sx={{ fontSize: 32 }}
      >
        7
      </Typography>
      <Typography variant="caption" color="white">
        Charging Networks
      </Typography>
    </Grid>
    <Grid item textAlign="center">
      <Typography
        variant="h5"
        fontWeight="bold"
        color="white"
        sx={{ fontSize: 32 }}
      >
        42%
      </Typography>
      <Typography variant="caption" color="white">
        Avg. Site Utilization
      </Typography>
    </Grid>
  </Grid>
</Box>


      {/* Divider */}
      <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.3)', my: 1 }} />

      {/* Block 3: Key Insights */}
      <Box sx={{ pl: 1, pb: 4 }}>
        <Typography variant="subtitle2" color="white" fontWeight={600} gutterBottom>
          Key Pricing Insights
        </Typography>
        <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'white' }}>
          <li>
            <Typography variant="body2">
            Median price across competitors: <b>$0.48/kWh</b>
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
            Peak price in area: <b>$0.61/kWh</b>
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Surge pricing at <b>38%</b> of nearby sites
            </Typography>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default MarketContextTile;
