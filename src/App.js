import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './Homepage';
import ProjectDetail from './ProjectDetail';
import Info from './Info';
import Navigation from './Navigation';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
};

export default App;