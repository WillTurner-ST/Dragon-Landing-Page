// src/LandingPage.js
import React from 'react';
import Footer from '../components/Footer'; // Import your Footer component
import NavMain from '../components/NavMain'; // Import your NavMain component
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* NavMain component rendered at the very top */}
      {/* Ensure NavMain has appropriate styling (e.g., fixed position, z-index, background)
          if it's meant to always be visible at the top. */}
      <NavMain />

      {/* Main content area, flex-grow allows it to expand and push the footer down */}
      {/* The 'pt-24' class adds padding to the top of the main content area.
          This pushes the content down, preventing it from being hidden
          behind a fixed or sticky navigation bar (like NavMain might be).
          Adjust 'pt-24' (6rem) if NavMain has a different height. */}
      <main className="container mx-auto p-8 pt-24 flex-grow flex items-center justify-center relative z-10">

        <div className="w-full max-w-5xl"> {/* Increased max-width slightly for more grandeur */}

          {/* Menu Selection Section */}
          <section className="text-center my-16 md:my-24 animate-fade-in-up"> {/* Added fade-in-up animation */}
            <h2 className="text-7xl md:text-7xl mb-10 text-white uppercase tracking-wide drop-shadow-lg"> {/* Larger, bolder, white text with shadow */}
              Menus
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <Link
                to="/menu/east-brainerd" // Link to East Brainerd menu page
                // Increased text size to 3xl/4xl and added drop-shadow-md for perceived weight
                className="inline-block bg-black text-white font-bold text-3xl md:text-4xl px-10 py-5 rounded-full shadow-xl hover:bg-SnapGreenDark transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl min-w-[280px] drop-shadow-md"
              >
                East Brainerd
              </Link>
              <Link
                to="/menu/broad-street" // Link to Broad St menu page
                // Increased text size to 3xl/4xl and added drop-shadow-md for perceived weight
                className="inline-block bg-black text-white font-bold text-3xl md:text-4xl px-10 py-5 rounded-full shadow-xl hover:bg-SnapGreenDark transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl min-w-[280px] drop-shadow-md"
              >
                Broad St
              </Link>
              <Link
                to="/menu/store-dab-bar" // Link to Store Dab Bars menu page
                // Increased text size to 3xl/4xl and added drop-shadow-md for perceived weight
                className="inline-block bg-black text-white font-bold text-3xl md:text-4xl px-10 py-5 rounded-full shadow-xl hover:bg-SnapGreenDark transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl min-w-[280px] drop-shadow-md"
              >
                Store Dab Bars
              </Link>
            </div>
          </section>

          {/* Animated Horizontal Rule */}
          <hr className="border-t-2 border-SnapGreen my-16 md:my-24 animate-fade-in animate-pulse-green" /> {/* Fade-in and pulse animation */}

          {/* Waiver Button Section */}
          <section className="text-center my-16 md:my-24 animate-fade-in-up delay-300"> {/* Added fade-in-up with delay */}
            <h2 className="text-7xl md:text-7xl mb-8 text-white drop-shadow-lg">Waiver</h2> {/* Larger, white text with shadow */}
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
              Before enjoying our offerings, please ensure you've reviewed our waiver. It's quick, easy, and essential for your visit!
            </p>
            <Link
              to="https://www.snapdragonhemp.com/guest-release/" // Link to your waiver page
              // Text size for the waiver button remains large for prominence
              className="inline-block bg-black text-white font-extrabold text-3xl md:text-3xl px-12 py-6 rounded-full shadow-xl hover:text-[#DDEEFF] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              SIGN HERE
            </Link>
          </section>
        </div>

      </main>

      {/* Footer component rendered at the very bottom */}
      <Footer />
    </div>
  );
}