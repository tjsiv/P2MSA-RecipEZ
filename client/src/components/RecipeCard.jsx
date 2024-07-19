import React from "react";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
import FavoriteButton from "./FavoriteButton";

const RecipeCard = ({ results }) => {  
  
  return (
    console.log(results),
    (
      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
          <h2 className="text-2xl font-bold tracking-tight">Recipes:</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {results.map((result, index) => (
              <div key={index} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  {/* Image */}
                  <img
                    src={result.strMealThumb}
                    alt={result.strMeal}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                {/* Text Container */}
                <div className="mt-4 flex justify-between md:text-left">
                  <div className="w-[450px]">
                    <h3 className="text-2xl pl-4 w-[240px]">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0 bg-gray-600 opacity-10 z-[-1] rounded-md"
                        ></span>
                        {/* Food Name */}
                        {result.strMeal}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-white m-4 md:text-left">
                      {/* Ingredients */}
                      {result.strIngredient1}, {result.strIngredient2}, {result.strIngredient3}, {result.strIngredient4}, {result.strIngredient5}, {result.strIngredient6}, {result.strIngredient7}, {result.strIngredient8}, {result.strIngredient9}, {result.strIngredient10}
                    </p>
                  </div>
                  {/* Price */}
                  <div className="w-[40px] h-[25px] hover:text-pink-400">
                    <FavoriteButton />
                  </div>
                  {/* <p className="text-xl font-medium text-blue-200">${Math.floor(Math.random() * (30 - 10 +1) + 10)}</p> */}
                </div>
              </div>
          ))}
</div>
        </div>
      </div>
    )
  );
};

export default RecipeCard;
