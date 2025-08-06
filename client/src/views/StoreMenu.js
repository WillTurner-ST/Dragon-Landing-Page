import React from "react";
import StoreDabMenu from "../components/StoreDabMenu";
import NavMain from "../components/NavMain";
import Footer from "../components/Footer";
import { useEffect } from "react";
import CTA from "../components/CTA"; // Importing CTA component if needed

const StoreMenu = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavMain />
      <div className="pt-52">
        <StoreDabMenu />
        <CTA/>
      </div>
      <Footer />
    </div>
  );
};

export default StoreMenu;
