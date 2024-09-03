import React, { useState } from 'react';
import { Home, User, Briefcase, Image, Mail, Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: User },
    { name: 'Projects', icon: Briefcase },
    { name: 'Portfolio', icon: Image },
    { name: 'Contact', icon: Mail },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Adam Gordon</h1>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center space-x-1 ${
                activeSection === item.name ? 'text-orange-500' : 'hover:text-orange-300'
              }`}
              onClick={() => setActiveSection(item.name)}
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center space-x-2 w-full p-2 ${
                activeSection === item.name ? 'bg-gray-700 text-orange-500' : 'hover:bg-gray-700'
              }`}
              onClick={() => {
                setActiveSection(item.name);
                setIsMenuOpen(false);
              }}
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;