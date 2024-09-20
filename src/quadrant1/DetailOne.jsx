import React, { useState } from 'react';


const DetailOne = ({ location }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!location) {
    return <div>No location selected</div>;
  }

  // Function to convert new lines to <br> tags for proper formatting
  const formatDescription = (text) => {
    if (!text) return 'No description available';
    return text.split('\n').map((item, index) => (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    ));
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Ensure shortDescription is safely created only when needed
  const shortDescription = location.description
    ? location.description.split(' ').slice(0, 20).join(' ') + '...'
    : '';

  const isDescriptionLongEnough = location.description && location.description.split(' ').length > 20;

  return (
    <div className='p-2 h-full w-full overflow-y-auto'>
      <h1 className="text-2xl font-bold mb-4 md:p-4">{location.name}</h1>

      {/* Render the image if imageSrc is available */}
      {location.imageSrc && (
        <div className='flex items-center justify-center w-full'>
          <img
            src={location.imageSrc}
            alt={`${location.name} image`}
            className="mb-4 w-1/2 h-auto object-contain"
          />
        </div>
      )}

      {/* Render the link if available */}
      <div className='p-4'>
        {location.website && (
          <a
            href={location.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline block mt-4"
          >
            Visit Website
          </a>
        )}

        {/* Render the description with proper formatting */}
        <div className="mb-4">
          {isDescriptionLongEnough && !isExpanded
            ? formatDescription(shortDescription)
            : formatDescription(location.description)}
        </div>

        {/* Toggle button only if the description is long enough */}
        {isDescriptionLongEnough && (
          <button
            onClick={toggleExpand}
            className="text-blue-500 underline cursor-pointer"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>

    </div>
  );
};

export default DetailOne;
