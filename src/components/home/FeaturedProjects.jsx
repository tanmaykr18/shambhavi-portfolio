import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import portfolioData from '../../data/portfolio.json';
import { staggerContainer, staggerItem } from '../../utils/animations';

const FeaturedProjects = () => {
  const [ref, inView] = useScrollAnimation();
  const featuredProjects = portfolioData.projects.filter(project => project.featured);

  return (
    <section className="section-container bg-white" ref={ref}>
      <motion.div
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-gradient">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Showcasing my best work in full-stack development and AI integration
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className={`card card-hover group scroll-animate bg-white h-full flex flex-col ${inView ? 'in-view' : ''}`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 h-48 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x300/2563EB/ffffff?text=${project.title}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-accent text-white rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>

              {/* Project Info */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2 min-h-[3rem]">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;

