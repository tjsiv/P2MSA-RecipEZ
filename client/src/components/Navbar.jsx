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
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
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
    <div className="sticky top-0 z-50 md:flex md:justify-evenly bg-gray-800">
      {/* Web Nav Bar */}
      <div className="flex justify-between items-center py-3 md:py-0 w-[98%] xl:w-[80%] 2xl:w-[50%]">
        <h1 className="uppercase font-bold pl-4 text-4xl text-pink-200">
          <Link to="/">
            Recip<span className="text-blue-200">EZ</span>
          </Link>
        </h1>
        <ul className="hidden md:flex">
          <li className="text-pink-200 pr-2 text-xl font-bold uppercase">
            <Link
              to="/search"
              className="hover:bg-gray-900 p-1 px-3 rounded-full transition duration-150 "
            >
              Search
            </Link>
          </li>
          <li className="text-pink-200 pr-2 text-xl font-bold uppercase ">
            <Link
              to="/favorites"
              className="hover:bg-gray-900 p-1 px-3 rounded-full transition duration-150"
            >
              Favorites
            </Link>
          </li>
          <li className="text-pink-200 pr-2 text-xl font-bold uppercase">
          </li>
          {!user && (
            <li className="text-pink-200 pr-2 text-xl font-bold uppercase">
              <Link
                to="/login"
                className="hover:bg-gray-900 p-1 px-3 rounded-full transition duration-150"
              >
                Login
              </Link>
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
            <li className="p-4 border-b border-gray-600">
              <Link to="/search" onClick={toggleNav}>Search</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="/favorites" onClick={toggleNav}>Favorites</Link>
            </li>
            {!user && (
              <li className="text-pink-200 p-4 border-b border-gray-600 text-xl font-bold uppercase">
                <Link to="/login" onClick={toggleNav}>
                  Login
                </Link>
              </li>
            )}
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
    </div>
  );
};

export default Navbar;
