import React from "react";
import "../index.css";
import TestImage from "../assets/pexels-Test-food-image-699953.webp";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <div className="HomeCard-container">
      <div className="card-container">
        <Link to="/search">
          <div className="card relative">
            <div className="absolute inset-0 bg-gray-600 opacity-10"></div>
            <div className="relative z-10">
              <h2>Search Recipes</h2>
              <img src={TestImage} alt="Image for Card 1" />
            </div>
          </div>
        </Link>
        <Link to="/categories">
          <div className="card relative">
            <div className="absolute inset-0 bg-gray-600 opacity-10"></div>
            <div className="relative z-10">
              <h2>Categories</h2>
              <img src={TestImage} alt="Image for Card 2" />
            </div>
          </div>
        </Link>
        <Link to="/favorites">
          <div className="card relative">
            <div className="absolute inset-0 bg-gray-600 opacity-10"></div>
            <div className="relative z-10">
              <h2>Favorites</h2>
              <img src={TestImage} alt="Image for Card 3" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeCards;
