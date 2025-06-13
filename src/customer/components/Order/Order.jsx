import React from 'react';
import { Box, Grid, Typography, FormControlLabel, Checkbox } from '@mui/material';
import OrderCard from './OrderCard';

const orderStatus = [
    { label: "On The Way", value: "onTheWay" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
];

const Order = () => {
    return (
        <Box sx={{ px: 10, pt: 10}}>
            <Grid container spacing={3}>
                {/* Filter Sidebar */}
                <Grid item xs={3} sx={{width:"25%" }}>
                    <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2, border: '1px solid #e0e0e0', position: 'sticky', top: 82}}>
                        <Typography variant="h6" fontWeight="bold">Filters</Typography>
                        <Box mt={4}>
                            <Typography variant="subtitle1" fontWeight="bold">ORDER STATUS</Typography>
                            <Box mt={2} sx={{display:"flex",flexDirection:"column"}}>
                                {orderStatus.map((option) => (
                                    <FormControlLabel
                                        key={option.value}
                                        control={<Checkbox value={option.value} color="primary" />}
                                        label={option.label}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                {/* Order Cards Section */}
                <Grid item xs={9} sx={{width : "70%"}}>
                    <Box display="flex" flexDirection="column" gap={2} paddingBottom={2}>
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                        <OrderCard />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Order;
