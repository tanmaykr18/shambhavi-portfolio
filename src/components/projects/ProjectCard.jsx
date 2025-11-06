import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="card card-hover group cursor-pointer bg-white h-full flex flex-col"
      onClick={() => onClick(project)}
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
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2 min-h-[3rem]">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

