import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const Favorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      fetchFavoriteRecipes(user.id);
    }
  }, [user]);

  const fetchFavoriteRecipes = async (userId) => {
    try {
      const response = await fetch(`/api/favorites?userId=${userId}`);
      const favoriteRecipeIds = await response.json();
      const recipes = await Promise.all(
        favoriteRecipeIds.map(async (id) => {
          const recipeResponse = await fetch(`http://localhost:9000/favsearch/${id}`);
          return await recipeResponse.json();
        })
      );
      setFavoriteRecipes(recipes);
    } catch (error) {
      console.error("Error fetching favorite recipes:", error);
    }
  };

  const removeFromFavorites = async (id) => {
    try {
      await axios.post('http://localhost:9000/favorites')
    }
      
    catch (error) {
      console.error("Error removing favorite recipe:", error);
    }
  };

  return (
    <div>
      <h2>Favorite Recipes</h2>
      <ul>
        {favoriteRecipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.strMeal} {/* Assuming the API returns 'strMeal' as the recipe name */}
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
          <li key={recipe.id}>{recipe.strMeal}</li> 
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
