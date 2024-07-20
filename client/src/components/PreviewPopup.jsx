import React from "react";
import FavoriteButton from "./FavoriteButton";

const PreviewPopup = ({data, onClose}) => {

    const limitWords = (str, limit) => {
        const words = str.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return str;
    }

  return (
    <div
      class="relative z-20"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center  sm:p-0" onClick={onClose} >
          {/* <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
          <div onClick={(e) => e.stopPropagation()} class="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all my-8 w-full max-w-2xl">
            <div className="flex">
              <div>
                <img src={data.strMealThumb} alt="" />
              </div>
              <div class="p-4">
                <h2 className="text-2xl w-[340px]">{data.strMeal}</h2>
                <p className="mt-1 text-sm text-white md:text-left">
                  Ingredients: Beef, Cheese, Lettuce, Tomato, Pickles, Onions
                </p>
                <p className="w-[340px]">{limitWords(data.strInstructions, 50)}</p>
                <div className="absolute bottom-0 right-0 z-21 flex justify-end items-end mb-2">
                    <FavoriteButton />
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
