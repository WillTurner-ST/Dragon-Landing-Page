import { useState } from "react";
import img1 from "../assets/2.png";
import img2 from "../assets/3.png";

export default function EBDrinkMenu() {
  const [openImage, setOpenImage] = useState(null);

  const handleOpen = (src) => setOpenImage(src);
  const handleClose = () => setOpenImage(null);

  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-screen-lg px-4 py-8 space-y-8">
        <img
          src={img1}
          alt="Drink Menu 1"
          className="w-full h-auto object-contain rounded-lg cursor-pointer"
          onClick={() => handleOpen(img1)}
        />
        <img
          src={img2}
          alt="Drink Menu 2"
          className="w-full h-auto object-contain rounded-lg cursor-pointer"
          onClick={() => handleOpen(img2)}
        />
      </div>

      {/* Modal */}
      {openImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white text-2xl z-50"
          >
            ✕
          </button>
          <img
            src={openImage}
            alt="Enlarged Menu"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
