import React from "react";
import Logo from "../assets/Dragon_Logo.svg";
import BackgroundImage from "../assets/Background.jpg";
import "../App.css";

const Hero = () => {
  return (
    <div className="hero-container" style={{ height: '75vh', position: 'relative', width: '100%' }}>
      {/* Background Image */}
      <img
        src={BackgroundImage}
        alt="Background"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
      />

      {/* Centered Logo */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000 // Higher z-index for the logo
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{ width: '400px', height: '400px' }} // Specific size for the logo
        />
      </div>
    </div>
  );
};

export default Hero;
