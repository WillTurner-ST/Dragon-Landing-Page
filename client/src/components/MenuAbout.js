import React, { useState } from 'react';
import damlabel from '../assets/tap.jpg';

const MenuAbout = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const foodMenu = [
    { name: 'Hummus & Carrots', description: 'A delicious plant-based burger with all the fixings', price: '$11', img: damlabel },
    { name: 'Salsa & Tortilla Chips', description: 'A delicious plant-based burger with all the fixings', price: '$11', img: damlabel },
    { name: 'Pimento Cheese & Pita Chips', description: 'A delicious plant-based burger with all the fixings', price: '$11', img: damlabel },
    // ... other food items
  ];

  const dabItems = [
    [
      { name: 'House', price: '$6' },
      { name: 'Premium', price: '$8' },
      { name: 'Diamonds', price: '$12' },
    ],
    [
      { name: 'House', price: '$10' },
      { name: 'Premium', price: '$12' },
      { name: 'Diamonds', price: '$15' },
    ],
    [
      { name: 'House', price: '$14' },
      { name: 'Premium', price: '$16' },
      { name: 'Diamonds', price: '$20' },
    ],
    [
      { name: 'OLA Filter/Cart', price: '$3' },
      { name: 'Proxy', price: '$5' },
      { name: 'Crossing Core 2.1', price: '$5' },
      { name: 'Peak Pro', price: '$10' },
      { name: 'E-Nail', price: '$10' },
      { name: 'Volcano', price: '$15' },
      { name: 'Heady Glass', price: '$3' },
      { name: '3DXL Coil', price: '$3' },
    ]
  ];

  const drinksMenu = [
    { name: 'The Dragon', description: 'Dragonfruit, dark cherries, club soda & lemon-lime syrup', price: '$7', img: 'link_to_the_dragon_image' },
    { name: 'Mellow Blue', description: 'Blueberry soda, lemon juice & mint', price: '$7', img: 'link_to_mellow_blue_image' },
    { name: 'Coco-Jito', description: 'Coconut milk, lime juice, mint, & soda water', price: '$7', img: 'link_to_coco_jito_image' },
    { name: 'Seasonal Mule', description: 'Ginger beer, cranberry, rosemary, lime & a candied orange.', price: '$7', img: 'link_to_seasonal_mule_image' },
    { name: 'Canna-Garden', description: 'Club soda, mint, thyme, basil, lemon, cucumber, & habanero syrup', price: '$7', img: 'link_to_canna_garden_image' },
    { name: 'Spicy Nerd', description: 'Pineapple habanero, club soda, Nerds & a sugared strawberry', price: '$7', img: 'link_to_spicy_nerd_image' },
    { name: 'Italian Soda', description: 'Lime, Coconut, Blueberry, Lemon, Strawberry, Banana, Blood Orange, Pineapple, Mango, Habanero Watermelon, Peach, & Pineapple', price: '$5', img: 'link_to_italian_soda_image' },
    { name: 'Ssshes 50mg', description: 'Blue Raspberry, Grape, Tropical Rush & Strawberry', price: '$12', img: 'link_to_ssshes_50mg_image' }
  ];

  const buttonBaseStyle = "text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110";
  const buttonActiveStyle = "bg-green-600 " + buttonBaseStyle;
  const buttonInactiveStyle = "bg-green-500 hover:bg-green-700 " + buttonBaseStyle;


  const renderMenuItems = (items) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map(item => (
          <div key={item.name} className="bg-white p-4 rounded-lg shadow-md mb-4 mx-2 md:mx-0">
            <h2 className="text-2xl text-black">{item.name}</h2>
            <p className="text-md font-bold text-black">{item.description}</p>
            <p className="text-black font-bold">{item.price}</p>
            <img src={item.img} alt={item.name} className="w-full mt-3 rounded h-auto max-w-xs md:max-w-sm mx-auto" />
          </div>
        ))}
      </div>
    );
  };

  const renderDabItems = (items) => {
    // First three cards for .1 gram, .2 grams, and .3 grams
    const gramCards = items.slice(0, 3).map((gramItem, index) => (
      <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4 mx-2 md:mx-0">
        <h2 className="text-2xl text-black">{`.${index + 1} Gram`}</h2>
        {gramItem.map((item, itemIndex) => (
          <div key={itemIndex}>
            <p className="text-md font-bold text-black">{item.name}</p>
            <p className="text-black font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    ));
  
    // Fourth card for the add-on options
    const addOnCard = (
      <div key="add-ons" className="bg-white p-4 rounded-lg shadow-md mb-4 mx-2 md:mx-0">
        <h2 className="text-2xl text-black">Add-Ons</h2>
        {items[3].map((item, itemIndex) => (
          <div key={itemIndex}>
            <p className="text-md font-bold text-black">{item.name}</p>
            <p className="text-black font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    );
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {gramCards}
        {addOnCard}
      </div>
    );
  };


  return (
    <div className="bg-black text-white p-4 md:p-8 animate__animated animate__fadeIn">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Menu</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button onClick={() => setSelectedCategory('food')} className={selectedCategory === 'food' ? buttonActiveStyle : buttonInactiveStyle}>
          Food
        </button>
        <button onClick={() => setSelectedCategory('dabs')} className={selectedCategory === 'dabs' ? buttonActiveStyle : buttonInactiveStyle}>
          Dabs
        </button>
        <button onClick={() => setSelectedCategory('drinks')} className={selectedCategory === 'drinks' ? buttonActiveStyle : buttonInactiveStyle}>
          Drinks
        </button>
      </div>
      <div className="mt-6">
        {selectedCategory === 'food' && renderMenuItems(foodMenu)}
        {selectedCategory === 'dabs' && renderDabItems(dabItems)}
        {selectedCategory === 'drinks' && renderMenuItems(drinksMenu)}
      </div>
    </div>
  );
}

export default MenuAbout;
