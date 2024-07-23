import React from "react";



const RecipeCard = ({ results, handleModal }) => {
  
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight">Recipes:</h2>
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="group relative"
              onClick={() => handleModal(result)}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                {/* Image */}
                <img
                  src={result.strMealThumb}
                  alt={result.strMeal}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              {/* Text Container */}
              <div className="mt-4 flex justify-between text-left">
                <div className="w-[450px]">
                  <h3 className="text-2xl pl-4 w-[240px]">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-gray-600 opacity-10 z-[-1] rounded-md"
                      ></span>
                      {/* Food Name */}
                      {result.strMeal}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-white m-4 md:text-left">
                    {/* Ingredients */}
                    {result.strIngredient1}, {result.strIngredient2},{" "}
                    {result.strIngredient3}, {result.strIngredient4},{" "}
                    {result.strIngredient5}, {result.strIngredient6},{" "}
                    {result.strIngredient7}, {result.strIngredient8},{" "}
                    {result.strIngredient9}, {result.strIngredient10}
                  </p>
                  <div className="absolute bottom-0 right-0 z-21 flex justify-end items-end mb-2 w-[20px]">
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
