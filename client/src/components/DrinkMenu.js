import React from "react";
import DabL from "../assets/DabL.png";
import DabR from "../assets/DabR.png";
import MenuL from "../assets/MenuL.png";
import MenuR from "../assets/MenuR.png";
import FoodMenu from "../assets/FoodMenu.png";

const DrinkMenu = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Food Menu Heading and Images */}
      <h2 className="text-4xl text-white text-center mb-4">Food Menu</h2>
      <div className="items-center">
        <div className="max-w-md mx-auto">
          <img src={FoodMenu} alt="Drink Menu Left" className="w-full" />
        </div>
      </div>

      {/* Drink Menu Heading and Images */}
      <h2 className="text-4xl text-white text-center mb-4 mt-10">Drink Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 items-center">
        <div className="max-w-md mx-auto">
          <img src={MenuL} alt="Drink Menu Left" className="w-full" />
        </div>
        <div className="max-w-md mx-auto">
          <img src={MenuR} alt="Drink Menu Right" className="w-full" />
        </div>
      </div>

      {/* Dab Menu Heading and Images */}
      <h2 className="text-4xl text-white text-center mb-4 mt-32">Dab Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="max-w-md mx-auto">
          <img src={DabL} alt="Dab Menu Left" className="w-full" />
        </div>
        <div className="max-w-md mx-auto">
          <img src={DabR} alt="Dab Menu Right" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default DrinkMenu;
