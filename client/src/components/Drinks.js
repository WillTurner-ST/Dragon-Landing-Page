import React from "react";
import drink1 from "../assets/mock1.png";
import drink2 from "../assets/mock2.png";
import drink3 from "../assets/mock3.png";
import drink4 from "../assets/italian.png"; // New drink image

const Drinks = () => {
  const drinks = [
    { id: 1, name: "Sunset in Paradise", image: drink1, description: "combines the sweet tang of pineapple, the citrusy zest of orange, and a hint of grenadine for a beautifully layered drink that’s as refreshing as an island breeze." },
    { id: 2, name: "The Dragon", image: drink2, description: "A bold and refreshing blend of exotic dragonfruit, luscious maraschino cherries, zesty lime juice, and our handcrafted lemon simple syrup, all topped with crisp, bubbly club soda. A drink as legendary as its name!" },
    { id: 3, name: "Mocktail Mule", image: drink3, description: "A vibrant blend of tart cranberry juice, fresh mint, and our handcrafted cranberry simple syrup, perfectly balanced with the bold spice of ginger beer. A refreshingly crisp and zesty delight!" },
    { id: 4, name: "Italian Soda", image: drink4, description: "A crisp and invigorating club soda, perfectly infused with your choice of handcrafted flavored simple syrup, creating a refreshing and flavorful experience in every sip." }, // New drink
  ];

  return (
    <div className="bg-black py-20 px-6 sm:px-12 lg:px-16 text-white max-w-7xl mx-auto">
      <h2 className="text-4xl text-center sm:text-5xl">Featured Mocktails</h2>
      <p className="mt-6 text-lg sm:text-xl text-center font-bold">
        Explore our handcrafted, infused drinks designed to elevate your experience.
      </p>

      <div className="mt-12 grid gap-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {drinks.map((drink) => (
          <div 
            key={drink.id} 
            className="relative p-6 rounded-lg shadow-lg text-center bg-black/40 backdrop-blur-lg border border-DragYellow"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/30 rounded-lg pointer-events-none"></div>
            <img src={drink.image} alt={drink.name} className="relative w-full h-56 object-cover rounded-lg" />
            <h2 className="relative mt-4 text-2xl tracking-wide">{drink.name}</h2>
            <p className="relative mt-2 text-gray-300 font-bold">{drink.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
