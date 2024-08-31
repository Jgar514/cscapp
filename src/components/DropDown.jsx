import React from 'react';

const DropDown = ({ showMoreInfo }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-blue-200 shadow-lg transition-transform duration-300 ease-in-out ${showMoreInfo ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ zIndex: 50 }} // Ensure it appears above other content
    >
      <div className='p-4 h-full bg-red-100'>
        {/* Your content for DropDown */}
        <p>Detail Information...</p>
      </div>
    </div>
  );
};

export default DropDown;
