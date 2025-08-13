import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '' 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id={id} 
      ref={ref} 
      className={`py-16 md:py-24 ${className}`}
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900 dark:text-dark-50">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </motion.div>
    </section>
  );
};

export default Section;