import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { createOrder } from "../../../State/customer/Order/Action";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const DeliveryAddressForm = (handleNext) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const [selectedAddress, setSelectedAdress] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };

    dispatch(createOrder({ address, jwt, navigate }));
    // after perfoming all the opration
    // handleNext();
  };

  const handleCreateOrder = (item) => {
    console.log(item);
    
    dispatch(createOrder({ address: item, jwt, navigate }));
    console.log("Hello");
    // handleNext();
  };

  return (
    <div className="w-full p-4 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/3 bg-white shadow-md rounded-xl overflow-y-scroll border border-gray-100 ">
        {auth.user?.addresses.map((item) => (
          <div
            onClick={() => setSelectedAdress(item)}
            className="p-5 py-7 border-b cursor-pointer"
          >
            {" "}
            <AddressCard address={item} />
            {selectedAddress?.id === item.id && (
              <Button
                sx={{ mt: 2 }}
                size="large"
                variant="contained"
                color="primary"
                onClick={() => handleCreateOrder(item)}
              >
                Deliverd Here
              </Button>
            )}
          </div>
        ))}
      </div>

      {/* Right Form */}
      <div className="w-full md:w-2/3 bg-white shadow-md rounded-xl p-6 border border-gray-100">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </div>

          <div className="mb-4">
            <TextField
              required
              id="address"
              name="address"
              label="Address"
              fullWidth
              autoComplete="shipping address"
              multiline
              rows={4}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
            />
            <TextField
              required
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
            />
            <TextField
              required
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              autoComplete="tel"
            />
          </div>

          <Button
            sx={{ padding: ".7rem 1.5rem", bgcolor: '#8e44ad', ':hover': { bgcolor: '#732d91' } }}
            size="large"
            type="submit"
            variant="contained"
            color="primary"
          >
            Deliverd Here
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryAddressForm;
