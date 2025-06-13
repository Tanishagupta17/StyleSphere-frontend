import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertTitle, Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { updatePayment } from "../../../State/customer/Payment/Action";
import { getOrderById } from "../../../State/customer/Order/Action";
import OrderTraker from "../Order/OrderTracker";
import AddressCard from "../AddressCard/AddressCard";
import AddressCardDummy from "../AddressCard/AddressCardDummy";
import { deepPurple } from "@mui/material/colors";

const PaymentSuccess = () => {
  // razorpay_payment_link_reference_id
  // razorpay_payment_id
  const [paymentId, setPaymentId] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const { orderId } = useParams();



  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    // console.log("orderId",orderId)
    const urlParams = new URLSearchParams(window.location.search);
    setPaymentId(urlParams.get("razorpay_payment_id"));
    setReferenceId(urlParams.get("razorpay_payment_link_reference_id"));
    setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    if (paymentId && paymentStatus === "paid") {
      const data = { orderId, paymentId, jwt };
      dispatch(updatePayment(data));
      dispatch(getOrderById(orderId));
    }
  }, [orderId, paymentId]);
  console.log(order);

  console.log("orderrrrrrrrrrrr IDDDDDDD",orderId);
  

  return (
    <div className="pt-20 px-2 lg:px-36 pb-12">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulation Your Order Get Placed
        </Alert>
      </div>

      <OrderTraker activeStep={1} />

      <Grid container direction="column" spacing={2} paddingBottom={2} paddingTop={5}>
        {order.order?.orderItems.map((item, idx) => (
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
                style={{ width: '5rem', height: '7rem', objectFit: 'cover', objectPosition: 'top' }}
                src={item?.product.imageUrl}
                alt="product"
              />
              <Box sx={{ ml: 2 }}>
                <Typography variant="body1">{item.product.title}</Typography>
                <Typography variant="caption" color="text.secondary">Color: {item?.product.color} | Size: {item.size}</Typography>
                <Typography variant="body2">Seller: {item.product.brand}</Typography>
                <Typography variant="subtitle1">₹{item.price}</Typography>
              </Box>
            </Box>

            <Box
              sx={{ display: 'flex', alignItems: 'center', color: 'black', cursor: 'pointer' }}
            >
              <AddressCard address={order.order?.shippingAddress} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
