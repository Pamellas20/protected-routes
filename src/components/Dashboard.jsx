import React from 'react';
import { useAuth } from '../components/AuthContext';

function Dashboard() {
  const { user, logout } = useAuth();
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">Protected Page</span>
      </div>
      <div className="bg-blue-50 p-4 rounded-md mb-6">
        <p className="text-blue-700">
          You are logged in as <span className="font-semibold">{user?.name || "User"}</span>!
        </p>
      </div>
      <p className="text-gray-600 mb-4">
        This page is protected and only visible to authenticated users.
      </p>
      <div className="mt-6">
        <button 
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-md transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;