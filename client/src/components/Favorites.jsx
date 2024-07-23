import React, { useState } from "react";

const Favorites = ({ recipes }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const removeFromFavorites = (id) => {
    setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div>
      <h2>Favorite Recipes</h2>
      <ul>
        {favoriteRecipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.recipe_name}
            <button onClick={() => removeFromFavorites(recipe.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Display feature */}
      <h2>Display Favorites</h2>
      <ul>
        {favoriteRecipes.map((recipe) => (
          <li key={recipe.id}>{recipe.recipe_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
