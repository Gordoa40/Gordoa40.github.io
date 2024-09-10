import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Portfolio from './components/sections/Portfolio';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import InteractiveResume from './components/sections/InteractiveResume';
import ProjectPage from './components/projects/ProjectPage';
import WoodProjectPage from './components/woodProjects/WoodProjectPage';
import PortfolioItemPage from './components/portfolio/PortfolioItemPage';
import ProteinFoldingGame from './components/sections/ProteinFoldingGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="resume" element={<InteractiveResume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="game" element={<ProteinFoldingGame />} />
        </Route>
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/woodProjects/:id" element={<WoodProjectPage />} />
        <Route path="/portfolio/:id" element={<PortfolioItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;