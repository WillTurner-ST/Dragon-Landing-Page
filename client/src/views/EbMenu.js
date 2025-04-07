import React from "react";
//import EBDrinkMenu from "../components/EBDrinkMenu";
//import EBDabMenu from "../components/EBDabMenu";
import NavMain from "../components/NavMain";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";
import GalleryGrid from "../components/GalleryGrid";

const EbMenu = () => {
  return (
    <div>
      <NavMain />
      <div className="pt-52">
        <ComingSoon />
        <GalleryGrid />
        {/* Uncomment the following lines to display the menus */}    
        {/* <EBDrinkMenu/> */}
        {/* <EBDabMenu/> */}
        <Footer />
      </div>
    </div>
  );
};

export default EbMenu;
