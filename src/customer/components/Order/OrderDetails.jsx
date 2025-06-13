import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTraker from './OrderTracker';
import { Box, Grid, Typography } from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material'; // Use MUI's Star
import { deepPurple } from '@mui/material/colors';

const OrderDetails = () => {
  return (
    <Box sx={{ px: { xs: 2, lg: 10 }, pt: 12, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ p: 2, border: '1px solid #e0e0e0', boxShadow: 2 }}>
        <Typography variant="h6" fontWeight="bold" pb={1}>Delivery Address</Typography>
        <AddressCard />
      </Box>

      <Box sx={{ p: 3, pt: 6, border: '1px solid #e0e0e0', boxShadow: 2 }}>
        <OrderTraker activeStep={3} />
      </Box>

      <Grid container direction="column" spacing={2} paddingBottom={2}>
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <Grid
            item
            key={idx}
            sx={{
              p: 2,
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              boxShadow: 3,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {/* Left Product Info */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                style={{ width: '5rem', height: '5rem', objectFit: 'cover', objectPosition: 'top' }}
                src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                alt="product"
              />
              <Box sx={{ ml: 2 }}>
                <Typography variant="body1">Title</Typography>
                <Typography variant="caption" color="text.secondary">Color: Pink | Size: M</Typography>
                <Typography variant="body2">Seller: Brand</Typography>
                <Typography variant="subtitle1">₹2000</Typography>
              </Box>
            </Box>

            {/* Rate & Review */}
            <Box
              sx={{ display: 'flex', alignItems: 'center', color: deepPurple[500], cursor: 'pointer' }}
            >
              <StarIcon sx={{ fontSize: '2rem', mr: 1 }} />
              <Typography variant="body2">Rate & Review Product</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OrderDetails;
