import React from "react";
import CalendarEvents from "../components/CalendarEvents";
import NavMain from "../components/NavMain";
import Footer from "../components/Footer";
const EventsDT = () => {
  return (
    <div>
      <NavMain />
      <div className="pt-52">
        <CalendarEvents />
      </div>
      <Footer />
    </div>
  );
};

export default EventsDT;
