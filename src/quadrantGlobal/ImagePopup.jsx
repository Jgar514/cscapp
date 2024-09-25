import React from 'react';
import { IoIosClose } from 'react-icons/io';

const ImagePopup = ({ show, onClose, imageUrl, altText }) => {
  return (
    // Container for the popup
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } transform transition-all duration-500 ease-in-out pointer-events-none ${show && 'pointer-events-auto'}`}
    >
      {/* Popup content using flexbox layout */}
      <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center max-w-md w-full">

        {/* Flex container for text and close button */}
        <div className="self-end w-full flex justify-between items-center">
          {/* Text on the left */}
          <span className="text-lg font-semibold text-gray-700">
            Who who... sunk their boat?!
          </span>

          {/* Close button on the right */}
          <button
            onClick={onClose}
            className="text-red-500 text-3xl"
          >
            <IoIosClose />
          </button>
        </div>

        {/* Image container */}
        <div className="flex justify-center w-full mt-4">
          <img src={imageUrl} alt={altText} className="rounded-lg max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;
