import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  
  const [fullName, setFullName] = useState('John Doe');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('Example Corp');
  const [isAgency, setIsAgency] = useState('no');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up with:', { fullName, phoneNumber, email, password, companyName, isAgency });
    navigate('/message', { state: { fullName, email } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Create your PopX Account</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="p-2 border border-gray-300 rounded mb-4 w-full"
          />
          <div className="mb-4">
            <label className="block mb-2">Are you an agency?</label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                value="yes"
                checked={isAgency === 'yes'}
                onChange={(e) => setIsAgency(e.target.value)}
                className="mr-2"
              />
              Yes
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="no"
                checked={isAgency === 'no'}
                onChange={(e) => setIsAgency(e.target.value)}
                className="mr-2"
              />
              No
            </label>
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
            Sign Up
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

export default SignUp;
