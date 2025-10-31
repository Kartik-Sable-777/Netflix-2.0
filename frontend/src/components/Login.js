import React, { useState } from 'react';
import Header from './Header';
import axios from "axios";
import { API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from '../redux/userSlice';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(store => store.app.isLoading);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      if (isLogin) {
        // 🔹 Login user
        const user = { email, password };
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        });

        if (res?.data?.success) {
          toast.success(res.data.message || "Login successful");
          dispatch(setUser(res.data.user));
          navigate("/browse");
        } else {
          toast.error("Invalid credentials or unexpected error.");
        }

      } else {
        // 🔹 Register user
        const user = { fullName, email, password };
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        });

        if (res?.data?.success) {
          toast.success(res.data.message || "Registration successful");
          setIsLogin(true);
        } else {
          toast.error("Unable to register. Try again.");
        }
      }
    } catch (error) {
      console.error("Auth Error:", error);
      toast.error(error?.response?.data?.message || "Server error occurred.");
    } finally {
      dispatch(setLoading(false));
      setFullName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className='relative min-h-screen'>
      <Header />
      <div className='absolute inset-0 overflow-hidden'>
        <img
          className='w-full h-full object-cover brightness-[0.3]'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='banner'
        />
      </div>
      <form
        onSubmit={getInputData}
        className='flex flex-col w-full max-w-md px-16 py-16 mt-32 mb-24 left-0 right-0 mx-auto items-center absolute rounded-md bg-black/75 backdrop-blur-sm'
      >
        <h1 className='text-4xl text-white mb-8 font-bold self-start'>
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        <div className='flex flex-col w-full'>
          {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type='text'
              placeholder='Full Name'
              className='outline-none px-5 py-4 my-3 rounded bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-white focus:bg-gray-800 transition-colors'
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Email'
            className='outline-none px-5 py-4 my-3 rounded bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-white focus:bg-gray-800 transition-colors'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
            className='outline-none px-5 py-4 my-3 rounded bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-white focus:bg-gray-800 transition-colors'
          />
          <button
            type='submit'
            className='bg-netflix-red mt-8 mb-4 py-3 text-white rounded font-semibold text-lg hover:bg-netflix-red-hover transition-colors'
          >
            {isLoading ? "Loading..." : isLogin ? "Sign In" : "Sign Up"}
          </button>
          <div className='flex items-center justify-between text-gray-400 text-sm'>
            <p className='text-white'>
              {isLogin ? "New to Netflix?" : "Already have an account?"}
              <span
                onClick={loginHandler}
                className='ml-1 text-white font-medium cursor-pointer hover:underline'
              >
                {isLogin ? "Sign up now" : "Sign in"}
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
