import React from 'react';
import { motion } from 'framer-motion';

const WoodProjectCard = ({ title, image, skills, onClick, isSelected }) => {
  return (
    <motion.div 
      className={`bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md cursor-pointer ${isSelected ? 'ring-2 ring-orange-500' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      layout
    >
      {image && <img src={`/images/${image}`} alt={title} className="w-full h-48 object-cover mb-4 rounded" />}
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
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
    </motion.div>
  );
};

export default WoodProjectCard;