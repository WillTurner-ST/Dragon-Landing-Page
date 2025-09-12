// src/components/ComingSoon.jsx
import React from "react";
import { Link } from "react-router-dom";
import CTASmall from "../assets/CTA-Small.png";
import CTAMob from "../assets/CTA-Mob.png";

const ComingSoon = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 flex justify-center items-center">
      {/* Delivery CTA Section */}
      <section className="w-full animate-fade-in-up delay-500">
        <Link
          to="https://www.rins9.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full group"
        >
<div className="relative overflow-hidden rounded-lg md:rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.01]">
            {/* Mobile (800x200) */}
            <div
              className="block md:hidden relative w-full"
              style={{ aspectRatio: "800 / 200" }}
            >
              <img
                src={CTAMob}
                alt="RINS9"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-contain object-center"
              />
            </div>

            {/* Desktop (1200x210) */}
            <div
              className="hidden md:block relative w-full"
              style={{ aspectRatio: "1200 / 210" }}
            >
              <img
                src={CTASmall}
                alt="RINS9"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-contain object-center rounded-lg md:rounded-2xl"
              />
            </div>

            {/* Soft hover overlay (no cropping) */}
            <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default ComingSoon;
