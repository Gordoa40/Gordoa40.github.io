import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { logEvent } from 'firebase/analytics';
import { analytics } from './Firebase';
import Layout from './components/Layout';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
//import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import InteractiveResume from './components/sections/InteractiveResume';
import ProjectPage from './components/projects/ProjectPage';
import Gallery from './components/sections/Gallery';
import PortfolioItemPage from './components/portfolio/PortfolioItemPage';
import ProteinFoldingGame from './components/sections/ProteinFoldingGame';

function PageviewTracker() {
  const location = useLocation();

  useEffect(() => {
    logEvent(analytics, 'page_view', {
      page_path: location.pathname,
      page_title: document.title,
    });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <PageviewTracker />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="gallery" element={<Gallery />} />
          {/* Route path="blog" element={<Blog />} /> */}
          <Route path="resume" element={<InteractiveResume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="game" element={<ProteinFoldingGame />} />
        </Route>
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/portfolio/:id" element={<PortfolioItemPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;