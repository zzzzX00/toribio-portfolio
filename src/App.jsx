import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutMe from './components/AboutMe.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <Navbar /> {/* ✅ Navbar inside the container area */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;