import React, {useState} from 'react';
import axios from 'axios';
import { FaRegHeart } from 'react-icons/fa';

const FavoriteButton = ({userId, recipeId, isFavorite, refreshData}) => {
    const [favorited, setfavorited] = useState(isFavorite);
    const handleFavorite = async () => {
        try {
            const response = await axios.post(`http://localhost:9000/favorites`, {userId, recipeId});
            if(favorited){
                setfavorited(false); //Unfavorite
            } else {
                setfavorited(true); //Favorite
            }
            refreshData(); // Update the favorites list in the parent component
        }
        catch(error){
            console.error("Error favoriting recipe:", error);
        }
    }
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
  )
}

export default FavoriteButton 
