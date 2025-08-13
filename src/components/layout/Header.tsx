import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
  scrolled
    ? 'py-3 bg-white/90 dark:bg-dark-900/90 backdrop-blur-lg shadow-[0_2px_10px_rgba(0,0,0,0.06)]'
    : 'py-5 bg-transparent'
}`;


  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <motion.a 
            href="#home" 
            className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <motion.li key={item.label} whileHover={{ y: -2 }}>
                  <a
                    href={item.href}
                    className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          <div className="flex items-center md:hidden space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 dark:bg-dark-900/95 backdrop-blur-lg shadow-lg border-t border-gray-200/50 dark:border-gray-700/50"
        >
          <ul className="py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <motion.li 
                key={item.label}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={item.href}
                  className="block text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;