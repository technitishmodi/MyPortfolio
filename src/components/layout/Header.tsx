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
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
  <nav className="flex items-center justify-between">
    {/* === Cyberpunk Logo === */}
    <motion.a
      href="#home"
      className="relative group flex items-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-lg overflow-hidden ml-1 sm:ml-2">
        {/* Animated Border Glow */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-[conic-gradient(from_var(--angle),#06b6d4,#ec4899,#a855f7,#06b6d4)] animate-borderGlow"></div>
        <div className="absolute inset-[2px] rounded-md bg-black dark:bg-dark-900"></div>
        {/* Logo Text */}
        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-500 font-extrabold text-xl tracking-widest select-none glitch">
          NM
        </span>
            </div>
            <style>{`
              /* Border Glow Animation */
              @property --angle {
                syntax: "<angle>";
                initial-value: 0deg;
                inherits: false;
              }
              @keyframes borderGlow {
                to {
                  --angle: 360deg;
                }
              }
              .animate-borderGlow {
                background-size: 200% 200%;
                animation: borderGlow 6s linear infinite;
              }

              /* Glitch Text Effect */
              .glitch {
                position: relative;
              }
              .glitch::before,
              .glitch::after {
                content: "NM";
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                clip: rect(0, 900px, 0, 0);
              }
              .glitch::before {
                left: 2px;
                text-shadow: -2px 0 cyan;
                animation: glitchTop 2s infinite linear alternate-reverse;
              }
              .glitch::after {
                left: -2px;
                text-shadow: -2px 0 magenta;
                animation: glitchBottom 2s infinite linear alternate-reverse;
              }

              @keyframes glitchTop {
                0% { clip: rect(0, 9999px, 0, 0); }
                10% { clip: rect(0, 9999px, 80%, 0); }
                20% { clip: rect(0, 9999px, 0, 0); }
                30% { clip: rect(0, 9999px, 60%, 0); }
                40% { clip: rect(0, 9999px, 0, 0); }
                50% { clip: rect(0, 9999px, 90%, 0); }
                60% { clip: rect(0, 9999px, 0, 0); }
                70% { clip: rect(0, 9999px, 70%, 0); }
                80% { clip: rect(0, 9999px, 0, 0); }
                90% { clip: rect(0, 9999px, 100%, 0); }
                100% { clip: rect(0, 9999px, 0, 0); }
              }

              @keyframes glitchBottom {
                0% { clip: rect(0, 9999px, 0, 0); }
                10% { clip: rect(20%, 9999px, 100%, 0); }
                20% { clip: rect(0, 9999px, 0, 0); }
                30% { clip: rect(40%, 9999px, 100%, 0); }
                40% { clip: rect(0, 9999px, 0, 0); }
                50% { clip: rect(10%, 9999px, 100%, 0); }
                60% { clip: rect(0, 9999px, 0, 0); }
                70% { clip: rect(30%, 9999px, 100%, 0); }
                80% { clip: rect(0, 9999px, 0, 0); }
                90% { clip: rect(50%, 9999px, 100%, 0); }
                100% { clip: rect(0, 9999px, 0, 0); }
              }
            `}</style>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <motion.li key={item.label} whileHover={{ y: -2 }}>
                  <a
                    href={item.href}
                    className="text-gray-700 dark:text-gray-200 hover:text-cyan-400 dark:hover:text-fuchsia-400 transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-200 hover:text-cyan-400 dark:hover:text-fuchsia-400 transition-colors shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-200 hover:text-cyan-400 dark:hover:text-fuchsia-400 transition-colors shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-cyan-400 dark:hover:text-fuchsia-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/95 dark:bg-dark-900/95 backdrop-blur-lg shadow-lg border-t border-cyan-500/30"
        >
          <ul className="py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <motion.li
                key={item.label}
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a
                  href={item.href}
                  className="block text-gray-300 dark:text-gray-200 hover:text-cyan-400 dark:hover:text-fuchsia-400 transition-colors py-2 font-medium"
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
