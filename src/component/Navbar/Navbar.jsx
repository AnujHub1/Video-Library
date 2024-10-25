import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-black text-2xl font-bold">Video Library</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-white" />
            ) : (
              <FaBars className="text-white" />
            )}
          </button>
        </div>
        <ul
          className={`md:flex space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <Link
              to="/"
              className="text-gray-600 font-semibold hover:text-black"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/library"
              className="text-gray-600 font-semibold hover:text-black"
            >
              Library
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="text-gray-600 font-semibold hover:text-black"
            >
              Favorites
            </Link>
          </li>
          <li>
            <Link
              to="/user-register"
              className="text-gray-600 font-semibold hover:text-black"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
