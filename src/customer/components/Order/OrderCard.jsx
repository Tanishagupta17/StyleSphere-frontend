import { Box, Grid, Typography } from '@mui/material';
import AdjustIcon from "@mui/icons-material/Adjust";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {

  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate(`/account/order/${2}`)}>
      <Box sx={{ p: 3, boxShadow: 3, border: '1px solid #e0e0e0', borderRadius: 2, '&:hover': { boxShadow: 6 } }}>
        <Grid container spacing={2} justifyContent="space-between">
          {/* Left Section */}
          <Grid item xs={6}>
            <Box display="flex" sx={{ cursor: 'pointer' }}>
              <img
                style={{ width: '5rem', height: '5rem', objectFit: 'cover', objectPosition: 'top' }}
                src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                alt="Product"
              />
              <Box ml={2}>
                <Typography variant="subtitle1" gutterBottom>Title</Typography>
                <Typography variant="caption" color="text.secondary">Size: M</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Price Section */}
          <Grid item xs={2}>
            <Typography variant="subtitle1">₹1200</Typography>
          </Grid>

          {/* Delivery Info Section */}
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <AdjustIcon sx={{ color: "green", width: 15, height: 15, mr: 1 }} />
              <Typography variant="body2" fontWeight="bold">Expected Delivery On Mar 03</Typography>
            </Box>
            <Typography variant="caption" color="text.secondary">
              Your Item Has Been Delivered
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default OrderCard;
