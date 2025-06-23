import React from 'react';

/**
 * A reusable popup (modal) component.
 *
 * @param {object} props - The component's props.
 * @param {boolean} props.isVisible - Controls whether the popup is visible or not.
 * @param {function} props.onClose - The function to call when the popup should be closed.
 * @param {React.ReactNode} props.children - The content to be displayed inside the popup.
 * @returns {React.ReactElement|null} The rendered popup component or null if not visible.
 */
function Waiver_Popup({ isVisible, onClose, children }) {
  // If the popup is not supposed to be visible, we render nothing (null).
  if (!isVisible) {
    return null;
  }

  // This function handles clicks on the dark background overlay.
  // It checks if the click was on the overlay itself (and not the content)
  // before calling the onClose function.
  const handleOverlayClick = (e) => {
    if (e.target.id === 'popup-overlay') {
      onClose();
    }
  };

  return (
    // The main container for the popup, which includes the semi-transparent overlay.
    // It's fixed to cover the entire screen and uses flexbox to center the content.
    <div
      id="popup-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out animate-fade-in"
    >
      {/* The actual popup content container. It has a white background,
          rounded corners, and a shadow. The animations make it scale in smoothly. */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 m-4 max-w-md w-full text-center transform transition-transform duration-300 ease-in-out animate-scale-in">
        {/* The `children` prop allows you to pass any custom JSX content
            into the popup from the parent component. */}
        {children}
      </div>

      {/* Embedded CSS for the keyframe animations. This makes the component self-contained. */}
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes scale-in {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
        }
        .animate-scale-in {
            animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Waiver_Popup;