import React, { useState } from 'react';
import WeatherCard from "./WeatherCard";
import { IoIosSearch, IoIosClose } from 'react-icons/io';
import { PiHouseSimpleDuotone } from "react-icons/pi";
import { PiHouseSimpleFill } from "react-icons/pi";
import { IoIosHelpBuoy } from "react-icons/io";
import { GiBoatHorizon } from "react-icons/gi";
import { GiStrawberry } from 'react-icons/gi';
import { GiBuoy } from "react-icons/gi";

import '../index.css';

const Nav = ({
  isMobile,
  dark,
  toggleDark,
  homes,
  toggleHomes,
  backgroundColor,
  locationName,
  resetAppState,
  handleMoreInfoClick,
  showMoreInfo,
  setSelectedLocation,
  allLocations,
}) => {
  const [searchTerm, setSearchTerm] = useState(''); // Local state for search input
  const [searchResults, setSearchResults] = useState([]);
  const [showAllLocations, setShowAllLocations] = useState(false);

  const handleReset = () => {
    resetAppState(); // Reset the app state and close the dropdown
    setSearchTerm(''); // Clear the search input when resetting
    setSearchResults([]); // Clear search results when resetting
  };



  const handleShowAllClick = () => {
    setShowAllLocations(!showAllLocations); // Toggle the state
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
    setShowAllLocations(false);
  };
  console.log('isMobile:', isMobile);
  console.log('showMoreInfo:', showMoreInfo);
  return (
    <div
      className={`w-full h-[100px] md:h-[100px] flex flex-col md:items-start md:justify-start justify-between py-0 z-50 ${dark ? 'bg-black text-white' : 'bg-white text-black'
        }`}
    >
      <div className='w-full flex flex-row md:flex-row flex-wrap h-full '>
        {/* left side */}
        <div className='flex flex-row md:flex-row w-full md:w-1/2 md:gap-4 h-1/2 md:h-5/6 items-center md:items-center justify-start md:justify-start px-2 md:px-0 md:pl-4 '>

          <div className='pt-2 md:py-2  md:w-1/2 w-3/5 justify-center flex text-2xl md:text-4xl font-playfair font-bold' onClick={handleReset}>
            Cape St. Claire
          </div>

          {/* <h1 className="text-xl" onClick={toggleDark} >{dark ? 'Dark Mode' : 'Light Mode'} </h1> */}
          <div className='flex flex-col-reverse md:flex-col-reverse  font-bold w-1/2 md:w-1/2 h-full   md:pr-12 items-center md:justify-end md:h-full'>
            <div className='flex flex-row md:items-center text-2xl gap-4 md:h-1/3 '>
              <IoIosHelpBuoy
                style={{ color: dark ? '#D93B86' : '#D93B86' }} // Dark green when selected, pink in dark mode, #D93B86 in light mode
                onClick={() => alert("This icon will eventually show a help component to users")}
              />
              {
                homes ? (
                  <PiHouseSimpleFill
                    style={{ color: dark ? '#D93B86' : '#D93B86' }} // Pink in dark mode, #D93B86 in light mode
                    onClick={toggleHomes}
                  />
                ) : (
                  <PiHouseSimpleDuotone
                    style={{ color: dark ? '#D93B86' : '#D93B86' }} // Pink in dark mode, #D93B86 in light mode
                    onClick={toggleHomes}
                  />
                )
              }

              <GiBoatHorizon
                style={{ color: dark ? 'pink' : '#D93B86' }} // Pink in dark mode, #D93B86 in light mode
                onClick={toggleDark}
              />
            </div>

            {/* <div className="strawberry-container bg-[#ffc0cb]">
               
                <GiStrawberry className="strawberry-icon" />

               
                <div className="strawberry-fill">
                  <GiStrawberry className="strawberry-icon" />
                </div>
              </div> */}
            <div className={`text-xs md:text-4xl font-mono font-bold h-fit md:h-2/3 flex md:items-center justify-center w-full md:justify-center md:w-fit ${dark ? 'text-white' : 'text-black'}`}>
              <WeatherCard />
            </div>

          </div>

        </div>

        {/* This is the right side of the nav bar on desktop */}
        <div
          className='w-full md:w-1/2 md:px-2 py-2 md:py-0 md:h-5/6 flex justify-center items-center md:items-center h-1/2'
          style={{ backgroundColor: backgroundColor || '' }} // Default to white if no color is set
        >
          {/* This is the actual search bar */}
          <div className=' w-5/6 md:h-3/5 flex flex-row justify-start items-center border-2 border-black rounded-lg relative bg-white text-black'>
            <div className='w-1/6 h-full flex bg-gray-100 text-white justify-center text-2xl items-center '>
              {locationName ? (
                <div className='md:w-2/4 hover:bg-pink h-auto bg-gray-100 flex justify-center items-center  font-bold text-3xl text-red-800 border-2 border-gray-100 rounded-full shadow shadow-black'>
                  <IoIosClose onClick={handleReset} />
                </div>
              ) : (
                <div className='md:w-2/4 h-auto hover:bg-pink bg-gray-100 flex justify-center items-center font-bold text-3xl text-gray-800 border-2 border-gray-100 rounded-full shadow shadow-black '
                  onClick={handleShowAllClick}
                >
                  <IoIosSearch />
                </div>
              )}
            </div>
            <div className='w-3/4 h-full flex items-center pl-4'>
              {locationName ? (
                <span className='md:text-xl  font-bold text-black'>
                  {locationName}
                </span>
              ) : (
                <input
                  type='text'
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className='md:text-xl font-bold w-full outline-none'
                  placeholder='Search Location'
                />
              )}
            </div>
          </div>

          {/* Display search results */}
          {(searchTerm || showAllLocations) && (
            <div className='absolute top-28 md:top-16 bg-white border border-gray-300 rounded-lg w-full md:w-2/5 z-10 h-5/6 overflow-y-auto text-black'>
              {(showAllLocations ? allLocations : searchResults).map((location, index) => (
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
            className={`w-full h-1/6 flex justify-end items-center transition-all duration-300 bg-white`}
            style={{ backgroundColor: showMoreInfo ? (backgroundColor || 'white') : 'white' }} // Use backgroundColor or default to blue
          >
            <div
              className={`w-1/2 h-full flex flex-col ${dark ? 'bg-black' : 'bg-white'}`}
            >

              <div
                className='h-1/2 w-full'
                style={{
                  backgroundColor: isMobile
                    ? (showMoreInfo ? (backgroundColor || 'blue')
                      : '')
                    : (showMoreInfo ? (backgroundColor || 'blue') : (dark ? 'black' : 'white'))
                }}
              >
              </div>
              <div
                className='h-1/2 w-full'
                style={{
                  backgroundColor: showMoreInfo
                    ? (backgroundColor || 'blue') // Use backgroundColor or default to blue
                    : (dark ? 'black' : 'white')  // Use black if dark is true, otherwise white
                }}
              >

              </div>
            </div>
            <div
              className='text-xl font-bold cursor-pointer w-1/2 justify-start'
              style={{
                backgroundColor: showMoreInfo
                  ? (backgroundColor || 'blue') // Use backgroundColor or default to blue
                  : (dark ? 'black' : 'white')  // If not showing more info, use black if dark is true, otherwise white
              }}
              onClick={handleMoreInfoClick}
            >

              <div className='w-fit px-2 bg-gray-200 border-2 border-black text-black'>
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
