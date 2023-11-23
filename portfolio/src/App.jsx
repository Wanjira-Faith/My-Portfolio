import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contacts' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

