import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Eye } from 'lucide-react';
import Section from '../ui/Section';
import { projects, projectCategories } from '../../data/projects';

const Projects: React.FC = () => {
  const [category, setCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = category === 'All'
    ? projects
    : projects.filter(project => project.category === category);

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="A selection of my recent work across various domains and technologies"
      className="bg-white dark:bg-dark-800"
    >
      {/* Category Filter */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {projectCategories.map((cat, index) => (
          <motion.button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
              category === cat
                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.05
              }}
              className="group"
              whileHover={{ y: -5 }}
            >
              <div className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-700">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={() => openModal(project)}
                      className="flex-1 px-3 py-2 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <Eye size={14} />
                      Check Details
                    </button>
                    <a
                      href={project.link}
                      className="p-2 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={14} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                >
                  <X size={20} className="text-gray-800 dark:text-gray-200" />
                </button>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm font-medium bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    Project Details
                  </h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-400">
                    <p>• Built with modern development practices and clean architecture</p>
                    <p>• Responsive design optimized for all devices</p>
                    <p>• Focus on user experience and performance</p>
                    <p>• Implemented security best practices</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.link}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-medium hover:from-primary-700 hover:to-accent-700 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={18} />
                    View Live Project
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;