import React from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import DowntownImage from "../assets/Broad_Street.png";
import UptownImage from "../assets/East_Brainerd.png";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

// Function to group hours and handle consecutive days
const groupHours = (hours) => {
  const groupedHours = [];
  let currentGroup = [];
  let previousTime = null;
  let previousDay = null;

  const keys = Object.keys(hours);

  keys.forEach((day, idx) => {
    const time = hours[day];

    // Check if it's a consecutive day with the same time
    if (previousTime === time && (idx === 0 || (idx === previousDay + 1))) {
      currentGroup.push(day);
    } else {
      // If it's a new time or non-consecutive day, push the previous group
      if (currentGroup.length) {
        groupedHours.push({ days: currentGroup, time: previousTime });
      }
      // Start a new group
      currentGroup = [day];
      previousTime = time;
    }

    previousDay = idx;
  });

  // Push the last group
  if (currentGroup.length) {
    groupedHours.push({ days: currentGroup, time: previousTime });
  }

  // Transform days into a range (e.g., "Monday - Wednesday") for consecutive days
  groupedHours.forEach((group) => {
    if (group.days.length > 1) {
      const firstDay = group.days[0];
      const lastDay = group.days[group.days.length - 1];
      group.displayDays = `${firstDay} - ${lastDay}`;
    } else {
      group.displayDays = group.days[0];
    }
  });

  return groupedHours;
};

const Location = () => {
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
        sunday: "12:00 PM - 10:00 PM",
        monday: "12:00 PM - 10:00 PM",
        tuesday: "12:00 PM - 10:00 PM",
        wednesday: "12:00 PM - 10:00 PM",
        thursday: "12:00 PM - 10:00 PM",
        friday: "12:00 PM - 12:00 AM",
        saturday: "12:00 PM - 12:00 AM"
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
        sunday: "COMING SOON!",
        monday: "COMING SOON!",
        tuesday: "COMING SOON!",
        wednesday: "COMING SOON!",
        thursday: "COMING SOON!",
        friday: "COMING SOON!",
        saturday: "COMING SOON!"
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
        sunday: "12:00 PM - 6:30 PM",
        monday: "12:00 PM - 8:00 PM",
        tuesday: "12:00 PM - 8:00 PM",
        wednesday: "12:00 PM - 8:00 PM",
        thursday: "12:00 PM - 8:00 PM",
        friday: "12:00 PM - 8:00 PM",
        saturday: "12:00 PM - 8:00 PM"
      }
    },
    {
      id: 4,
      name: "Dragon Dab Bar - East Ridge 2",
      address: "3909 Ringgold Rd, East Ridge, TN 37412",
      coordinates: [34.99841588728059, -85.2538859986546],
      phone: "(423) 555-3456",
      hours: {
        sunday: "12:00 PM - 6:30 PM",
        monday: "12:00 PM - 7:15 PM",
        tuesday: "12:00 PM - 7:15 PM",
        wednesday: "12:00 PM - 7:15 PM",
        thursday: "12:00 PM - 7:15 PM",
        friday: "12:00 PM - 7:15 PM",
        saturday: "12:00 PM - 7:15 PM"
      }
    },
    {
      id: 5,
      name: "Dragon Dab Bar - Red Bank",
      address: "2102 Dayton Blvd, Chattanooga, TN 37415",
      coordinates: [35.091660112812015, -85.30980317818779],
      phone: "(423) 555-6789",
      hours: {
        sunday: "12:00 PM - 6:30 PM",
        monday: "12:00 PM - 8:00 PM",
        tuesday: "12:00 PM - 8:00 PM",
        wednesday: "12:00 PM - 8:00 PM",
        thursday: "12:00 PM - 8:00 PM",
        friday: "12:00 PM - 8:00 PM",
        saturday: "12:00 PM - 8:00 PM"
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
                  {groupHours(lounge.hours).map((group, idx) => (
                    <div key={idx} className="space-y-2">
                      <p className="text-gray-200 capitalize">{group.displayDays}</p>
                      <p className="text-white">{group.time}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
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
        <h2 className="mb-8 text-5xl text-white text-center">Dab Bars</h2>
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
                <div className="mt-6 grid grid-cols-2 gap-4 font-bold">
                  {groupHours(bar.hours).map((group, idx) => (
                    <div key={idx} className="space-y-2">
                      <p className="text-gray-200 capitalize">{group.displayDays}</p>
                      <p className="text-white">{group.time}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
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
