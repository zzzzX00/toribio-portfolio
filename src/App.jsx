import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import AboutMe from "./components/AboutMe.jsx";
import './App.css';

function App() {
  console.log("App is rendering!");
  const [count, setCount] = useState(0);

  return (
      <div className="components">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>
  );
}

export default App;