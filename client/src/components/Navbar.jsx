import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const [nav, setNav] = useState(true);

  const toggleNav = () => {
    setNav(!nav);
    if (nav) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  const handleUserIconClick = () => {
    if (!user) {
      navigate("/login"); // Redirect to login page if not logged in
    } else {
      navigate("/user"); // Redirect to user profile if logged in
    }
  };

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center py-4 bg-black">
      <h1 className="uppercase font-bold pl-4 text-4xl text-pink-200">
        <Link to="/">
          Recip<span className="text-blue-200">EZ</span>
        </Link>
      </h1>
      <ul className="hidden md:flex">
        <li className="text-pink-200 pr-4 text-2xl">
          <Link to="/search">Search</Link>
        </li>
        <li className="text-pink-200 pr-4 text-2xl">
          <Link to="/favorites">Favorites</Link>
        </li>
        <li className="text-pink-200 pr-4 text-2xl">
          <Link to="/categories">Categories</Link>
        </li>
        {!user && (
          <li className="text-pink-200 pr-4 text-2xl">
            <Link to="/login">Login</Link>
          </li>
        )}
        <li
          className="text-pink-200 pr-4 text-2xl cursor-pointer"
          onClick={handleUserIconClick}
        >
          <FaUser />
        </li>
      </ul>
      {/* Mobile Nav Toggle */}
      <div onClick={toggleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineClose size={25} className="mr-4" />
        ) : (
          <AiOutlineMenu size={25} className="mr-4" />
        )}
      </div>
      {/* Mobile Nav */}
      <div
        className={`fixed top-0 ease-in-out duration-200 ${
          !nav
            ? "left-0 w-[60%] min-h-screen h-[125vh] border-gray-900 bg-black"
            : "left-[-100%] min-h-screen h-[125vh]"
        }`}
      >
        <h1 className="w-full text-3xl font-bold text-pink-200 m-4 uppercase">
          Recip<span className="text-blue-200">EZ</span>
        </h1>
        <ul className="pt-4 uppercase mx-4">
          <li className="p-4 border-b border-gray-600">Search</li>
          <li className="p-4 border-b border-gray-600">Favorites</li>
          <li className="p-4 border-b border-gray-600">Categories</li>
          <li className="p-4 border-b border-gray-600">Login</li>
        </ul>
      </div>
      {/* Hidden Nav Toggle */}
      <div
        onClick={toggleNav}
        className={`fixed top-0 right-0 h-full w-[40%] bg-transparent ${
          nav ? "right-full" : "right-0 bg-pink-500"
        }`}
      ></div>
    </div>
  );
};

export default Navbar;
