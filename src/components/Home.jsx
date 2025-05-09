import React from 'react';

function Home() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Our App</h1>
      <p className="text-gray-600 mb-6">This is the home page that is visible to everyone, whether logged in or not.</p>
      <div className="space-y-4">
        <p className="text-gray-700">To see how protected routes work:</p>
        <ul className="list-disc list-inside text-left max-w-md mx-auto">
          <li className="text-gray-700">Try clicking on Dashboard in the navigation</li>
          <li className="text-gray-700">You'll be redirected to the login page</li>
          <li className="text-gray-700">After logging in, you'll be able to access the Dashboard</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;