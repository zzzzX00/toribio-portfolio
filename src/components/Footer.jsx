import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">AT</Link>
        </div>
        
        <div className="footer-links">
          <div className="footer-nav">
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-me">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="mailto:your.email@example.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;