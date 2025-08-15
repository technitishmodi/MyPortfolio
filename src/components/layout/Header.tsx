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
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              
              {/* Main logo container */}
              <div className="relative w-14 h-14 bg-black border border-cyan-400/50 rounded-lg flex items-center justify-center overflow-hidden">
                {/* Cyberpunk grid background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10"></div>
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>
                </div>
                
                {/* Glitch effect bars */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="absolute top-2 left-0 w-full h-px bg-cyan-400 animate-pulse"></div>
                  <div className="absolute bottom-3 left-0 w-full h-px bg-pink-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* NM Text with cyberpunk styling */}
                <div className="relative z-10 flex items-center justify-center">
                  <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 tracking-wider filter drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                    N
                  </span>
                  <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 tracking-wider filter drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" style={{ marginLeft: '-2px' }}>
                    M
                  </span>
                </div>
                
                {/* Corner accent dots */}
                <div className="absolute top-1 right-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-pink-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                
                {/* Scanning line effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse transform translate-y-0 group-hover:translate-y-14 transition-transform duration-2000"></div>
                </div>
              </div>
            </div>
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