import React from "react";
import "../index.css";
import TestImage from "../assets/pexels-Test-food-image-699953.webp"

const HomeCards = () => {
  return (
    <div className="HomeCard-container">
      <div className="card-container">
        <div className="card">
          <h2>Search Recipes</h2>
          <img src={TestImage} alt="Image for Card 1" />
        </div>
        <div className="card">
          <h2>Categories</h2>
          <img src={TestImage} alt="Image for Card 2" />
        </div>
        <div className="card">
          <h2>Favorites</h2>
          <img src={TestImage} alt="Image for Card 3" />
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
