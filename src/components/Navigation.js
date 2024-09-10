import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Briefcase, Image, Mail, Menu, X, Sun, Moon, FileText, Gamepad2} from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'About', icon: User, path: '/about' },
    { name: 'Projects', icon: Briefcase, path: '/projects' },
    { name: 'Gallery', icon: Image, path: '/gallery' },
    //{ name: 'Blog', icon: Mail, path: '/blog' },
    { name: 'Resume', icon: FileText, path: '/resume' },
    { name: 'Contact', icon: Mail, path: '/contact' },
    { name: 'Game', icon: Gamepad2, path: '/game' },
  ];

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Adam Gordon</h1>
        <motion.div 
          className="hidden md:flex space-x-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className={`flex items-center space-x-1 ${
                  activeSection === item.name ? 'text-orange-500' : 'hover:text-orange-300'
                }`}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </Link>
            </motion.div>
          ))}
          <motion.button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </motion.div>
        {/* ... (mobile menu button and menu) */}
      </div>
    </nav>
  );
};

export default Navigation;