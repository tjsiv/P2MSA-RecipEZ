import React from "react";

const RecipeCard = () => {
  return (
    <div>
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <h2 class="text-2xl font-bold tracking-tight">
          Recipes:
        </h2>

        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            {/* Image */}
              <img
                src="./assets/FoodOne.jpg"
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            {/* Text Container */}
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-2xl">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    Burger
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">Bacon, Lettuce, Tomatoe</p>
              </div>
              <p class="text-xl font-medium text-blue-200">$35</p>
            </div>
          </div>

          {/* More products... */}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
