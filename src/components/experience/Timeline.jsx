import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Timeline = ({ items, type = 'experience' }) => {
  const [ref, inView] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={staggerContainer}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

      {/* Timeline Items */}
      <div className="space-y-12">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={staggerItem}
            className={`relative flex flex-col md:flex-row items-start md:items-center ${
              idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white z-10"></div>

            {/* Content */}
            <div className={`ml-8 md:ml-0 md:w-5/12 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="card">
                <div className="flex items-center space-x-2 text-accent mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {item.startDate} - {item.endDate || item.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title || item.degree}
                </h3>
                
                <p className="text-primary font-semibold mb-2">
                  {item.company || item.institution || item.issuer}
                </p>
                
                {item.description && (
                  <p className="text-gray-700 text-sm">
                    {item.description}
                  </p>
                )}
                
                {item.cgpa && (
                  <p className="text-gray-600 text-sm mt-2">
                    CGPA: {item.cgpa}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;

