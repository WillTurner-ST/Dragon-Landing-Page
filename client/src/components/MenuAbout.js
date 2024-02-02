import React from 'react'

const MenuAbout = () => {
  return (
    <div className="bg-black text-gray-200 p-4 md:p-8 animate__animated animate__fadeIn animate__delay-1s">
      <div className="container mx-auto flex justify-center flex-col items-center">
        <h2 className="text-4xl mb-4 text-center mt-8">About Our Lounge</h2>
        <p className="mb-4 text-center text-lg font-bold">
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
        <h2 className="text-3xl mb-2 text-center mt-5">Location</h2>
        <p className="text-center text-lg font-bold">
          508 Broad Street, Chattanooga TN 37451
        </p>
        <h2 className="text-3xl mb-2 text-center mt-5">Hours</h2>
        <p className="text-center text-lg font-bold">
          Sunday - Thursday: 12PM - 10PM
        </p>
        <p className="text-center text-lg font-bold">
          Friday - Saturday: 12PM - 12AM
        </p>
      </div>
    </div>
  )
}

export default MenuAbout