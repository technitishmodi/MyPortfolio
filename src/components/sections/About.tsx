import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Database, Shield, Smartphone, Server } from 'lucide-react';
import Section from '../ui/Section';

const About: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut" 
      }
    }
  };

  const services = [
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile App Development',
      description: 'Building high-performance cross-platform apps with Flutter and Dart, focusing on clean UI and smooth UX.',
      color: 'bg-blue-500'
    },
    {
      icon: <Globe size={24} />,
      title: 'Web Development',
      description: 'Creating responsive, modern web apps using React, TypeScript, and Tailwind CSS for scalable front-end solutions.',
      color: 'bg-green-500'
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Engineering',
      description: 'Designing secure, scalable APIs and server architectures with Node.js, Firebase, and Supabase.',
      color: 'bg-purple-500'
    },
    {
      icon: <Shield size={24} />,
      title: 'Cybersecurity',
      description: 'Applying encryption protocols, OWASP best practices, and security audits to safeguard applications.',
      color: 'bg-red-500'
    }
  ];

  const stats = [
    { number: '4th Year Student', label: 'Btech Computer Science' },
    { number: '10+', label: 'Projects Done' },
    { number: '10+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Commitment to Quality' }
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Final-year Computer Science student passionate about building secure, high-quality software."
      className="bg-white dark:bg-gray-800"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        
        {/* Left Column - Intro */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Full-Stack Developer & Cybersecurity Enthusiast
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m a final-year B.Tech Computer Science student at St. Andrews Institute of Technology and Management.
              My work spans mobile, web, and backend development, with a deep interest in security.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I’ve built projects with Flutter, React, and Node.js, integrating secure backend systems and clean front-end experiences. 
              My focus is on delivering reliable, scalable software that solves real problems.
            </p>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 pt-4">
            {['Flutter', 'Dart', 'React', 'Node.js', 'Firebase', 'Cybersecurity'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div className="pt-6">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Let’s Collaborate
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl h-full flex flex-col justify-center"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Services Section */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What I Offer
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From concept to deployment, I design and develop software that balances functionality, performance, and security.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-600 h-full flex flex-col">
                <div className={`inline-flex items-center justify-center w-12 h-12 ${service.color} text-white rounded-lg mb-4`}>
                  {service.icon}
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
