import React, { useState, useEffect, useRef } from "react";
import DabMenu from "../components/DabMenu";
import NavMain from "../components/NavMain";
import Footer from "../components/Footer";
import DrinkMenu from "../components/DrinkMenu";
import { Link } from "react-router-dom";

const Popup = ({ isVisible, onClose, children }) => {
  if (!isVisible) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target.id === 'popup-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="popup-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out animate-fade-in"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 m-4 max-w-md w-full text-center transform transition-transform duration-300 ease-in-out animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-800"
          aria-label="Close popup"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        {children}
      </div>
      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-in { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

const Menu = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const dabMenuRef = useRef(null);
  const drinkMenuRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const fixedNavHeight = 208;
  const additionalGap = 20;
  const scrollOffset = fixedNavHeight + additionalGap;

  const scrollToSection = (ref) => {
    if (ref.current) {
      const elementRect = ref.current.getBoundingClientRect();
      const targetY = elementRect.top + window.pageYOffset - scrollOffset;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <NavMain />
      <div className="pt-52">
        <div className='mx-auto text-center text-gray-200 mb-8'>
          <h1 className='text-5xl mb-6'>Dragon Hour</h1>
          <p className='text-lg font-normal text-gray-200'>Everyday from 4:00PM to 5:00PM</p>
          <p className='text-lg font-normal text-gray-200'>2x loyalty points</p>
          <p className='text-lg font-normal text-gray-200'>Piece rental waived for dabs</p>
        </div>
        <div className="border-t border-SnapGreen w-1/4 mx-auto my-8"></div>
        <div className="flex flex-row justify-center items-center gap-2 px-6 mb-6">
          <h4
            onClick={() => scrollToSection(dabMenuRef)}
            className="cursor-pointer text-white text-4xl transform transition duration-200 hover:scale-110 inline-block min-w-[150px] text-center"
          >
            DABS
          </h4>
          <span className="text-xl md:text-2xl font-light text-white px-2"></span>
          <h4
            onClick={() => scrollToSection(drinkMenuRef)}
            className="cursor-pointer text-white text-4xl transform transition duration-200 hover:scale-110 inline-block min-w-[150px] text-center"
          >
            DRINKS
          </h4>
        </div>
        <div ref={dabMenuRef} className="pb-10">
          <DabMenu />
        </div>
        <div ref={drinkMenuRef} className="mt-10 pb-10">
          <DrinkMenu />
        </div>
      </div>
      <Footer />

      <Popup isVisible={isPopupVisible} onClose={handleClosePopup}>
        <h2 className="text-5xl text-black mb-4">
          Have you signed the Waiver?
        </h2>
        <p className="text-gray-600 mb-2">
        <strong>If the Waiver has not been signed we will not be able to serve you.</strong>
        </p>
        <Link to="https://www.snapdragonhemp.com/guest-release/">
        <button
          className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300"
        >
          Sign Waiver
        </button>
        </Link>
      </Popup>
    </div>
  );
};

export default Menu;