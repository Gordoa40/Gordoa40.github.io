import React, { useState } from 'react';
import ProjectCard from '../projects/ProjectCard';
import ProjectDetail from '../projects/ProjectDetail';
import WoodProjectCard from '../woodProjects/WoodProjectCard';
import WoodProjectDetail from '../woodProjects/WoodProjectDetail';
import { projects } from '../projects/projectsData';
import { woodProjects } from '../woodProjects/WoodProjectsData';
import PageTransition from './PageTransition';
import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProject(selectedProject?.id === projectId ? null : projects.find(p => p.id === projectId));
  };

  return (
    <PageTransition>
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">Featured Projects</h2>
          <motion.div 
            className="space-y-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <ProjectCard
                  {...project}
                  image={project.images[0]}
                  onClick={handleProjectClick}
                  isSelected={selectedProject?.id === project.id}
                />
                {selectedProject?.id === project.id && (
                  <motion.div 
                    className="mt-4 md:mt-0 md:flex-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <ProjectDetail project={selectedProject} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};


        // <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        //   {woodProjects.map((woodProject) => (
        //     <React.Fragment key={woodProject.id}>
        //       <WoodProjectCard
        //         {...woodProject}
        //         onClick={() => handleWoodProjectClick(woodProject)}
        //         isSelected={selectedWoodProject?.id === woodProject.id}
        //       />
        //       {selectedWoodProject?.id === woodProject.id && (
        //         <div className="md:col-span-2 lg:col-span-3">
        //           <WoodProjectDetail project={selectedWoodProject} />
        //         </div>
        //       )}
        //     </React.Fragment>
        //   ))}
        // </div>
      
export default Projects;