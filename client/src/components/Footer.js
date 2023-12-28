import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 border-t-2 border-emerald-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Legal Link */}
        <div className="flex flex-col">
          <a href="/legal" className="mb-4 md:mb-0 text-sm hover:text-gray-300">
            Legal
          </a>
          <a href="/legal" className="mb-4 md:mb-0 text-sm hover:text-gray-300 mt-2">
            Careers
          </a>
        </div>

        {/* Contact Information */}
        <div>
          <p className="text-sm mb-2">© 2024 The Dragon</p>
          <p className="text-sm mb-2"> 508 Broad Street, Chattanooga, TN 37402</p>
          <a
            href="mailto:contact@snapdragonhemp.com"
            className="text-sm hover:text-gray-300"
          >
            info@lounge.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
