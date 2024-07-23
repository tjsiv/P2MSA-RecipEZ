import React, { useContext } from "react";
import FavoriteButton from "./FavoriteButton";
import { UserContext } from '../context/UserContext';

const PreviewPopup = ({ data, onClose }) => {
  const { user } = useContext(UserContext); // Access user from context
  const loggedUser = user?.user_id; // Ensure user and user.id are defined

  const limitWords = (str, limit) => {
    const words = str.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return str;
  };

  console.log("loggedUser:", loggedUser); // Corrected console log

  return (
    <div
      className="relative z-20"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          className="flex min-h-full items-center justify-center p-4 text-center sm:p-0"
          onClick={onClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all my-8 w-full max-w-5xl"
          >
            <div className="flex">
              <div>
                <img src={data.strMealThumb} alt="" />
              </div>
              <div className="p-4">
                <h2 className="text-2xl w-[340px] font-bold uppercase pb-4">
                  {data.strMeal}
                </h2>
                <h3 className="text-xl text-blue-300 underline">
                  Ingredients:
                </h3>
                <p className="mt-1 text-sm text-white md:text-left pb-4">
                  Beef, Cheese, Lettuce, Tomato, Pickles, Onions
                </p>
                <h3 className="text-xl text-blue-300 underline">
                  Instructions:
                </h3>
                <p className="w-[340px]">
                  {limitWords(data.strInstructions, 130)}
                </p>
                <div className="absolute bottom-0 right-0 z-21 flex justify-end items-end mb-3 w-[30px] scale-125">
                  <FavoriteButton                      
                    recipe_id={data.idMeal}
                    user_id={loggedUser} // Pass user_id to FavoriteButton
                    className="ml-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPopup;
