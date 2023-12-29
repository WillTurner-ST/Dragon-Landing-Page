import React from "react";
import Dam from "../assets/drink.png";
import Tap from "../assets/tap.jpg";
import Lemon from "../assets/lemon.png";

const Drinks = () => {
  return (
    <div className="bg-black text-gray-200 p-4 md:p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-4 text-center">Our Signature Drinks</h2>
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6 items-center justify-center">
          <img
            src={Lemon}
            alt="Drink 1"
            className="w-full md:w-1/2 lg:w-1/3 h-58 mb-4 md:mb-0 md:mr-4 rounded-lg"
          />

          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <h2 className="text-2xl text-center mb-2 tracking-wide">
              Lemonade Haze
            </h2>
            <p className="text-center text-base md:text-lg font-bold">
              Lemonade Haze is a sweet, tangy, caffeine-free fizzy lemonade with
              a hint of cannabis. It's a refreshing, uplifting beverage that's
              perfect for any occasion.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:space-x-4 mb-6 items-center justify-center">
          <img
            src={Dam}
            alt="Drink 2"
            className="w-full md:w-1/2 lg:w-1/3 h-58 mb-4 md:mb-0 md:ml-4 rounded-lg"
          />
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <h2 className="text-2xl text-center mb-2 tracking-wide">
              Dam Water
            </h2>
            <p className="text-center text-base md:text-lg font-bold">
              Embrace tranquility with Dam Water; a handcrafted, infused soda
              with flavors of blueberry, coconut, and citrus. Proceeds from this
              beverage go towards the conservation and revitalization efforts of
              Lake Sturgeon in the Tennessee River.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-center">
          <img
            src={Tap}
            alt="Drink 3"
            className="w-full md:w-1/2 lg:w-1/3 h-58 mb-4 md:mb-0 md:mr-4 rounded-lg"
          />
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <h2 className="text-2xl text-center mb-2 tracking-wide">
              Doobie Blast
            </h2>
            <p className="text-center text-base md:text-lg font-bold">
              Doobie Blast is an iconic blue blast of citrus and tropical
              fruits, delivering a symphony of flavors that dance on your palate
              and your cannabinoid receptors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
