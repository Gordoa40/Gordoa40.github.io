import React from 'react';

const PortfolioItem = ({ title, image, onClick, isSelected }) => {
  return (
    <div 
      className={`bg-white p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${isSelected ? 'ring-2 ring-orange-500' : 'hover:shadow-lg'}`}
      onClick={onClick}
    >
      <div className="bg-gray-300 h-48 mb-4 rounded">
        {image && <img src={image} alt={title} className="w-full h-full object-cover rounded" />}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default PortfolioItem;