import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const Favorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      console.log("User ID:", user.user_id); // Debug log to check if user ID is available
      fetchFavoriteRecipes(user.user_id);
    }
  }, [user]);

  const fetchFavoriteRecipes = async (user_id) => {
    try {
      const response = await axios.get(`http://localhost:9000/find?user_id=${user_id}`);
      const favoriteRecipeIds = response.data;
      console.log("Favorite Recipe IDs:", favoriteRecipeIds); // Debug log to check fetched IDs

      const recipes = await Promise.all(
        favoriteRecipeIds.map(async (id) => {
          const recipeResponse = await axios.get(`http://localhost:9000/recipe/${id}`);
          return recipeResponse.data;
        })
      );

      setFavoriteRecipes(recipes);
    } catch (error) {
      console.error("Error fetching favorite recipes:", error);
    }
  };

  const removeFromFavorites = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/favorites/${id}`);
      setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe.id !== id));
    } catch (error) {
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
