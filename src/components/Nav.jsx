import React from 'react';
import WeatherCard from "./WeatherCard";
import { IoIosSearch, IoIosClose } from 'react-icons/io';

const Nav = ({ backgroundColor, locationName, resetAppState, handleMoreInfoClick, showMoreInfo }) => {

  const handleReset = () => {
    resetAppState(); // Reset the app state and close the dropdown
  };

  return (
    <div className='w-full h-1/6 md:h-[100px] flex flex-col md:flex-col md:items-start md:justify-start justify-between py-0 z-50 bg-white'>
      <div className='w-full flex flex-row flex-wrap h-full'>
        {/* left side */}
        <div className='flex flex-row w-full md:w-1/2 md:gap-4 h-1/2 md:h-3/4 items-center md:items-center justify-start md:justify-start px-2 md:px-0 md:pl-4 bg-white'>
          <div className='text-2xl md:text-4xl font-playfair font-bold text-black flex md:items-center h-fit md:h-full w-full md:w-1/2 justify-center px-4 cursor-pointer'
            onClick={handleReset}>
            Cape St. Claire
          </div>
          <div className='text-xs md:text-4xl font-mono font-bold h-fit text-black flex md:items-center justify-center w-full md:w-fit'>
            <WeatherCard />
          </div>
        </div>

        <div
          className='w-1/2 px-2 md:h-3/4 flex justify-center items-center'
          style={{ backgroundColor: backgroundColor || 'white' }} // Default to white if no color is set
        >

          <div className='bg-white w-3/4 h-3/5 flex flex-row justify-start items-center border-2 border-black rounded-lg'>
            <div className='w-1/6 h-full flex bg-gray-100 text-white justify-center text-2xl   items-center'>
              {locationName ? (
                <div className='w-2/4 h-auto bg-gray-100 flex justify-center items-center font-bold text-3xl text-red-800 border-2 border-gray-100 rounded-full shadow shadow-black'>
                  <IoIosClose onClick={handleReset} />
                </div>
              ) : (
                <div className='w-2/4 h-auto bg-gray-100 flex justify-center items-center font-bold text-3xl text-gray-800 border-2 border-gray-100 rounded-full shadow shadow-black'>
                  <IoIosSearch onClick={handleMoreInfoClick} />
                </div>
              )}
            </div>
            <div className='w-3/4 h-full flex items-center pl-4'>
              <span className='text-xl font-bold'>{locationName}</span>
            </div>

          </div>
        </div>

        {/* Conditional Dropdown Button */}
        {locationName && (
          <div
            className={`w-full h-1/4 flex justify-end items-center transition-all duration-300 bg-white`}
            style={{ backgroundColor: showMoreInfo ? (backgroundColor || 'white') : 'white' }} // Use backgroundColor or default to blue
          >
            <div className='w-1/2 bg-white h-full flex flex-col'>
              <div className='h-1/2 w-full'>
              </div>
              <div className='h-1/2 w-full ' style={{ backgroundColor: showMoreInfo ? (backgroundColor || 'blue') : 'white' }}>
              </div>
            </div>
            <div
              className='text-xl font-bold cursor-pointer w-1/2 justify-start'
              style={{ backgroundColor: showMoreInfo ? (backgroundColor || 'blue') : 'white' }} // Use backgroundColor or default to blue
              onClick={handleMoreInfoClick}
            >
              <div className='w-fit px-2 bg-gray-200 border-2 border-black'>
                {showMoreInfo ? 'Less Info' : 'More Info'} {/* Toggle text */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
