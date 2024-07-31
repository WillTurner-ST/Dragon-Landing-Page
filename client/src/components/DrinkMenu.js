import React from "react";
import Dab1L from "../assets/Dab1L.png";
import Dab1R from "../assets/Dab1R.png";
import Dab2L from "../assets/Dab2L.png";
import Dab2R from "../assets/Dab2R.png";
import DrinkL from "../assets/DrinkL.png";
import DrinkR from "../assets/DrinkR.png";
import ShareL from "../assets/ShareL.png";
import ShareR from "../assets/ShareR.png";
import Share2L from "../assets/Share2L.png";
import Share2R from "../assets/Share2R.png";
import SideL from "../assets/SideL.png";
import SideR from "../assets/SideR.png";


const DrinkMenu = () => {
  return (
    <div className="container mx-auto p-4">
    {/* Dab Menu Card */}
    <div className="shadow-gray-500 border border-gray-600 rounded-lg shadow-lg p-5 mb-20">
      <h2 className="text-4xl text-white text-center mb-4">Dab Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="max-w-md mx-auto">
          <img src={Dab1L} alt="Dab Menu Left" className="w-full rounded-lg" />
        </div>
        <div className="max-w-md mx-auto">
          <img src={Dab1R} alt="Dab Menu Right" className="w-full rounded-lg" />
        </div>
        <div className="max-w-md mx-auto">
          <img src={Dab2L} alt="Dab Menu Left" className="w-full rounded-lg" />
        </div>
        <div className="max-w-md mx-auto">
          <img src={Dab2R} alt="Dab Menu Right" className="w-full rounded-lg" />
        </div>
      </div>
    </div>

    {/* Drink Menu Card */}
    <div className="shadow-gray-500 border border-gray-600 rounded-lg shadow-lg p-5 mb-20">
      <h2 className="text-4xl text-white text-center mb-4">Drink Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 items-center">
        <div className="max-w-md mx-auto">
          <img src={DrinkL} alt="Drink Menu Left" className="w-full rounded-lg" />
        </div>
        <div className="max-w-md mx-auto">
          <img src={DrinkR} alt="Drink Menu Right" className="w-full rounded-lg" />
        </div>
      </div>
    </div>

    {/* Food Menu Card */}
    <div className="shadow-gray-500 border border-gray-600 rounded-lg shadow-lg p-5 mb-20">
      <h2 className="text-4xl text-white text-center mb-4">Munchies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 items-center">
        <div className="max-w-md mx-auto">
          <img src={ShareL} alt="Drink Menu Left" className="w-full rounded-lg" />
        </div>
        <div className="max-w-md mx-auto">
          <img src={ShareR} alt="Drink Menu Right" className="w-full rounded-lg" />
        </div>
        <div className="max-w-md mx-auto">
          <img src={Share2L} alt="Drink Menu Left" className="w-full rounded-lg" />
        </div>
        <div className="max-w-md mx-auto">
          <img src={Share2R} alt="Drink Menu Right" className="w-full rounded-lg" />
        </div>
        <div className="max-w-md mx-auto">
          <img src={SideL} alt="Drink Menu Left" className="w-full rounded-lg" />
        </div>
        <div className="max-w-md mx-auto">
          <img src={SideR} alt="Drink Menu Right" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default DrinkMenu;
