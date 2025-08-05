import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { Box, Typography } from '@mui/material';

// Randomly generated peer site data
// Create 5 top-right quadrant peers manually
const topRightPeers = Array.from({ length: 5 }, () => ({
  util: Math.floor(Math.random() * 20) + 70, // Util 70–90%
  price: +(0.46 + Math.random() * 0.09).toFixed(2), // Price 0.46–0.55
  highlight: true,
}));

// Create 20 generic peers (will be grey)
const otherPeers = Array.from({ length: 20 }, () => ({
  util: Math.floor(Math.random() * 60) + 20, // Util between 20–80%
  price: +(0.25 + Math.random() * 0.3).toFixed(2), // Price between $0.25–$0.55
}));

const yourSite = { util: 47, price: 0.38, yourSite: true };

const peerData = [...topRightPeers, ...otherPeers];
const data = [...peerData, yourSite];

const CustomShape = ({ cx, cy, payload }) => {
  if (cx == null || cy == null) return null;

  const { yourSite, highlight } = payload;

  let fill = '#ccc'; // Default grey
  let stroke = 'none';

  if (yourSite) {
    fill = '#ff6b81'; // Red for your site
    stroke = '#ff2e63';
  } else if (highlight) {
    fill = '#bca4ff'; // Purple for top-right peers
  }

  return (
    <>
      <circle
        cx={cx}
        cy={cy}
        r={yourSite ? 8 : 5}
        fill={fill}
        stroke={stroke}
        strokeWidth={yourSite ? 2 : 0}
      />
      {yourSite && (
        <text
          x={cx}
          y={cy - 12}
          textAnchor="middle"
          fill="#ff2e63"
          fontSize="12px"
        >
          Your Site
        </text>
      )}
    </>
  );
};

export default function SandboxChart() {
  return (
    <Box sx={{ width: '100%', mt: 5 }}>
      <Typography variant="h6" gutterBottom>
        Utilization vs. Price — Your Site vs Peers
      </Typography>
      <ScatterChart width={600} height={350}>
        <CartesianGrid />
        <XAxis
          type="number"
          dataKey="util"
          name="Utilization"
          unit="%"
          domain={[0, 100]}
          tickFormatter={(tick) => `${tick}%`}
          label={{
            value: 'Utilization (%)',
            position: 'insideBottom',
            offset: -5,
          }}
        />
        <YAxis
          type="number"
          dataKey="price"
          name="Avg Utility Cost"
          unit="$"
          domain={[0.2, 0.6]}
          tickFormatter={(tick) => `$${tick.toFixed(2)}`}
          label={{
            value: 'Avg Utility Cost ($/kWh)',
            angle: -90,
            position: 'insideLeft',
            offset: 10,
          }}
          
        />
        <Tooltip
          formatter={(value, name) =>
            name === 'price'
              ? [`$${value.toFixed(2)}`, 'Avg Utility Cost']
              : [`${value}%`, 'Utilization']
          }
          cursor={{ strokeDasharray: '3 3' }}
        />
        <Scatter name="Sites" data={data} shape={CustomShape} />
      </ScatterChart>
    </Box>
  );
}
