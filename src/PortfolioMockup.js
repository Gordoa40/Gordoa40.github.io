import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';

const PortfolioMockup = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioMockup;