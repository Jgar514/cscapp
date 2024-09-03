import React from 'react';

const DetailOne = ({ location }) => {
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

  return (
    <div className='p-2'>
      <h1 className="text-2xl font-bold mb-4">{location.name}</h1>

      {/* Render the image if imageSrc is available */}
      {location.imageSrc && (
        <div className=' flex items-center justify-center w-full'>
          <img
            src={location.imageSrc}
            alt={`${location.name} image`}
            className="mb-4 w-1/2 h-auto object-contain"
          />
        </div>
      )}

      {/* Render the description with proper formatting */}
      <div className="mb-4">
        {formatDescription(location.description)}
      </div>

      {/* Render the link if available */}
      {location.link && (
        <a
          href={location.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Visit Website
        </a>
      )}
    </div>
  );
};

export default DetailOne;
