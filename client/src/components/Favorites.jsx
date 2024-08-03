import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      console.log("User ID:", user.user_id); // Debug log to check if user ID is available
      fetchFavoriteRecipes(user.user_id);
    } else {
      console.log("No user found in context"); // Debug log if user is not available
    }
  }, [user]);

  const fetchFavoriteRecipes = async (user_id) => {
    try {
      const response = await axios.get(`https://react-express-connection.onrender.com/find?user_id=${user_id}`);
      const favoriteRecipeIds = response.data;
      console.log("Favorite Recipe IDs:", favoriteRecipeIds); // Debug log to check fetched IDs

      const recipes = await Promise.all(
        favoriteRecipeIds.map(async (id) => {

          const recipeResponse = await axios.get(`https://react-express-connection.onrender.com/search/recipe/${id}`);
          console.log("Fetched Recipe:", recipeResponse.data); // Add this line
          return recipeResponse.data;

        })
      );

      setFavoriteRecipes(recipes);
    } catch (error) {
      console.error("Error fetching favorite recipes:", error);
    }
  };

  const removeFromFavorites = async (idMeal) => {
    try {

      console.log(`Removing recipe with ID: ${idMeal}`); // Debug log for recipe ID
      await axios.delete("https://react-express-connection.onrender.com/favor", {
        data: { user_id: user.user_id, recipe_id: idMeal } // Send data correctly
      });
      setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe.idMeal !== idMeal));
      console.log("Recipe removed successfully");
    } catch (error) {

      console.error("Error removing favorite recipe:", error);
    }
  };

  const handleModal = (result = null) => {
    setSelectedData(result);
    setModal(!modal);
  };

  return (
    <div>
      <h2>Favorite Recipes</h2>
      <FavoriteCard recipes={favoriteRecipes} remove={() => removeFromFavorites(recipe.idMeal)}/>
    </div>
  );
};

export default Favorites;