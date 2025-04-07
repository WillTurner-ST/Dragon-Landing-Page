import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Dragon_Logo.png";

const NavMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent text-white fixed w-full z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="https://jointhedragon.com/" className="flex items-center space-x-3">
          <img src={Logo} className="h-24" alt="Snapdragon Hemp" />
        </a>

        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:w-auto">
          <ul className="font-bold flex space-x-8">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleMenuDropdown}
                className="hover:text-gray-400 focus:outline-none"
              >
                <p>Menu</p>
              </button>
              {isMenuOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-black border border-SnapGreen rounded-lg shadow-lg">
                  <li>
                    <Link
                      to="/menu/east-brainerd"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      East Brainerd Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/menu/broad-street"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Broad Street Menu
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/events" className="hover:text-gray-400">
                Events
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gray-400">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/locations" className="hover:text-gray-400">
                Locations
              </Link>
            </li>
            <li>
              <a
                href="https://www.snapdragonhemp.com/guest-release/"
                className="hover:text-gray-400"
              >
                Waiver
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <ul className="font-bold flex flex-col p-4 space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={toggleMenuDropdown}
                className="hover:text-gray-400 focus:outline-none"
              >
                <p>Menu</p>
              </button>
              {isMenuOpen && (
                <ul className="mt-2 bg-black border border-SnapGreen rounded-lg shadow-lg">
                  <li>
                    <Link
                      to="/menu/east-brainerd"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      East Brainerd Menu
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/menu/broad-street"
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      Broad Street Menu
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/events" className="hover:text-gray-400">
                Events
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gray-400">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/locations" className="hover:text-gray-400">
                Locations
              </Link>
            </li>
            <li>
              <a
                href="https://www.snapdragonhemp.com/guest-release/"
                className="hover:text-gray-400"
              >
                Waiver
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavMain;
