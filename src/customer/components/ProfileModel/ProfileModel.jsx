import React, { useState, useRef, useEffect } from 'react';
import { Close } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { logout } from '../../../State/auth/Action';
import { useNavigate } from 'react-router-dom';

const ProfileModel = ({ user }) => {
    const [open, setOpen] = useState(false);
    const panelRef = useRef();
    const dispatch = useDispatch();
    const token = localStorage.getItem("jwt");
    const navigate = useNavigate();
    const username = user?.name
    const toggleMenu = () => {
        setOpen(!open);
    };
    
    const handleLogout = ()=>{
        dispatch(logout(token));
        navigate("/");
    }
    const handleClickOutside = (event) => {
        if (panelRef.current && !panelRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const firstLetter = username ? username.charAt(0).toUpperCase() : '?';

    return (
        <div className="flex justify-end items-center p-4 text-white">
            <div onClick={toggleMenu} className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-lg cursor-pointer font-bold">
                {firstLetter}
            </div>

            {/* Slide-in panel */}
            <div
                className={`fixed top-0 right-0 h-screen w-80 bg-pink-100 text-black shadow-lg z-100 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'
                    }`}
                ref={panelRef}
            >
                {/* Close Button */}
                <div className="flex justify-between items-center px-4 py-[18px] border-b border-gray-300">
                    <h2 className="text-xl font-semibold">Account</h2>
                    <button onClick={() => setOpen(false)} className="cursor-pointer text-gray-600 hover:text-black">
                        <Close />
                    </button>
                </div>

                {/* Profile Info */}
                <div className="flex flex-col items-center py-6">
                    <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-2 cursor-pointer">
                        {firstLetter}
                    </div>
                    <h3 className="text-lg font-semibold">{username || 'Guest User'}</h3>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col border-b border-t border-gray-300 overflow-hidden">
                    <button className="text-left px-8 py-3 hover:bg-pink-200 border-b border-gray-300 cursor-pointer">Profile</button>
                    <button className="text-left px-8 py-3 hover:bg-pink-200 border-b border-gray-300 cursor-pointer">Order History</button>
                    <button className="text-left px-8 py-3 hover:bg-pink-200 border-b border-gray-300 cursor-pointer">Addresses</button>
                    <button onClick={handleLogout} className="text-left px-8 py-3 hover:bg-pink-200 text-red-600 cursor-pointer">Logout</button>
                </div>

            </div>
        </div>
    );
};

export default ProfileModel;
