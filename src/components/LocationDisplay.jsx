import React, { useState } from 'react';

const LocationDisplay = ({ locationName }) => {
  return (
    <div className="w-full flex px-6 bg-transparent text-black rounded-lg shadow-lg z-50">
      <p className="text-lg font-bold">{locationName}</p>
    </div>
  );
};

export default LocationDisplay;
