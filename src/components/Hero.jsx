import React from 'react';
import './Hero.css';
import defaultPhoto from '../assets/allana.jpg'; 
import Navbar from './Navbar';

const Hero = ({ name = 'Allana Shenelle Toribio', tagline = 'Web Developer', photo = defaultPhoto }) => {
  const handleAboutClick = () => {
    window.location.href = '#about';
  };

  return (
    <section id="home">
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{name}</h1>
          <p className="hero-tagline">{tagline}</p>
          <p className="hero-description">
            An aspiring web developer specializing in building modern, user-friendly designs with a focus on creating engaging user experiences and clean, efficient code.
          </p>
          <button 
            className="cta-button" 
            onClick={handleAboutClick}
            aria-label={`Learn more about ${name}`}
          >
            About Me
          </button>
        </div>

        <div className="hero-image">
          <img src={photo} alt={`Photo of ${name}`} className="hero-photo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;