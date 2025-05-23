import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to PopX</h1>
      <p className="text-lg text-center mb-6">
        This is a platform where you can explore and connect with others easily.
      </p>
      <div className="flex flex-col md:flex-row md:space-x-4 w-full max-w-md">
        <button 
          className="mb-4 md:mb-0 p-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-200"
          onClick={() => navigate('/signup')}
        >
          Create Account
        </button>
        <button 
          className="p-3 bg-green-500 text-white rounded shadow hover:bg-green-600 transition duration-200"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
