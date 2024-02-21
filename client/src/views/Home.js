import React, { useRef} from 'react';

import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Drinks from '../components/Drinks';
import Footer from '../components/Footer';
import NavMain from '../components/NavMain';
import '../App.css';

const Home = () => {
  const aboutRef = useRef(null);

  return (
    <div>
      <NavMain aboutRef={aboutRef} />
      <Hero />
      <div ref={aboutRef}><AboutUs /></div>
      <Drinks />
      <Footer />
    </div>
  );
};

export default Home;

