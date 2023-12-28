import React from 'react';
import Drink from '../assets/drink.png';

const Drinks = () => {


  return (
    <div className="bg-black text-gray-200 p-4 md:p-8">
    <div className="container mx-auto">
      <h2 className="text-4xl mb-4">Our Signature Drinks</h2>
      <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
        <img src={Drink} alt="Drink 1" className="w-full md:w-1/2 mb-4 md:mb-0 rounded-lg" />
        <p className="w-full md:w-1/2">Description of the first drink...</p>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:space-x-4 mb-6">
        <img src={Drink} alt="Drink 2" className="w-full md:w-1/2 mb-4 md:mb-0 rounded-lg" />
        <p className="w-full md:w-1/2">Description of the second drink...</p>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <img src={Drink} alt="Drink 3" className="w-full md:w-1/2 mb-4 md:mb-0 rounded-lg" />
        <p className="w-full md:w-1/2">Description of the third drink...</p>
      </div>
    </div>
  </div>
  );
};

export default Drinks;