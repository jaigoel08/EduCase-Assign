import React from 'react';
import { useLocation } from 'react-router-dom';

const Message = () => {
  const location = useLocation();
  const { fullName, email } = location.state || { fullName: 'John Doe', email: 'johndoe@example.com' };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h4 className="text-3xl font-bold mb-4">Account Settings</h4>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h5 className="text-xl font-semibold mb-2">{fullName}</h5>
        <p className="text-gray-600 mb-4">{email}</p>
        <p className="text-gray-500">
          This is your account settings page. You can update your information and manage your account preferences here.
        </p>
      </div>
    </div>
  );
};

export default Message;
