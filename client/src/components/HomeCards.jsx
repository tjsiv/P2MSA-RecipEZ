import React from "react";
import { Link } from "react-router-dom";
import TestImage from "../assets/pexels-Test-food-image-699953.webp";
import SearchImage from "../assets/Ella Olsson Pexels food Image.jpg";
import CategoriesImage from "../assets/Dana Tentis Pexels Md food Image.jpg";

const HomeCards = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] bg-black p-4">
      <div className="flex flex-wrap justify-around w-full md:w-3/5 max-w-3xl bg-black">
        <Link to="/search" className="relative block w-full sm:w-80 md:w-96 lg:w-80 mx-5 mb-5">
          <div className="relative rounded-lg overflow-hidden bg-black shadow-lg hover:translate-y-[-10px] transition-transform duration-300 p-4">
            <h2 className="text-lg font-bold text-white mb-2 tracking-wider">Search Recipes</h2>
            <img src={SearchImage} alt="Image for Search Recipes" className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-gray-600 opacity-10"></div>
            <div className="relative z-10 text-white"></div>
          </div>
        </Link>
        <Link to="/categories" className="relative block w-full sm:w-80 md:w-96 lg:w-80 mx-5 mb-5">
          <div className="relative rounded-lg overflow-hidden bg-black shadow-lg hover:translate-y-[-10px] transition-transform duration-300 p-4">
            <h2 className="text-lg font-bold text-white mb-2 tracking-wider">Categories</h2>
            <img src={CategoriesImage} alt="Image for Categories" className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-gray-600 opacity-10"></div>
            <div className="relative z-10 text-white"></div>
          </div>
        </Link>
        <Link to="/favorites" className="relative block w-full sm:w-80 md:w-96 lg:w-80 mx-5 mb-5">
          <div className="relative rounded-lg overflow-hidden bg-black shadow-lg hover:translate-y-[-10px] transition-transform duration-300 p-4">
            <h2 className="text-lg font-bold text-white mb-2 tracking-wider">Favorites</h2>
            <img src={TestImage} alt="Image for Favorites" className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-gray-600 opacity-10"></div>
            <div className="relative z-10 text-white"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeCards;
