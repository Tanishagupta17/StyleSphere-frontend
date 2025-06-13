import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../../State/auth/Action'

const SignIn = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(login(form));
    navigate("/")
  }

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-pink-100 to-purple-200">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 bg-white rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-4xl font-extrabold text-center text-pink-600">Welcome Back</h2>
                <p className="text-center text-gray-500">Log in to your wardrobe 👗👟</p>

                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 text-gray-700 font-medium">Email</label>
                    <input id="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password" className="mb-1 text-gray-700 font-medium">Password</label>
                    <input id="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400" />
                </div>

                <button type="submit" className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl transition duration-300">
                    Log In
                </button>

                <p className="text-center text-sm text-gray-600 mt-2">
                    Don’t have an account? <span onClick={() => navigate('/signup')} className="text-pink-500 font-semibold hover:underline cursor-pointer">Sign up</span>
                </p>
            </form>
        </div>
    )
}

export default SignIn
