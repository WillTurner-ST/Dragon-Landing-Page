import React from 'react';
import Dam from '../assets/drink.png';
import Tap from '../assets/tap.png';
import Lemon from '../assets/lemon.png';

const Drinks = () => {


  return (
<div className="bg-black text-gray-200 p-4 md:p-8">
  <div className="container mx-auto">
    <h2 className="text-4xl mb-4 text-center">Our Signature Drinks</h2>
    <div className="flex flex-col md:flex-row md:space-x-4 mb-6 items-center justify-center">
      <img src={Lemon} alt="Drink 1" className="w-full md:w-1/2 lg:w-1/3 h-58 mb-4 md:mb-0 md:mr-4 rounded-lg" />
      <p className="w-full md:w-1/2 font-bold text-center text-base md:text-lg mt-4 md:mt-0">
        Chill out with our Lemonade Haze, a refreshing concoction that's like a burst of sunshine in a glass. Infused with the zest of organic, hand-picked lemons and a subtle hint of premium cannabis essence, this drink is a perfect blend of tart and sweet. Each sip transports you to a sun-drenched lemon grove, offering a serene escape. Ideal for lazy afternoons and unwinding after a long day, it's your go-to for a relaxing, citrusy delight.
      </p>
    </div>
    <div className="flex flex-col md:flex-row-reverse md:space-x-4 mb-6 items-center justify-center">
      <img src={Dam} alt="Drink 2" className="w-full md:w-1/2 lg:w-1/3 h-58 mb-4 md:mb-0 md:ml-4 rounded-lg" />
      <p className="w-full md:w-1/2 font-bold text-center text-base md:text-lg mt-4 md:mt-0">
        Embrace tranquility with Dam Water, an exquisite beverage inspired by the serene waters of Amsterdam's canals. This elegant drink combines a gentle infusion of the finest cannabis with a smooth, velvety texture. Its understated flavors are designed to soothe and calm, making it an ideal choice for a peaceful evening. Whether you're unwinding by the fireplace or enjoying a quiet night under the stars, Dam Water is the epitome of relaxation in a bottle.
      </p>
    </div>
    <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-center">
      <img src={Tap} alt="Drink 3" className="w-full md:w-1/2 lg:w-1/3 h-58 mb-4 md:mb-0 md:mr-4 rounded-lg" />
      <p className="w-full md:w-1/2 font-bold text-center text-base md:text-lg mt-4 md:mt-0">
        Dive into the vibrant world of Dooie Blast, a drink that's as lively as it is flavorful. A thrilling blend of cannabis energy and an exotic mix of tropical fruits, each gulp is a festival of taste. Imagine the wild, untamed flavors of mango, pineapple, and passionfruit dancing on your palate, accompanied by an invigorating cannabis kick. Perfect for the bold and adventurous, this drink is a ticket to an exciting, colorful journey. It's not just a beverage; it's an experience for those who dare to explore.
      </p>
    </div>
  </div>
</div>

  );
};

export default Drinks;