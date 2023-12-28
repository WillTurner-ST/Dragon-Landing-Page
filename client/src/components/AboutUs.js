import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-black text-gray-200 p-4 md:p-8">
      <div className="container mx-auto flex justify-center flex-col items-center">
        <h2 className="text-4xl mb-4 text-center">About Our Lounge</h2>
        <p className="mb-4 text-center text-lg">
          Welcome to The Dragon, Snapdragon Cannabis Co's innovative
          420-friendly lounge in Chattanooga. Redefining the cannabis
          experience, The Dragon offers a hangover-free journey with unique
          RINS9 refreshments, an array of seasonal Canna-drafts, and expertly
          mixed canna-cocktails. More than a bar, it's a destination for diverse
          cannabis experiences, from dabbing options with exclusive concentrates
          to a selection of flower, edibles, and popular treats. Satisfy your
          curiosity and your munchies with our un-dosed samples before diving
          into our dosed products. Join us at The Dragon for a rediscovery of
          cannabis in a community-focused, euphoric setting.
          {/* More description here */}
        </p>
        <h3 className="text-3xl font-bold mb-2 text-center">
          Location and Hours
        </h3>
        <p className="text-center text-lg">
          At the heart of our lounge is a commitment to providing a relaxing,
          enjoyable atmosphere...
          {/* Additional philosophy details */}
        </p>
        {/* Include any other sections as needed */}
      </div>
    </div>
  );
};

export default AboutUs;
