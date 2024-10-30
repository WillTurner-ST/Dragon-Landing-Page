import React from "react";
import ContactImg from "../assets/contact.png"

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black py-8 px-4">
      <h2 className="text-4xl mb-10 text-center text-white">Contact Us</h2>

      <div className="bg-black text-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row p-6 border border-SnapGreen">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={ContactImg}// Replace with your image URL
            alt="Contact Us"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-6 flex flex-col justify-center">
          <h2 className="text-3xl mb-4">Get in Touch</h2>

          <p className="text-lg mb-2 font-bold">
            <span className="font-bold">Location:</span> 508 Broad St, Chattanooga, TN 37402
          </p>

          <p className="text-lg mb-2 font-bold">
            <span className="font-bold">Phone:</span>{" "}
            <a href="tel:4235213977" className="text-white hover:underline">
            (423) 954-0710
            </a>
          </p>

          <p className="text-lg mb-2 font-bold">
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:thedragonsroast@snapdragonhemp.com"
              className="text-white hover:underline"
            >
              thedragonsroast@snapdragonhemp.com
            </a>
          </p>

          <p className="text-lg mb-2 font-bold">
            <span className="font-bold">Follow Us:</span>
            <span className="flex mt-2 space-x-4">
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Instagram
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
