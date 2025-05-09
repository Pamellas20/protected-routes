import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

function Navbar() {
  const { isAuthenticated } = useAuth();
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-800">Protected App</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
            {!isAuthenticated ? (
              <Link to="/login" className="text-blue-500 hover:text-blue-600">Login</Link>
            ) : (
              <span className="text-green-500">Logged In</span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;