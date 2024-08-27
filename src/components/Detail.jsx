// src/DetailPage.jsx
import React from 'react';
import { useState } from 'react';

const DetailPage = ({ onClose, showDetail, selectedLocation }) => {
  if (!selectedLocation) {
    return null; // Return nothing if no location is selected
  }

  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded state of the description
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`fixed top-0 right-0 w-full md:w-1/2 h-full bg-white z-40 pt-8 transform transition-transform ease-in-out cursor-default ${showDetail ? 'translate-y-0 duration-1000' : '-translate-y-full duration-1000'
        }`}
    >



      <div className="bg-white pt-20 px-6 rounded-lg shadow-lg w-full h-full overflow-y-auto flex flex-col">
        <div className='w-full  flex flex-row p-4'>
          <h1 className="text-2xl font-bold">{selectedLocation.name}</h1>
        </div>
        {/* Image */}
        <div className="flex justify-center my-4">
          <img
            src={selectedLocation.imageSrc}
            alt={selectedLocation.name}
            className="w-1/2 h-auto rounded-lg shadow-md"
          />
        </div>
        <h2 className="text-lg font-semibold">Website:</h2>
        <p className="text-blue-600 mb-4">
          <a href={selectedLocation.website} target="_blank" rel="noopener noreferrer">
            {selectedLocation.website}
          </a>
        </p>
        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Description:</h2>
          <div className={`mb-4 ${isExpanded ? 'block' : 'line-clamp-3'}`}>
            {selectedLocation.description.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          <button
            className="text-blue-500 hover:underline"
            onClick={toggleDescription}
          >
            {isExpanded ? 'Less' : 'More'}
          </button>
        </div>



      </div>
    </div>
  );
};

export default DetailPage;
