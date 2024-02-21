import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Dragon_Logo.png";

const NavMain = ({ aboutRef }) => {
  const scrollToBottom = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToAbout = () => {
    window.scrollTo({
      left: 0,
      top: aboutRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-black border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://snapdragonhemp.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} className="h-20" alt="Snapdragon Hemp" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-black dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-10 h-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-bold flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
            <li>
              <Link to="/">
              <button type="button" className="focus:outline-none text-white bg-transparent hover:bg-transparent focus:ring-1 focus:ring-SnapGreen font-bold rounded-lg text-md px-1 py-2.5 me-1 mb-1">Home</button>
              </Link>
            </li>
            <li>
              <Link onClick={scrollToAbout}>
              <button type="button" class="focus:outline-none text-white bg-transparent  focus:ring-1 focus:ring-SnapGreen font-bold rounded-lg text-md px-1 py-2.5 me-2 mb-2  hover:bg-transparent font-bold">About</button>
              </Link>
            </li>
            <li>
              <Link to="/menu">
              <button type="button" class="focus:outline-none text-white bg-transparent  focus:ring-1 focus:ring-SnapGreen font-bold rounded-lg text-md px-1 py-2.5 me-2 mb-2  hover:bg-transparent font-bold">Menu</button>
              </Link>
            </li>
            <li>
              <Link onClick={scrollToBottom}>
              <button type="button" class="focus:outline-none text-white bg-transparent  focus:ring-1 focus:ring-SnapGreen font-bold rounded-lg text-md px-1 py-2.5 me-2 mb-2  hover:bg-transparent font-bold">Contact</button>
              </Link>
            </li>
            <li>
              <Link to='https://www.snapdragonhemp.com/guest-release/'>
              <button type="button" class="focus:outline-none text-white bg-transparent  focus:ring-1 focus:ring-SnapGreen font-bold rounded-lg text-md px-1 py-2.5 me-2 mb-2  hover:bg-transparent font-bold">Waiver</button>
              </Link>
            </li>
            <li className="flex items-center">
              <a
                href="https://www.facebook.com/profile.php?id=61554470425520&mibextid=kFxxJD"
                className="text-white hover:text-white dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://www.instagram.com/thedragonchatt?igsh=amU5d2F4dXp5cjM5"
                className="text-white hover:text-white dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMain;
