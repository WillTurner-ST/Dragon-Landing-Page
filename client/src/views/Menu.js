import React from "react";
import DabMenu from "../components/DabMenu";
import NavMain from "../components/NavMain";
import Footer from "../components/Footer";
import DrinkMenu from "../components/DrinkMenu";
import { useEffect } from "react";

const Menu = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavMain />
      <div className="pt-52">
        <DabMenu />
        <div className="mt-10">
          <DrinkMenu />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
