import React from 'react';

const PortfolioDetail = ({ item }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
      <p className="text-gray-600 mb-4">{item.description}</p>
      <button 
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300"
        onClick={() => {/* Implement Read More functionality */}}
      >
        Read More
      </button>
    </div>
  );
};

export default PortfolioDetail;