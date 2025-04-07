import React, { useState } from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import L from "leaflet"; // Import Leaflet for custom marker icons
import DowntownImage from "../assets/Broad_Street.png";
import UptownImage from "../assets/East_Brainerd.png";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

// Configure custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41], // Default size
  iconAnchor: [12, 41], // Anchor point
  popupAnchor: [1, -34], // Popup position
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41] // Shadow size
});

const Location = () => {
  const [activeTab, setActiveTab] = useState("details");

  const lounges = [
    {
      id: 1,
      name: "The Dragon Lounge - Broad Street",
      address: "508 Broad St, Chattanooga, TN 37402",
      coordinates: [35.05065299238722, -85.31039832638582],
      image: DowntownImage,
      description: "The Dragon on Broad Street is a unique Dab & Drink Lounge in the heart of downtown, offering premium cannabis-related products and craft drinks in a stylish, relaxed setting. With a cozy indoor lounge, it’s the perfect spot to unwind and enjoy the vibe.",
      phone: "(423) 555-1234",
      hours: {
        weekdays: "11:00 AM - 9:00 PM",
        saturday: "12:00 PM - 9:00 PM",
        sunday: "Closed"
      },
      menuLink: "/menu/broad-street"
    },
    {
      id: 2,
      name: "The Dragon - East Brainerd",
      address: "7655 E Brainerd Rd, Chattanooga, TN 37421",
      coordinates: [35.01197267821825, -85.15634644692537],
      image: UptownImage,
      description: "The Dragon is East Brainerd’s premier Dab & Drink Lounge, offering a unique blend of cannabis-related products, craft drinks, and a laid-back atmosphere. With a convenient drive-thru, a stylish indoor lounge, and scenic outdoor seating, The Dragon is the perfect spot to unwind. Enjoy the vibe surrounded by hand-painted custom walls that make every visit an experience.",
      phone: "(423) 555-5678",
      hours: {
        weekdays: "11:00 AM - 9:00 PM",
        saturday: "12:00 PM - 9:00 PM",
        sunday: "Closed"
      },
      menuLink: "/menu/east-brainerd"
    }
  ];

  const dabBars = [
    {
      id: 3,
      name: "Dragon Dab Bar - East Ridge 1",
      address: "6210 Ringgold Rd, East Ridge, TN 37412",
      coordinates: [34.989450432045324, -85.21252975854989],
      phone: "(423) 555-7890",
      hours: {
        weekdays: "12:00 PM - 8:00 PM",
        saturday: "12:00 PM - 8:00 PM",
        sunday: "12:00PM - 8:00 PM"
      }
    },
    {
      id: 4,
      name: "Dragon Dab Bar - East Ridge 2",
      address: "3909 Ringgold Rd Suite B, East Ridge, TN 37412",
      coordinates: [34.99841588728059, -85.2538859986546],
      phone: "(423) 555-3456",
      hours: {
        weekdays: "12:00 PM - 7:15 PM",
        saturday: "12:00 PM - 7:15 PM",
        sunday: "12:00PM - 6:30 PM"
      }
    },
    {
      id: 5,
      name: "Dragon Dab Bar - Red Bank",
      address: "2102 Dayton Blvd, Chattanooga, TN 37415",
      coordinates: [35.091660112812015, -85.30980317818779],
      phone: "(423) 555-6789",
      hours: {
        weekdays: "12:00 PM - 8:00 PM",
        saturday: "12:00 PM - 8:00 PM",
        sunday: "12:00PM - 6:30 PM"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden border-b border-SnapGreen/30">
        <div className="absolute inset-0">
          <img 
            src={lounges[0].image} 
            className="h-full w-full object-cover opacity-40"
            alt="Location background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative flex h-full flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl font-light text-white md:text-6xl">Our Locations</h1>
          <p className="mt-4 text-xl text-white font-bold">Experience the Alpacas like never before</p>
        </motion.div>
      </div>

      {/* Lounges Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-5xl text-white text-center">Lounges</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {lounges.map((lounge) => (
            <motion.div 
              key={lounge.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="rounded-2xl border border-SnapGreen/90 bg-gradient-to-br from-black via-black/80 to-black/60"
            >
              <div className="p-8">
                <div className="mb-8 flex items-center gap-4 border-b border-SnapGreen/20 pb-6">
                  <FiMapPin className="h-8 w-8 text-SnapGreen" />
                  <div>
                    <h2 className="text-2xl text-white">{lounge.name}</h2>
                    <p className="text-gray-300 font-bold">{lounge.address}</p>
                  </div>
                </div>
                <p className="text-white font-bold">{lounge.description}</p>
                <div className="mt-6 flex items-center gap-2 text-gray-300 font-bold">
                  <FiPhone className="h-5 w-5" />
                  <a href={`tel:${lounge.phone}`} className="hover:text-green-600">
                    {lounge.phone}
                  </a>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 font-bold">
                  <div className="space-y-2">
                    <p className="text-gray-200">Monday - Friday</p>
                    <p className="text-white">{lounge.hours.weekdays}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-200">Saturday</p>
                    <p className="text-white">{lounge.hours.saturday}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-200">Sunday</p>
                    <p className="text-white">{lounge.hours.sunday}</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={lounge.menuLink}
                    className="flex items-center gap-2 rounded-lg bg-SnapGreen px-6 py-3 font-bold text-white transition-all hover:bg-green-900"
                  >
                    View Menu
                  </a>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(lounge.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border font-bold border-SnapGreen px-6 py-3 text-white transition-all hover:border-green-400 hover:text-green-400"
                  >
                    <FiMapPin className="h-5 w-5 font-bold" />
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dab Bars Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-5xl text-center text-white">Dab Bars</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {dabBars.map((bar) => (
            <motion.div 
              key={bar.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="rounded-2xl border border-SnapGreen/90 bg-gradient-to-br from-black via-black/80 to-black/60"
            >
              <div className="p-8">
                <div className="mb-8 flex items-center gap-4 border-b border-SnapGreen/20 pb-6">
                  <FiMapPin className="h-8 w-8 text-SnapGreen" />
                  <div>
                    <h2 className="text-2xl text-white">{bar.name}</h2>
                    <p className="text-gray-300 font-bold">{bar.address}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-gray-300 font-bold">
                  <FiPhone className="h-5 w-5" />
                  <a href={`tel:${bar.phone}`} className="hover:text-green-600">
                    {bar.phone}
                  </a>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 font-bold">
                  <div className="space-y-2">
                    <p className="text-gray-200">Monday - Friday</p>
                    <p className="text-white">{bar.hours.weekdays}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-200">Saturday</p>
                    <p className="text-white">{bar.hours.saturday}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-200">Sunday</p>
                    <p className="text-white">{bar.hours.sunday}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(bar.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border font-bold border-SnapGreen px-6 py-3 text-white transition-all hover:border-green-400 hover:text-green-400"
                  >
                    <FiMapPin className="h-5 w-5 font-bold" />
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;