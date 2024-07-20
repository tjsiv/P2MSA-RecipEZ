import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navbar = ({ user }) => {
  const navigate = useNavigate();

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
      <ul className="flex">
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
    </div>
  );
};

export default Navbar;
