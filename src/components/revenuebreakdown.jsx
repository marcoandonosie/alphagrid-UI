import React from 'react';
import { Card, CardContent, Typography, Divider, Box, Grid } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Tile = ({ title, items, totalLabel, totalValue, totalChange, changeColor, ChangeIcon }) => (
  <Card elevation={3} sx={{ borderRadius: 2 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <Divider sx={{ mb: 1 }} />
      {items.map((item, index) => (
        <Box key={index} display="flex" justifyContent="space-between" mb={0.5}>
          <Typography variant="body1">{item.label}</Typography>
          <Typography variant="body1">{item.value}</Typography>
        </Box>
      ))}
      <Divider sx={{ my: 1 }} />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1" fontWeight="bold">{totalLabel}</Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mr: 1 }}>
            {totalValue}
          </Typography>
          <ChangeIcon sx={{ color: changeColor, fontSize: '1.2rem', mr: 0.5 }} />
          <Typography variant="body2" sx={{ color: changeColor }}>
            {totalChange}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default function FinancialSummary() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Tile
            title="Revenue"
            items={[
              { label: 'Baseline', value: '$10,543' },
              { label: 'Revenue Lift from AutoPrice AI', value: '$2,804' },
            ]}
            totalLabel="Total Revenue"
            totalValue="$13,343"
            totalChange="18.1%"
            changeColor="green"
            ChangeIcon={ArrowUpwardIcon}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Tile
            title="Costs"
            items={[
              { label: 'Discounts & Local Price Interv.', value: '$______' },
              { label: 'Demand Charges', value: '$______' },
              { label: 'Energy Charges & Throughput Fees', value: '$______' },
            ]}
            totalLabel="Total Costs"
            totalValue="$3,231"
            totalChange="0.2%"
            changeColor="red"
            ChangeIcon={ArrowDownwardIcon}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Tile
            title="Profit Lift"
            items={[
              { label: 'Profit Lift', value: '$12,321' },
              { label: 'Notes', value: '21% increase ▲' },
            ]}
            totalLabel="Total Profit"
            totalValue="$12,321"
            totalChange="21%"
            changeColor="green"
            ChangeIcon={ArrowUpwardIcon}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
