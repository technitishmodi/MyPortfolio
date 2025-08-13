import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Section from '../ui/Section';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    const Icon =
      (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)] ||
      LucideIcons.Code;
    return <Icon size={28} />;
  };

  return (
    <Section
      id="skills"
      title="My Skills"
      subtitle="Technologies and tools I use"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="group"
          >
            <div className="h-32 w-full rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col items-center justify-center text-center p-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300">
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                {getIcon(skill.icon)}
              </div>
              {/* Name */}
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                {skill.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
