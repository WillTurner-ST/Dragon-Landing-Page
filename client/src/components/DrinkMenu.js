import React from "react";
import Dab1L from "../assets/Dab1L-min.png";
import Dab1R from "../assets/Dab1R-min.png";
import Dab2L from "../assets/Dab2L-min.png";
import Dab2R from "../assets/Dab2R-min.png";
import DrinkL from "../assets/DrinkL-min.png";
import DrinkR from "../assets/DrinkR-min.png";
import DragonHour from "../assets/DragonHour.png";

const DrinkMenu = () => {
  return (
    <div className="container mx-auto p-4">
    {/*Dragon Hour (use for deals later on) */}
      <div className="border-tp-5 mb-20">
        <div className="flex justify-center items-center">
          <div className="w-2/3">
            <img
              src={DragonHour}
              alt="Drink Menu Left"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Food Menu Card 
      <div className="border-t border-SnapGreen p-5 mb-20">
        <h2 className="text-4xl text-white text-center mb-4">Munchies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 items-center">
          <div className="max-w-md mx-auto">
            <img
              src={ShareL}
              alt="Drink Menu Left"
              className="w-full rounded-lg"
            />
          </div>
          <div className="max-w-md mx-auto">
            <img
              src={ShareR}
              alt="Drink Menu Right"
              className="w-full rounded-lg"
            />
          </div>
          <div className="max-w-md mx-auto">
            <img
              src={Share2L}
              alt="Drink Menu Left"
              className="w-full rounded-lg"
            />
          </div>
          <div className="max-w-md mx-auto">
            <img
              src={Share2R}
              alt="Drink Menu Right"
              className="w-full rounded-lg"
            />
          </div>
          <div className="max-w-md mx-auto">
            <img
              src={SideL}
              alt="Drink Menu Left"
              className="w-full rounded-lg"
            />
          </div>
          <div className="max-w-md mx-auto">
            <img
              src={SideR}
              alt="Drink Menu Right"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div> 
      */}
      {/* Dab Menu Card */}
      <div className="p-5 mb-20">
        <h2 className="text-4xl text-white text-center mb-4 pt-4 border-t border-SnapGreen">
          Dab Menu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="max-w-md mx-auto">
            <img
              src={Dab1L}
              alt="Dab Menu Left"
              className="w-full rounded-lg"
            />
          </div>
          <div className="max-w-md mx-auto">
            <img
              src={Dab1R}
              alt="Dab Menu Right"
              className="w-full rounded-lg"
            />
          </div>
          <div className="max-w-md mx-auto">
            <img
              src={Dab2L}
              alt="Dab Menu Left"
              className="w-full rounded-lg"
            />
          </div>
          <div className="max-w-md mx-auto">
            <img
              src={Dab2R}
              alt="Dab Menu Right"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Drink Menu Card */}
      <div className="border-t border-SnapGreen p-5 mb-20">
        <h2 className="text-4xl text-white text-center mb-4">Drink Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 items-center">
          <div className="max-w-md mx-auto">
            <img
              src={DrinkL}
              alt="Drink Menu Left"
              className="w-full rounded-lg"
            />
          </div>
          <div className="max-w-md mx-auto">
            <img
              src={DrinkR}
              alt="Drink Menu Right"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkMenu;
