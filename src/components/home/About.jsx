import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import portfolioData from '../../data/portfolio.json';
import { slideUp } from '../../utils/animations';

const About = () => {
  const [ref, inView] = useScrollAnimation();
  const { personal } = portfolioData;

  return (
    <section className="section-container bg-white" ref={ref}>
      <motion.div
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={slideUp}
        className={`max-w-4xl mx-auto reveal-bottom ${inView ? 'in-view' : ''}`}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          About Me
        </h2>
        
        <div className="space-y-6 text-lg text-gray-700">
          <p className="leading-relaxed">
            {personal.bio}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <div className="flex items-center space-x-2">
              <span className="text-accent font-semibold">📧</span>
              <a href={`mailto:${personal.email}`} className="hover:text-primary transition-colors">
                {personal.email}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-accent font-semibold">📍</span>
              <span>{personal.location}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

