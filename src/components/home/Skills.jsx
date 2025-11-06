import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import portfolioData from '../../data/portfolio.json';
import { staggerContainer, staggerItem } from '../../utils/animations';

const Skills = () => {
  const [ref, inView] = useScrollAnimation();
  const { skills } = portfolioData;

  const skillCategories = [
    { title: 'Languages', items: skills.languages, icon: '💻' },
    { title: 'Frameworks', items: skills.frameworks, icon: '🚀' },
    { title: 'Tools', items: skills.tools, icon: '🛠️' },
    { title: 'Backend', items: skills.backend, icon: '⚙️' },
    { title: 'AI/ML', items: skills.ai, icon: '🤖' },
    { title: 'Soft Skills', items: skills.soft, icon: '💡' },
  ];

  return (
    <section className="section-container bg-gray-50" ref={ref}>
      <motion.div
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className={`card scale-in scroll-animate-stagger ${inView ? 'in-view' : ''}`}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

