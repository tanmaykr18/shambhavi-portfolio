import { motion } from 'framer-motion';

const ProjectFilter = ({ categories, activeCategory, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onFilterChange('All')}
        className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 border-2 ${
          activeCategory === 'All'
            ? 'bg-primary text-white shadow-lg border-primary'
            : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-primary/30'
        }`}
        style={{
          color: activeCategory === 'All' ? '#ffffff' : '#374151',
          backgroundColor: activeCategory === 'All' ? '#2563EB' : '#ffffff'
        }}
      >
        All
      </motion.button>
      
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(category)}
          className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 border-2 ${
            activeCategory === category
              ? 'bg-primary text-white shadow-lg border-primary'
              : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-primary/30'
          }`}
          style={{
            color: activeCategory === category ? '#ffffff' : '#374151',
            backgroundColor: activeCategory === category ? '#2563EB' : '#ffffff'
          }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilter;

