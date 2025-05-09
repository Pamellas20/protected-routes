import React from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/dashboard";
  
  const handleLogin = () => {
    login();
       navigate(from, { replace: true });
  };
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Login Page</h1>
      <p className="text-gray-600 mb-6">Click the button below to simulate logging in.</p>
      <button 
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition duration-300"
      >
        Login
      </button>
    </div>
  );
}

export default Login;