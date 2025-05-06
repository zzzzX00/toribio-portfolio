import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Certificates from './components/Certificates.jsx';
import Blog from './components/Blog.jsx';
import BlogPost from './components/BlogPost.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;