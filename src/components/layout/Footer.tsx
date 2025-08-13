import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/technitishmodi',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/nitish-modi-206205294',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:nubhawbarnwal@gmail.com',
    label: 'Email',
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Wave shape top border */}
      <svg
        className="absolute top-0 left-0 w-full -translate-y-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,224L60,197.3C120,171,240,117,360,101.3C480,85,600,107,720,138.7C840,171,960,213,1080,208C1200,203,1320,149,1380,122.7L1440,96V320H0Z"
        ></path>
      </svg>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Brand Name */}
          <motion.h3
            className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            Nitish Modi
          </motion.h3>

          {/* Tagline */}
          <p className="text-gray-400 max-w-xl">
            Building innovative solutions with modern technologies & a security-first approach.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6">
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-10 pt-6 border-t border-white/10 text-gray-500 text-sm flex items-center justify-center space-x-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span>&copy; {new Date().getFullYear()} Nitish Modi — Made with</span>
          <motion.span
            className="text-red-500"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ❤️
          </motion.span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
