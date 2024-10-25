import React from "react";
import { Link } from "react-router-dom";

export default function VideoLibraryIndex() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          'url("https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }} // Replace this with your own image
    >
      <div className="w-full h-full  bg-opacity-60 flex justify-center items-center">
        <div className="text-center text-white px-6 py-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Video Library
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Watch your favorite movies anytime, anywhere.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="user-login">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 w-full sm:w-auto">
                User Login
              </button>
            </Link>
            <Link to="admin-login">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 w-full sm:w-auto">
                Admin Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
