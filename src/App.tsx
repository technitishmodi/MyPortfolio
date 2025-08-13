import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import SpecialEffects from './components/ui/SpecialEffects';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-dark-900 transition-colors duration-300">
        <div className="fixed inset-0 bg-mesh opacity-10 dark:opacity-100 transition-opacity duration-300 -z-10" />
        <SpecialEffects />
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;