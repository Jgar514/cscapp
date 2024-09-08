import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import icons from react-icons

const InfoCard = ({ title, imageSrc, website, hours, description, relatedKeywords }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the expanded state of the description
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to toggle the visibility of the hours dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="border p-4 rounded shadow-md">
      {/* Title and Related Keywords */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{title}</h1>

        {/* Related Keywords */}
        {relatedKeywords && relatedKeywords.length > 0 && (
          <div className="text-sm text-gray-600">
            {relatedKeywords.join(', ')}
          </div>
        )}
      </div>

      {/* Image */}
      <img src={imageSrc} alt={title} className="w-full h-auto mb-4" />

      {/* Website */}
      <h2 className="text-lg font-semibold">Website:</h2>
      <p className="text-blue-600 mb-4">
        <a href={website} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
      </p>

      {/* Description */}
      <h2 className="text-lg font-semibold mb-2">Description:</h2>
      <p className={`mb-4 ${isExpanded ? 'block' : 'line-clamp-3'}`}>
        {description}
      </p>
      <button
        className="text-blue-500 hover:underline"
        onClick={toggleDescription}
      >
        {isExpanded ? 'Less' : 'More'}
      </button>

      {/* Hours Dropdown */}
      {hours && hours.length > 0 && (
        <>
          <h2 className="text-lg font-semibold cursor-pointer mt-4 flex items-center" onClick={toggleDropdown}>
            Hours
            <span className="ml-2">
              {isDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
            </span>
          </h2>
          {isDropdownOpen && (
            <ul className="list-disc list-inside ml-4 mt-2">
              {hours.map((hour, index) => (
                <li key={index}>{hour}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default InfoCard;
