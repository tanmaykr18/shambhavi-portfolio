import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerItem } from '../../utils/animations';

const WorkExperience = ({ experience }) => {
  const [ref, inView] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={staggerItem}
      className={`card reveal-bottom ${inView ? 'in-view' : ''}`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {experience.title}
          </h3>
          <p className="text-xl text-primary font-semibold mb-2">
            {experience.company}
          </p>
        </div>
        
        {experience.current && (
          <span className="px-3 py-1 bg-accent text-white rounded-full text-sm font-medium w-fit">
            Current
          </span>
        )}
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4" />
          <span>{experience.startDate} - {experience.endDate}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4" />
          <span>{experience.location}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        {experience.description}
      </p>

      {/* Technologies */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          Key Achievements
        </h4>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <span className="text-gray-700">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default WorkExperience;

