import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/contact.png";

const AboutUs = () => {
  const navigate = useNavigate();

  const GoToMenu = () => {
    navigate("/menu/broad-street");
  };

  return (
    <div className="bg-black py-20 px-6 sm:px-12 lg:px-16 text-white flex flex-col lg:flex-row items-center lg:justify-between max-w-7xl mx-auto">
      {/* Image Section */}
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl flex justify-center lg:justify-start">
        <div className="absolute -top-10 -bottom-10 left-1/4 right-1/4 border-4 border-DragYellow rounded-lg"></div>
        <img
          src={image}
          alt="Lounge interior"
          className="relative w-full object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* Text Section */}
      <div className="mt-12 lg:mt-0 text-center lg:text-left max-w-lg">
        <h1 className="text-4xl sm:text-5xl">Dab, Sip, and Unwind at The Dragon</h1>
        <p className="mt-6 text-lg font-bold sm:text-xl text-gray-100">
        Step into The Dragon, where the vibes are as smooth as our dabs and the drinks are crafted to perfection. Whether you're a seasoned connoisseur or new to the scene, our expert staff is here to guide you through our curated selection of premium concentrates and cocktails. Discover your new favorite indulgence and let The Dragon ignite your senses.
        </p>
        <button 
          onClick={GoToMenu} 
          className="mt-8  border-DragYellow border-2 hover:bg-SnapGreen hover:border-SnapGreen hover:border-8 text-white font-bold py-4 px-8 text-lg rounded-lg transition-all"
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default AboutUs;