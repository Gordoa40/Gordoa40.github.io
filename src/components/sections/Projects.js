import React, { useState } from 'react';
import ProjectCard from '../projects/ProjectCard';
import ProjectDetail from '../projects/ProjectDetail';
import WoodProjectCard from '../woodProjects/WoodProjectCard';
import WoodProjectDetail from '../woodProjects/WoodProjectDetail';
import { projects } from '../projects/projectsData';
import { woodProjects } from '../woodProjects/WoodProjectsData';
import PageTransition from './PageTransition';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedWoodProject, setSelectedWoodProject] = useState(null);


  const handleProjectClick = (project) => {
    setSelectedProject(selectedProject?.id === project.id ? null : project);
  };
  const handleWoodProjectClick = (woodProject) => {
    setSelectedWoodProject(selectedWoodProject?.id === woodProject.id ? null : woodProject);
  };

  return (
    <PageTransition>
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <React.Fragment key={project.id}>
              <ProjectCard
                {...project}
                onClick={() => handleProjectClick(project)}
                isSelected={selectedProject?.id === project.id}
              />
              {selectedProject?.id === project.id && (
                <div className="md:col-span-2 lg:col-span-3">
                  <ProjectDetail project={selectedProject} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-6">Woodworking</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {woodProjects.map((woodProject) => (
            <React.Fragment key={woodProject.id}>
              <WoodProjectCard
                {...woodProject}
                onClick={() => handleWoodProjectClick(woodProject)}
                isSelected={selectedWoodProject?.id === woodProject.id}
              />
              {selectedWoodProject?.id === woodProject.id && (
                <div className="md:col-span-2 lg:col-span-3">
                  <WoodProjectDetail project={selectedWoodProject} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
    </PageTransition>
  );
};

export default Projects;