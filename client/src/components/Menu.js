import React from "react";
import MenuL from "../assets/MenuL.png";
import MenuR from "../assets/MenuR.png";

const Menu = () => {

  return (
<div className="text-center">
    <h2 className="text-white text-5xl mb-5">Menu</h2>
    <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/4 mx-5 mb-5 md:mb-0 max-w-xs md:max-w-sm lg:max-w-md">
            <img src={MenuL} alt="Menu 1" className="w-full" />
        </div>
        <div className="md:w-1/4 mx-5 max-w-xs md:max-w-sm lg:max-w-md">
            <img src={MenuR} alt="Menu 2" className="w-full" />
        </div>
    </div>
</div>

  );
};

export default Menu;
