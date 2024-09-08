import React, { useState } from 'react';
import WeatherCard from "./WeatherCard";
import { IoIosSearch, IoIosClose } from 'react-icons/io';

const Nav = ({
  backgroundColor,
  locationName,
  resetAppState,
  handleMoreInfoClick,
  showMoreInfo,
  setSelectedLocation,
  allLocations // Added prop for all locations
}) => {
  const [searchTerm, setSearchTerm] = useState(''); // Local state for search input
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  const handleReset = () => {
    resetAppState(); // Reset the app state and close the dropdown
    setSearchTerm(''); // Clear the search input when resetting
    setSearchResults([]); // Clear search results when resetting
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter allLocations based on search term
    if (term.length > 0) {
      const results = allLocations.filter(loc =>
        loc.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]); // Clear search results if input is empty
    }
  };

  const handleLocationSelect = (locationName) => {
    setSelectedLocation(locationName); // Call a prop function to set the selected location
    setSearchTerm(''); // Clear the search term
    setSearchResults([]); // Clear the search results after selecting
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

          <div className='bg-white w-3/4 h-3/5 flex flex-row justify-start items-center border-2 border-black rounded-lg relative'>
            <div className='w-1/6 h-full flex bg-gray-100 text-white justify-center text-2xl items-center'>
              {locationName ? (
                <div className='w-2/4 hover:bg-pink h-auto bg-gray-100 flex justify-center items-center font-bold text-3xl text-red-800 border-2 border-gray-100 rounded-full shadow shadow-black'>
                  <IoIosClose onClick={handleReset} />
                </div>
              ) : (
                <div className='w-2/4 h-auto hover:bg-pink bg-gray-100 flex justify-center items-center font-bold text-3xl text-gray-800 border-2 border-gray-100 rounded-full shadow shadow-black'>
                  <IoIosSearch />
                </div>
              )}
            </div>
            <div className='w-3/4 h-full flex items-center pl-4'>
              {locationName ? (
                <span className='text-xl font-bold'>
                  {locationName}
                </span>
              ) : (
                <input
                  type='text'
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className='text-xl font-bold w-full outline-none'
                  placeholder='Search Location'
                />
              )}
            </div>
          </div>

          {/* Display search results */}
          {searchTerm && searchResults.length > 0 && (
            <div className='absolute top-16 bg-white border border-gray-300 rounded-lg w-1/2 z-10'>
              {searchResults.map((location, index) => (
                <div
                  key={index}
                  className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
                  onClick={() => handleLocationSelect(location.name)}
                >
                  {location.name}
                </div>
              ))}
            </div>
          )}

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
