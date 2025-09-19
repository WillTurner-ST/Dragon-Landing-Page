import React from "react";
import CalendarEventsEB from "../components/CalenderEventsEB.js";
import NavMain from "../components/NavMain";
import Footer from "../components/Footer";
const EventsEB = () => {
  return (
    <div>
      <NavMain />
      <div className="pt-52">
        <CalendarEventsEB />
      </div>
      <Footer />
    </div>
  );
};

export default EventsEB;
