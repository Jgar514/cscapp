import React from 'react';
import { IoIosHelpBuoy } from "react-icons/io";
import { PiHouseSimpleDuotone } from "react-icons/pi";
import { GiBoatHorizon } from "react-icons/gi";
import { IoIosSearch, IoIosClose } from 'react-icons/io';
const HelpBox = ({ message, onClose }) => {
  return (
    <div className="fixed top-1/2 left-1/2  md:top-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50  w-full md:w-1/3 flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Help</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800 focus:outline-none">
          &times;
        </button>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <IoIosHelpBuoy className="flex-shrink-0" />
        <p className="text-gray-700 flex-grow">
          Toggle house icon to
          <span className="inline-flex items-center"> ( <PiHouseSimpleDuotone /> ) </span>
          show residential buildings.
        </p>
      </div>
      <div className="flex items-center space-x-2 mt-4">
        <IoIosHelpBuoy className="flex-shrink-0" />
        <p className="text-gray-700 flex-grow">
          Toggle horizon icon
          <span className="inline-flex items-center"> ( <GiBoatHorizon /> ) </span>
          to show dark mode.
        </p>
      </div>
      <div className="flex items-center space-x-2 mt-4">
        <IoIosHelpBuoy className="flex-shrink-0" />
        <p className="text-gray-700 flex-grow">
          Select search icon
          <span className="inline-flex items-center"> ( <IoIosSearch /> ) </span>
          to show all selectable locations.
        </p>
      </div>
      <div className="flex items-center space-x-2 mt-4">
        <IoIosHelpBuoy className="flex-shrink-0" />
        <p className="text-gray-700 flex-grow">
          If you know the name of the location you can type it into the search bar.
        </p>
      </div>
      <div className="flex items-center space-x-2 mt-4">
        <IoIosHelpBuoy className="flex-shrink-0" />
        <p className="text-gray-700 flex-grow">
          When finished viewing the location click on the
          <span className="inline-flex items-center"> ( <IoIosClose /> ) </span>
          to go back to main view.
        </p>
      </div>
      <div className="flex items-center space-x-2 mt-4">
        <IoIosHelpBuoy className="flex-shrink-0" />
        <p className="text-gray-700 flex-grow">
          You can select the locations directly by clicking on them.
        </p>
      </div>
      <div className="flex items-center space-x-2 mt-4">
        <IoIosHelpBuoy className="flex-shrink-0" />
        <p className="text-gray-700 flex-grow">
          You can interact with the model by dragging to rotate or by zooming in and out.
        </p>
      </div>


      <div className="mt-4">
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default HelpBox;
