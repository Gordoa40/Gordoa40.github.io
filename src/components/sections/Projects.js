import React, { useEffect } from 'react';
import { setPageTitle } from '../utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from './PageTransition';
import { projects } from '../projects/projectsData';

const ProjectBlock = ({ project }) => (
  <motion.div
    className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden mb-6 w-full max-w-sm"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    {project.images && (
      <img 
        src={`/images/${project.images[0]}`} 
        alt={project.title} 
        className="w-full h-auto"
      />
    )}
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.skills.map((skill, index) => (
          <span key={index} className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-2 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
      <Link
        to={`/projects/${project.id}`}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 inline-block text-center"
      >
        View Project
      </Link>
    </div>
  </motion.div>
);

const Projects = () => {
  useEffect(() => {
    setPageTitle("Projects");
  }, []);
  const leftColumnProjects = projects.filter((_, index) => index % 2 === 0);
  const rightColumnProjects = projects.filter((_, index) => index % 2 !== 0);

  return (
    <PageTransition>
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Featured Projects</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              <div className="flex flex-col items-end">
                {leftColumnProjects.map((project) => (
                  <ProjectBlock key={project.id} project={project} />
                ))}
              </div>
              <div className="flex flex-col items-start">
                {rightColumnProjects.map((project) => (
                  <ProjectBlock key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;