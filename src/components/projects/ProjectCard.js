import React from 'react';

const ProjectCard = ({ title, image, onClick, isSelected }) => {
  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${isSelected ? 'ring-2 ring-orange-500' : 'hover:shadow-lg'}`}
      onClick={onClick}
    >
      {image && <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded" />}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
    </div>
  );
};

export default ProjectCard;