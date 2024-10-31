import React, { useState } from 'react';
import Grid1 from '../assets/GridImages/Grid_1.jpg';
import Grid2 from '../assets/GridImages/Grid_2.jpg';
import Grid3 from '../assets/GridImages/Grid_3.jpg';
import Grid4 from '../assets/GridImages/Grid_4.jpg';
import Grid5 from '../assets/GridImages/Grid_5.jpg';
import Grid6 from '../assets/GridImages/Grid_6.jpg';
import Grid7 from '../assets/GridImages/Grid_7.jpg';
import Grid8 from '../assets/GridImages/Grid_8.jpg';
import Grid9 from '../assets/GridImages/Grid_9.jpg';
import Grid10 from '../assets/GridImages/Grid_10.jpg';
import Grid11 from '../assets/GridImages/Grid_11.jpg';
import Grid12 from '../assets/GridImages/Grid_12.jpg';


// Continue importing images as needed

const GalleryGrid = () => {
  const images = [Grid1, Grid2, Grid3, Grid4, Grid5, Grid6, Grid7, Grid8, Grid9, Grid10, Grid11, Grid12];
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeLightbox = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 300); // Duration of the fade-out effect
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
      {/* Title */}
      <h2 className="text-5xl md:text-5xl text-center text-white mb-8">Gallery</h2>
      
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 ${
              index % 2 === 0 ? 'mt-4' : 'mb-4'
            }`}
          >
            <img
              onClick={() => setSelectedImage(image)}
              className="h-auto w-full object-cover cursor-pointer"
              style={{
                height: `${150 + (index % 3) * 50}px`,
              }}
              src={image}
              alt='Past Events'
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-opacity duration-300 ${
            isClosing ? 'fade-out' : 'fade-in'
          }`}
          onClick={closeLightbox}
        >
          <div className="relative flex items-center justify-center p-4"> {/* Flexbox to center the image */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer z-60"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-[80%] max-h-[80%] rounded-lg shadow-lg transition-none" // Adjusted max-width and max-height
              style={{ pointerEvents: 'none' }} // Prevents hover effect on the enlarged image
            />
          </div>
        </div>
      )}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          animation: fadeIn 0.5s forwards;
        }
        
        .fade-out {
          opacity: 1;
          animation: fadeOut 0.5s forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryGrid;
