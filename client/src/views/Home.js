import React from 'react';

import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Drinks from '../components/Drinks';
import Footer from '../components/Footer';
import NavMain from '../components/NavMain';
import '../App.css';

const Home = () => {

  return (
    <div>
      <NavMain/>
      <Hero/>
      <div><AboutUs/></div> 
      <Drinks />
      <Footer />
    </div>
  );
};

export default Home;

