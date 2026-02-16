import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project, ProjectCategory } from '../types/portfolio';
import ProjectModal from './ProjectModal';

interface PortfolioGridProps {
  projects: Project[];
  selectedCategory: ProjectCategory;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects, selectedCategory }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => handleProjectClick(project)}
          >
            <div className="aspect-w-4 aspect-h-3">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end p-6">
              <h3 className="text-white text-xl font-bold text-center mb-2">
                {project.title}
              </h3>
              <p className="text-white/80 text-sm text-center">
                {project.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default PortfolioGrid;