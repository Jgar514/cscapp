import React, { useState } from 'react';
import { IoIosSearch, IoIosClose } from 'react-icons/io';
import LocationDisplay from './LocationDisplay';

const LocationInfo = ({ selectedLocation, backgroundColor, setShowDetail, setSelectedLocation, resetAppState }) => {
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);

  const handleToggleDetail = () => {
    setIsDetailExpanded(prev => !prev);
    setShowDetail(prev => !prev);
  };

  const handleClearLocation = () => {
    resetAppState(); // Call the reset function
    setIsDetailExpanded(false)
  };

  return (
    <div className={`example w-full md:w-full h-full md:h-full flex flex-col items-center md:items-start md:justify-center justify-start `} style={{ backgroundColor }}>
      <div className="w-full h-1/2 md:h-3/4  justify-center items-start md:items-center flex ">
        <div className="h-full md:h-2/4 border-2 border-black rounded-l-md flex w-5/6 md:w-2/3 bg-white">
          <div className="flex-grow">
            {selectedLocation && <LocationDisplay locationName={selectedLocation} />}
          </div>
          <div
            className="border-2 border-black h-full flex items-center p-2 bg-black cursor-pointer"
            onClick={selectedLocation ? handleClearLocation : null}
          >
            {selectedLocation ? (
              <IoIosClose className="text-3xl text-white" />
            ) : (
              <IoIosSearch className="text-3xl text-white" />
            )}
          </div>
        </div>
      </div>
      <div className=' h-1/2 md:h-1/4 w-full'>
        {selectedLocation && (
          <div className="w-full h-full md:w-full flex flex-grow justify-start md:justify-start  md:pl-20 pt-2 md:pt-0">
            <div className="bg-white border-black border-2 rounded-t-md h-full w-fit px-8 md:px-6 cursor-pointer" onClick={handleToggleDetail}>
              <div>{isDetailExpanded ? '- Less Info' : '- More Info'}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationInfo;
