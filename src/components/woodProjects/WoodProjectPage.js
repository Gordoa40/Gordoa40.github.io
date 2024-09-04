import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { woodProjects } from './WoodProjectsData';
import PhotoGallery from '../PhotoGallery';

const WoodProjectPage = () => {
  const { id } = useParams();
  const project = woodProjects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <Link to="/projects" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Projects</Link>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <PhotoGallery images={project.images} />
      <p className="text-gray-700 my-6">{project.fullDescription}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.skills.map((skill, index) => (
          <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
      {/* Add more project details here */}
    </motion.div>
  );
};

export default WoodProjectPage;