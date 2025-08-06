// src/components/ComingSoon.jsx
import React from "react";
import {Link} from 'react-router-dom';
import CTASmall from '../assets/CTA-Small.png';
import CTAMob from '../assets/CTA-Mob.png';

const ComingSoon = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 flex justify-center items-center">
      {/* Delivery CTA Section */}
      <section className="w-full animate-fade-in-up delay-500">
        <Link
          to="https://www.rins9.com" 
          className="block w-full group"
        >
          <div className="relative overflow-hidden rounded-lg md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Mobile Image (800x200) - visible on screens smaller than md */}
            <img 
              src={CTAMob} 
              alt="RINS9"
              className="block md:hidden w-full h-auto object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
              style={{
                aspectRatio: '800/200',
                minHeight: '100px',
                maxHeight: '200px'  
              }}
            />
            {/* Desktop Image (1200x600) - visible on md screens and larger */}
            <img 
              src={CTASmall} 
              alt="RINS9"
              className="hidden md:block w-full h-auto object-cover rounded-lg md:rounded-2xl transition-all duration-500 ease-in-out group-hover:scale-105"
              style={{
                aspectRatio: '1200/210',
                minHeight: '200px',
                maxHeight: '400px'  
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default ComingSoon;