import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const currentSection = location.pathname.split('/')[1] || 'Home';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation activeSection={currentSection} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;