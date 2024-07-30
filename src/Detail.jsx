// src/DetailPage.jsx
import React from 'react';

const DetailPage = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-xl">
        <h2 className="text-2xl font-bold mb-4">Cube Details</h2>
        <p className="mb-4">This is a detailed page about the cube. You can add more information here.</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
