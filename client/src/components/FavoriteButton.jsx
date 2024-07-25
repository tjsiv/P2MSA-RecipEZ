import React, { useState, useContext } from 'react';
import axios from 'axios';
import { FaRegHeart } from 'react-icons/fa';
import { UserContext } from '../context/UserContext';

const FavoriteButton = ({  recipe_id, isFavorite, refreshData }) => {
  const [favorited, setFavorited] = useState(isFavorite);
  const { user } = useContext(UserContext);
  const user_id = user?.user_id; // Extract user ID from context

  const handleFavorite = async () => {
    if (!user_id) {
      console.error("User is not logged in");
      return;
    }

    try {
      const response = await axios.post('https://react-express-connection.onrender.com/favorites', {
        user_id: user_id,
        recipe_id: recipe_id,
      });

      if (response.data) {
        console.log(response.data.message);
        refreshData(); // Update the favorites list in the parent component
      }
    } catch (error) {
      console.error("Error managing favorites:", error);
    }
  };
  console.log({user_id, recipe_id})
  return (
    <button
      className="w-[40px] h-[25px] hover:text-pink-400"
      onClick={handleFavorite}
    >
      <FaRegHeart
        className={`h-[25px] mt-1 mr-2 scale-125 hover:scale-150 ${
          favorited ? 'text-red-501' : ''
        }`}
      />
    </button>
  );
};

export default FavoriteButton;
