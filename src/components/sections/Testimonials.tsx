import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Section from '../ui/Section';
import { testimonials } from '../../data/testimonials';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <Section
      id="testimonials"
      title="Client Testimonials"
      subtitle="What people say about working with me"
      className="bg-dark-50 dark:bg-dark-800"
    >
      <div className="max-w-4xl mx-auto relative">
        <div className="relative h-[400px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full h-full"
            >
              <div className="bg-white dark:bg-dark-900 rounded-2xl shadow-lg p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <Quote className="text-primary-200 dark:text-primary-900/30" size={48} />
                  <p className="text-lg md:text-xl text-dark-700 dark:text-dark-300 mt-4">
                    {testimonials[currentIndex].content}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonials[currentIndex].imageUrl} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-900 dark:text-dark-100">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-dark-500 dark:text-dark-400 text-sm">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-white dark:bg-dark-900 shadow-md hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors text-dark-700 dark:text-dark-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-2 items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index 
                    ? 'bg-primary-600 dark:bg-primary-500'
                    : 'bg-dark-300 dark:bg-dark-700 hover:bg-dark-400 dark:hover:bg-dark-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-white dark:bg-dark-900 shadow-md hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors text-dark-700 dark:text-dark-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;