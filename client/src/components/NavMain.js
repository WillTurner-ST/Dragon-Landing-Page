import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Dragon_Logo.png";

const NavMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">
        <a
          href="https://snapdragonhemp.com/"
          className="flex items-center space-x-3"
        >
          <img src={Logo} className="h-20" alt="Snapdragon Hemp" />
        </a>

        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full right-0 w-1/4 bg-black z-50 md:flex md:w-auto rounded-b-lg`} // Added rounded-b-lg here
          id="navbar-default"
        >
          <ul className="font-bold flex flex-col p-2 mt-1 space-y-2 md:flex-row md:space-x-8 md:mt-0 md:p-0">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="text-white">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/events" className="text-white">
                Events
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-white">
                Gallery
              </Link>
            </li>
            <li>
              <a
                href="https://www.snapdragonhemp.com/guest-release/"
                className="text-white"
              >
                Waiver
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMain;
