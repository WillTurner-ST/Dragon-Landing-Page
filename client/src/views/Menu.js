import React, { useEffect, useRef } from "react"; // Import useRef
import DabMenu from "../components/DabMenu";
import NavMain from "../components/NavMain";
import Footer from "../components/Footer";
import DrinkMenu from "../components/DrinkMenu";

const Menu = () => {
  // Create refs for each menu section
  const dabMenuRef = useRef(null);
  const drinkMenuRef = useRef(null);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Define a common offset based on your fixed navigation bar height (pt-52 is ~208px) plus some extra for the gap
  const fixedNavHeight = 208; // Equivalent to Tailwind's pt-52 (52 * 4px)
  const additionalGap = 20;  // Extra space for the desired gap
  const scrollOffset = fixedNavHeight + additionalGap; // Total offset to apply

  // Function to scroll to a specific section with an optional offset
  const scrollToSection = (ref) => {
    if (ref.current) {
      // Get the element's position relative to the viewport
      const elementRect = ref.current.getBoundingClientRect();
      // Calculate the target scroll position (absolute position + current scroll - desired offset)
      // Subtracting the offset makes the scroll stop 'higher' on the page, leaving space.
      const targetY = elementRect.top + window.pageYOffset - scrollOffset;

      window.scrollTo({
        top: targetY,
        behavior: "smooth", // Smooth scroll animation
      });
    }
  };

  return (
    <div>
      <NavMain />

      <div className="pt-52"> {/* Padding to account for fixed nav */}
        <div className='mx-auto text-center text-gray-200 mb-8'>
          <h1 className='text-5xl mb-6'>Dragon Hour</h1>
          <p className='text-lg font-normal text-gray-200'>Everyday from 4:00PM to 5:00PM</p>
          <p className='text-lg font-normal text-gray-200'>2x loyalty points</p>
          <p className='text-lg font-normal text-gray-200'>Piece rental waived for dabs</p>
        </div>
        {/* Filter Buttons */}
        {/* Divider Line */}
        <div className="border-t border-SnapGreen w-1/4 mx-auto my-8"></div>

<div className="flex flex-row justify-center items-center gap-2 px-4 mb-6 overflow-x-auto">
      <h4
        onClick={() => scrollToSection(dabMenuRef)}
        className="cursor-pointer text-white 9 transform transition duration-200 hover:scale-110"
      >
        DABS
      </h4>
      {/* This span remains as it's just a separator/spacer */}
      <span className="text-xl md:text-2xl font-light text-white px-2"></span>
      {/* Changed <span> to <h4> for semantic heading */}
      <h4
        onClick={() => scrollToSection(drinkMenuRef)}
        className="cursor-pointer text-white text-4xl sm:text-4xl md:text-4xl transform transition duration-200 hover:scale-110"
      >
        DRINKS
      </h4>
</div>

        {/* Dab Menu Section */}
        <div ref={dabMenuRef} className="pb-10"> {/* Add ref and some padding-bottom */}
          <DabMenu />
        </div>

        {/* Drink Menu Section */}
        <div ref={drinkMenuRef} className="mt-10 pb-10"> {/* Add ref, margin-top, and padding-bottom */}
          <DrinkMenu />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;