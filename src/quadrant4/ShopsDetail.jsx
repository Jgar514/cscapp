import React, { useState } from 'react';
// Import your data
import locationsData from '../data/locationsData'; // Adjust the path as necessary

const ShopsDetail = () => {
  const [openSections, setOpenSections] = useState({});

  // Find the specific location for Cape Shopping Center
  const capeShoppingCenter = locationsData.find(location => location.name === 'Cape Shopping Center');

  if (!capeShoppingCenter) {
    return <p>Location not found.</p>;
  }

  const toggleSection = (index) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [index]: !prevOpenSections[index],
    }));
  };

  // Extracting shop details from the data
  const shopDetails = capeShoppingCenter.description.trim().split('\n').filter(shop => shop);

  // Define ranges for the three columns
  const firstColumn = shopDetails.slice(0, 11);
  const secondColumn = shopDetails.slice(11, 15);
  const thirdColumn = shopDetails.slice(15)

  return (
    <div className="shops-detail h-full overflow-y-auto">
      <div className='flex flex-col w-full'>
        <div className='h-10 bg-gray-100'></div>
        <div>
          <h2 className="text-xl font-bold mb-0 p-2">{capeShoppingCenter.name}</h2>
        </div>
        <div className='p-0'>
          <p className="mb-0">
            {/* dont think this does anything */}
            {capeShoppingCenter.description.split('\n')[0]}
          </p>
        </div>
      </div>

      <div className="flex py-2">
        {/* First Column */}
        <div className="w-1/3 pl-2">
          {firstColumn.map((shop, index) => (
            <div key={index} className="mb-2">
              <button
                className="text-left w-full p-2 border border-gray-300 rounded bg-gray-100 hover:bg-gray-200"
                onClick={() => toggleSection(index)}
              >
                {shop.trim()}
              </button>
              {openSections[index] && (
                <div className="p-2 pl-4 border-l-2 border-gray-400 mt-1 bg-white">
                  <p>Details about {shop.trim()} will go here.</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Second Column (Items 12-15) */}
        <div className="w-1/3 px-2">
          {secondColumn.map((shop, index) => (
            <div key={index + 11} className="mb-2">
              <button
                className="text-left w-full p-2 border border-gray-300 rounded bg-gray-100 hover:bg-gray-200"
                onClick={() => toggleSection(index + 12)}
              >
                {shop.trim()}
              </button>
              {openSections[index + 11] && (
                <div className="p-2 pl-4 border-l-2 border-gray-400 mt-1 bg-white">
                  <p>Details about {shop.trim()} will go here.</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Third Column */}
        <div className="w-1/3 pr-2">
          {thirdColumn.map((shop, index) => (
            <div key={index + 16} className="mb-2">
              <button
                className="text-left w-full p-2 border border-gray-300 rounded bg-gray-100 hover:bg-gray-200"
                onClick={() => toggleSection(index + 16)}
              >
                {shop.trim()}
              </button>
              {openSections[index + 16] && (
                <div className="p-2 pl-4 border-l-2 border-gray-400 mt-1 bg-white">
                  <p>Details about {shop.trim()} will go here.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopsDetail;
