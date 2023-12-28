import React from 'react';
import Dam from '../assets/drink.png';
import Tap from '../assets/tap.png';
import Lemon from '../assets/lemon.png';

const Drinks = () => {


  return (
    <div className="bg-black text-gray-200 p-4 md:p-8">
    <div className="container mx-auto">
      <h2 className="text-4xl mb-4">Our Signature Drinks</h2>
      <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
        <img src={Lemon} alt="Drink 1" className="w-full md:w-1/2 h-58 mb-4 md:mb-0 rounded-lg" />
        <p className="w-full md:w-1/2 font-bold">Chill out with our Lemonade Haze. It's a laid-back mix of tangy lemon vibes and mellow cannabis notes. Each sip's like a lazy, sun-soaked afternoon, leaving you all smiles and super chilled. Perfect for kicking back and soaking in those sunny vibes.</p>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:space-x-4 mb-6">
        <img src={Dam} alt="Drink 2" className="w-full md:w-1/2 h-58 mb-4 md:mb-0 rounded-lg" />
        <p className="w-full md:w-1/2 font-bold"> Take it easy with Dam Water. This drink's inspired by chill Dutch canal vibes, blending subtle cannabis with a cool, smooth touch. It's like floating on calm waters, ideal for relaxing evenings or just mellowing out.</p>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <img src={Tap} alt="Drink 3" className="w-full md:w-1/2 h-58 mb-4 md:mb-0 rounded-lg" />
        <p className="w-full md:w-1/2 font-bold"> Get groovy with Dooie Blast. It's a wild mix of cannabis energy and a mystery blend of tropical fruits. Each sip is a burst of colors and good vibes, perfect for those who love to keep things lively and adventurous.</p>
      </div>
    </div>
  </div>
  );
};

export default Drinks;