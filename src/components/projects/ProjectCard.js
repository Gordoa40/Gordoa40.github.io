import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ id, title, image, description, skills, onClick, isSelected }) => {
  return (
    <motion.div 
      className={`bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden ${isSelected ? 'ring-2 ring-orange-500' : ''}`}
      onClick={() => onClick(id)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      layout
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          {image && (
            <img 
              src={`/images/${image}`} 
              alt={title} 
              className="h-48 w-full object-cover md:w-48"
            />
          )}
        </div>
        <div className="p-8">
          <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => (
              <motion.span 
                key={index} 
                className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;