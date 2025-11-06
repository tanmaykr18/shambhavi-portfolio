import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import WorkExperience from '../components/experience/WorkExperience';
import portfolioData from '../data/portfolio.json';
import { pageTransition, slideUp, staggerContainer, staggerItem } from '../utils/animations';

const Experience = () => {
  const { experience } = portfolioData;

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
          <div className="flex items-center justify-center mb-6">
            <Briefcase className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-5xl font-bold text-gradient">Work Experience</h1>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            My professional journey in full-stack development and AI integration
          </p>
        </motion.div>
      </section>

      {/* Experience Timeline */}
      <section className="section-container bg-white">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-5xl mx-auto space-y-8"
        >
          {experience.map((exp) => (
            <motion.div key={exp.id} variants={staggerItem}>
              <WorkExperience experience={exp} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Experience;

