import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { API_END_POINT } from '../utils/constant';
import axios from "axios";
import { setUser } from '../redux/userSlice';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setToggle } from '../redux/movieSlice';

const Header = () => { 
    const user = useSelector((store) => store.app.user);
    const toggle = useSelector((store) => store.movie.toggle);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${API_END_POINT}/logout`, {
                withCredentials: true,
            });
            if (res.data.success) {
                toast.success(res.data.message);
                dispatch(setUser(null));
                navigate("/");
            }
        } catch (error) {
            console.error("Logout Error:", error);
            toast.error("Failed to logout. Please try again.");
        }
    };

    const toggleHandler = () => {
        dispatch(setToggle());
    };

    return (
        <div className='fixed top-0 z-50 flex w-full items-center justify-between px-8 py-4 bg-gradient-to-b from-black via-black/80 to-transparent transition-all duration-300'>
            <img 
                className='w-44 cursor-pointer' 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" 
                alt="netflix-logo" 
            />
            {user && (
                <div className='flex items-center gap-6'>
                    <div className='flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity'>
                        <IoIosArrowDropdown size="28px" color='white' />
                        <h1 className='text-base font-medium text-white'>{user.fullName}</h1>
                    </div>
                    <div className='flex items-center gap-3'>
                        <button 
                            onClick={toggleHandler} 
                            className='bg-transparent text-white px-4 py-2 border border-transparent hover:border-white/40 rounded transition-all duration-300 text-sm font-medium'
                        >
                            {toggle ? "Home" : "Search"}
                        </button>
                        <button 
                            onClick={logoutHandler} 
                            className='bg-netflix-red text-white px-6 py-2 rounded hover:bg-netflix-red-hover transition-all duration-300 text-sm font-semibold'
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
