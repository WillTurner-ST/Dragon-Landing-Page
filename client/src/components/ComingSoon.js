// src/components/ComingSoon.jsx
import React from "react";
import {Link} from 'react-router-dom';
import CTA1 from '../assets/Rins9CTA.png'; // Import your CTA imag

const ComingSoon = () => {
  return (
    <div className="h-1/2 w-4/5 mx-auto bg-black flex items-center justify-center text-white pt-52 pb-48 flex-col">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl md:text-6xl mb-6">New Location Coming Soon!</h1>
        <p className="text-lg md:text-xl font-bold ">Can't Wait?</p>
      </div>
       {/* Delivery CTA Section */}
                <section className="my-16 md:my-24 animate-fade-in-up delay-500">
                  <Link
                    to="https://www.rins9.com" // Update this to your actual delivery page route
                    className="block w-full group"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img 
                        src={CTA1} // Update this to your actual image path
                        alt="Cannabis delivery service"
                        className="w-full h-auto object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                        style={{
                          aspectRatio: '1200/600',
                          maxHeight: '600px'
                        }}
                      />
                      {/* Optional hover overlay for enhanced interactivity */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 ease-in-out"></div>
                    </div>
                  </Link>
                </section>
    </div>
  );
};

export default ComingSoon;
