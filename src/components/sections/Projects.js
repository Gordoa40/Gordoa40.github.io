import React, { useState } from 'react';
import ProjectCard from '../projects/ProjectCard';
import ProjectDetail from '../projects/ProjectDetail';
import { projects } from '../projects/projectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(selectedProject?.id === project.id ? null : project);
  };

  return (
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
      </div>
    </section>
  );
};

export default Projects;