import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getUser, register } from '../../../State/auth/Action'
import { useEffect } from 'react'
import { store } from '../../../State/store'

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '',email: '', mobile: '', password: '' })
  const navigate = useNavigate()

  const dispatch = useDispatch();
  // const jwt = localStorage.getItem("jwt")

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData);
    dispatch(register(formData))

    navigate("/signin");
  }

    return (
        <div className="pt-15 h-screen flex justify-center items-center bg-gradient-to-r from-pink-100 to-purple-200">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 bg-white rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-4xl font-extrabold text-center text-pink-600">Create Account</h2>
                <p className="text-center text-gray-500">Join the fashion community 🌟</p>

                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1 text-gray-700 font-medium">Full Name</label>
                    <input id="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full Name" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="mobile" className="mb-1 text-gray-700 font-medium">Phone Number</label>
                    <input id="mobile" value={formData.mobile} onChange={handleChange} type="text" placeholder="Mobile No" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 text-gray-700 font-medium">Email</label>
                    <input id="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="mb-1 text-gray-700 font-medium">Password</label>
                    <input id="password" value={formData.password} onChange={handleChange} type="password" placeholder="Password" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400" />
                </div>

                <button type="submit" className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl transition duration-300">
                    Sign Up
                </button>

                <p className="text-center text-sm text-gray-600 mt-2">
                    Already have an account? <span onClick={() => navigate('/signin')} className="text-pink-500 font-semibold hover:underline cursor-pointer">Login</span>
                </p>
            </form>
        </div>
    )
}

export default SignUp
