// Hero.js
import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Image1 from '../assets/image1.jpg'; // Replace with your actual image path
import Image3 from '../assets/image3.jpg'; // Replace with your actual image path

const images = [Image1, Image3];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <section className="relative flex justify-center items-center" style={{ height: '70vh' }}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      ))}
      <div className="relative z-10 p-6 md:p-8 bg-black bg-opacity-80 rounded-xl shadow-2xl text-center w-full md:max-w-2xl">
        <h1 className="text-3xl md:text-4xl text-white leading-tight mb-4">
          UNLEASH THE DRAGON
        </h1>
        <p className='text-white font-bold mb-6'>Experience The Dragon – Chattanooga's pinnacle of cannabis culture, where every visit is a journey to euphoria without the hangover.</p>
        <Link to='/menu'>
        <a href="/menu" className="inline-block bg-SnapGreen text-white rounded-md px-5 py-3 uppercase font-bold shadow-md hover:bg-green-600 transition-colors duration-300">
          View our Menu
        </a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
