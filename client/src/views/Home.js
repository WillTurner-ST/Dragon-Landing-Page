import React from 'react';

import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Drinks from '../components/Drinks';
import Footer from '../components/Footer';
import NavMain from '../components/NavMain';
import '../App.css';
import Calendar from '../components/CalendarEvents';
import Gallery from '../components/GalleryGrid';
import RotatingReviews from '../components/RotatingReviews';
const Home = () => {
  return (
    <div>
      {/* Navigation */}
      <div className="absolute z-20 w-full">
        <NavMain />
      </div>
      {/* Hero */}
      <div className="relative z-10">
        <Hero />
      </div>
      {/* Content */}
      <div>
        <AboutUs />
      </div>
      <Drinks />
      <div>
        <Gallery/>
      </div>
      <div className='mt-16'>
        <Calendar/>
      </div>
      <div className='mt-16'>
        <RotatingReviews/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
