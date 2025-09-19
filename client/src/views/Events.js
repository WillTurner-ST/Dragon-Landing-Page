import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavMain from "../components/NavMain";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import GalleryGrid from "../components/GalleryGrid";

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavMain />

      <main className="pt-36 sm:pt-44 md:pt-52 flex-1 px-4">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center text-gray-200 mb-6 sm:mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6">
            Events
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-normal text-gray-200">
            Find what’s happening at our two locations.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-SnapGreen w-2/3 sm:w-1/2 md:w-1/3 mx-auto my-6 sm:my-8"></div>

        {/* Location Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 px-2 sm:px-6 mb-12 sm:mb-16">
          <Link
            to="/events/downtown"
            aria-label="Go to Downtown events"
            className="w-full sm:w-auto transform transition duration-200 hover:scale-105 inline-block text-center focus:outline-none focus:ring-2 focus:ring-SnapGreen/70 rounded py-2 sm:py-3"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white tracking-wide">
              Downtown
            </h1>
          </Link>

          {/* Divider shows only on >= sm */}
          <span className="hidden sm:inline text-2xl md:text-3xl font-light text-white px-4">
            |
          </span>

          <Link
            to="/events/eb"
            aria-label="Go to East Brainerd events"
            className="w-full sm:w-auto transform transition duration-200 hover:scale-105 inline-block text-center focus:outline-none focus:ring-2 focus:ring-SnapGreen/70 rounded py-2 sm:py-3"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white tracking-wide">
              East Brainerd
            </h1>
          </Link>
        </div>

        {/* Subtext */}
        <div className="mx-auto max-w-2xl px-2">
          <p className="text-center text-gray-400 italic text-base sm:text-lg md:text-xl">
            Select a location to explore all the exciting upcoming events
            happening in that area. From local gatherings to special promotions,
            there’s something for everyone.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-12 sm:mt-16 md:mt-20 px-1 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <GalleryGrid />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 sm:mt-28 md:mt-40 lg:mt-56 xl:mt-72 mb-16 sm:mb-24 lg:mb-32">
          <CTA />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
