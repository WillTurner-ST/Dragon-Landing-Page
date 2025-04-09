import React from "react";
import { Link } from "react-router-dom"; // For the button link
import HRO from "../assets/herodab.png"; // Import desktop image
import HRM from "../assets/heromob.png"; // Import mobile image
import Logo from "../assets/Dragon_Logo.svg"; // Import your logo
import { ChevronDown } from "lucide-react"; // For the arrow icon

const Hero = () => {
  return (
    <div className="relative h-screen bg-black text-gray-100">
      {/* Background Image for Desktop */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center h-screen hidden sm:block pt-5"
        style={{
          backgroundImage: `url(${HRO})`,
          backgroundSize: "cover", // Ensures the full image is visible
        }}
      ></div>

      {/* Background Image for Mobile */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center h-screen sm:hidden"
        style={{
          backgroundImage: `url(${HRM})`,
          backgroundSize: "cover", // Ensures the full image is visible
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4">Welcome to</h1>
        {/* Logo */}
        <img
          src={Logo}
          alt="The Dragon's Logo"
          className="w-48 sm:w-56 lg:w-64 mb-8"
        />

        {/* Subheading */}
        <p className="text-lg sm:text-xl mb-6 max-w-2xl font-bold">
          Experience Chattanooga's premier 21+ cannabis lounge! Sip RINS9
          refreshments, savor canna-cocktails, and explore unique cannabis
          delights in a vibrant, community-focused setting.
        </p>

        {/* Book Now Button */}
        <Link to="/menu/broad-street">
        <button className="bg-transparent border border-DragYellow hover:bg-SnapGreen hover:border-SnapGreen text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 mb-6">
          View Menu
        </button>
        </Link>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown
          className="w-12 h-12 text-white animate-bounce"
          aria-label="Scroll down"
        />
      </div>
    </div>
  );
};

export default Hero;
