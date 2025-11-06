import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Timeline from '../components/experience/Timeline';
import portfolioData from '../data/portfolio.json';
import { pageTransition, slideUp, staggerContainer, staggerItem } from '../utils/animations';

const About = () => {
  const [ref, inView] = useScrollAnimation();
  const { personal, education, certifications, achievements } = portfolioData;

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
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold mb-6 text-gradient">About Me</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            {personal.bio}
          </p>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="section-container bg-white" ref={ref}>
        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={slideUp}
        >
          <div className="flex items-center justify-center mb-12">
            <GraduationCap className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-gradient">Education</h2>
          </div>
          <Timeline items={education} type="education" />
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="flex items-center justify-center mb-12">
            <Award className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-gradient">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, idx) => (
              <motion.div key={idx} variants={staggerItem} className="card scale-in scroll-animate-stagger">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-primary font-semibold mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 text-sm">
                  {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section className="section-container bg-white">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="flex items-center justify-center mb-12">
            <Trophy className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-gradient">Achievements</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {achievements.map((achievement, idx) => (
              <motion.div key={idx} variants={staggerItem} className="card reveal-rotate">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-700 mb-2">
                      {achievement.description}
                    </p>
                    <p className="text-accent font-semibold">{achievement.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;

