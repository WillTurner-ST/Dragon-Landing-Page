import React from "react";
import DabL from "../assets/DabL.png";
import DabR from "../assets/DabR.png";

const DabMenu = () => {

  return (
    <div className="text-center mb-20 animate__animated animate__fadeIn animate__delay-1s">
      <div className="max-w-screen-lg mx-auto p-4">
        <h2 className="text-white text-4xl tracking-wide mb-8">Our Dab Menu</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-2">
            <img
              src={DabL}
              className="rounded-lg w-full max-w-[200px] sm:max-w-full mx-auto"
              alt="Drink Menu Left"
            />
          </div>
          <div className="w-full sm:w-1/2 ml-0 sm:ml-2">
            <img
              src={DabR}
              className="rounded-lg w-full max-w-[200px] sm:max-w-full mx-auto"
              alt="Drink Menu Right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DabMenu;
