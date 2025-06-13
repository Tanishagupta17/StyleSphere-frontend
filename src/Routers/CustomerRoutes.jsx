import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/components/pages/Homepage/HomePage'
import Footer from '../customer/components/Footer/Footer'
import Cart from '../customer/components/cart/Cart'
import Product from '../customer/components/Product/Product/Product'
import Navigation from '../customer/components/Navigation/Navigation'
import SignIn from '../customer/components/AuthPage/SignIn'
import SignUp from '../customer/components/AuthPage/SignUp'
import ProductDetails from '../customer/components/Product/ProductDetails/ProductDetails'
import Checkout from '../customer/components/checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import SearchProduct from '../customer/components/Product/Product/SearchProduct'
import PaymentSuccess from '../customer/components/paymentSuccess/PaymentSuccess'
const CustomerRoutes = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
                <Route path="product/search" element={<SearchProduct />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/account/order" element={<Order />} />
                <Route path="/account/order/:orderId" element={<OrderDetails />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path="/payment-success/:orderId" element={<PaymentSuccess />}/>
            </Routes>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRoutes