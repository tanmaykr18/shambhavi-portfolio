import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';
import ProjectFilter from '../components/projects/ProjectFilter';
import portfolioData from '../data/portfolio.json';
import { pageTransition, slideUp, staggerContainer, staggerItem } from '../utils/animations';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [...new Set(portfolioData.projects.map(p => p.category))];
  
  const filteredProjects = activeCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-blue-50 to-indigo-100">
        <motion.div
          initial="initial"
          animate="animate"
          variants={slideUp}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6 text-gradient">My Projects</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore my portfolio of full-stack applications, AI-powered solutions, and innovative web projects
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="section-container bg-white">
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onFilterChange={setActiveCategory}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.4, 
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  onClick={setSelectedProject}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </motion.div>
  );
};

export default Projects;

