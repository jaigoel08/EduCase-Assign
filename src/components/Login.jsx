import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/message'); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Sign in to your PopX Account</h1>
      <p className="mb-6 text-center">
        Welcome back! Please enter your email and password to access your account and continue exploring our platform.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded mb-4 w-full"
            
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded mb-4 w-full"
            
          />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
            Login
          </button>
        </form>
      </div>
      <button 
        className="mt-4 p-2 bg-gray-300 text-black rounded" 
        onClick={() => navigate('/')}
      >
        Go to Home
      </button>
    </div>
  );
};

export default Login;
