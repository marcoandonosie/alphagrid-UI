import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  Box,
  InputAdornment,
  Tooltip,
  IconButton,
  Link
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function AlphaGridLanding() {
  const [location, setLocation] = useState('');

  const handleSubmit = () => {
    // Handle validation and redirection here
    console.log('Location:', location);
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* NAVBAR */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight={700}>
            AlphaGrid
          </Typography>
          <Box>
            <Button color="inherit" sx={{ textTransform: 'none' }}>About</Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>How It Works</Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>Contact Us</Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>Login</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MAIN CONTENT */}
      <Container maxWidth="sm" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ p: 5, borderRadius: 3, textAlign: 'center' }}>
          
          {/* HEADLINE */}
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Your competitors are outpacing you. Are you leaving revenue on the table?
          </Typography>

          {/* SUBHEADLINE */}
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Benchmark your pricing and charger usage against local competitors instantly.
            See how your site compares to Tesla, EA, and others on pricing, utilization, and traffic.
          </Typography>

          {/* FORM */}
          <Box mt={4} display="flex" flexDirection="column" gap={2}>
            {/* LOCATION ONLY */}
            <Box display="flex" alignItems="center">
              <TextField
                fullWidth
                variant="outlined"
                label="Site Coordinates or Address"
                placeholder="e.g. 33.7490° N, 84.3880° W or 123 Main St, Atlanta"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon color="action" />
                    </InputAdornment>
                  )
                }}
              />
              <Tooltip
                title="This allows us to benchmark your site against others within driving distance—typically within the local EV roaming radius."
                arrow
              >
                <IconButton sx={{ ml: 1 }}>
                  <InfoOutlinedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>

            {/* SUBMIT */}
            <Button
              variant="contained"
              fullWidth
              onClick={handleSubmit}
              sx={{
                mt: 2,
                background: 'linear-gradient(to right, #a084f3, #8c6de3)',
                '&:hover': {
                  background: 'linear-gradient(to right, #8c6de3, #745ad4)'
                },
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                py: 1.25
              }}
            >
              Analyze my site →
            </Button>
          </Box>

          {/* TRUST FOOTER */}
          <Typography
            variant="body2"
            color="text.secondary"
            mt={4}
            fontStyle="italic"
          >
            ⚡ powered by real-time pricing and usage data from leading U.S. EV charging networks
          </Typography>
        </Paper>
      </Container>

      {/* GLOBAL FOOTER */}
      <Box
        component="footer"
        sx={{
          textAlign: 'center',
          py: 2,
          mt: 'auto',
          fontSize: 14,
          color: 'gray',
        }}
      >
        <Typography variant="body2">
          Need help?{' '}
          <Link href="mailto:support@alphagrid.ai" underline="hover">
            support@alphagrid.ai
          </Link>
        </Typography>
        <Typography variant="body2" mt={1}>
          © {new Date().getFullYear()} AlphaGrid. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
