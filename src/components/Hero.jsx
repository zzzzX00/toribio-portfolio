import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Hero.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import defaultPhoto from "../assets/allana.jpg"; 
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <Navbar />

      <div className="hero-container">
        {/* Left Side - Animated Text Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="hero-title">
            Hello, It's Me <br />
            <span className="highlight">Allana Shenelle</span>
          </h1>
          <h2 className="hero-tagline">
            I'm a <span className="orange">Web Developer</span>
          </h2>
          <p className="hero-description">
            Crafting modern, user-friendly experiences with creativity and 
            clean, efficient code.
          </p>

          {/* Social Media Icons - Animated */}
          <motion.div 
            className="social-icons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <a href="https://www.facebook.com/share/1YNKtEtQC9/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/its.llanaaa_/profilecard/?igsh=MTM0MnhydGZkN3FweA==" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
          </motion.div>

          {/* Animated Button */}
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {/* <a href="#portfolio" className="cta-button">My Portfolio</a> */}
          </motion.div>
        </motion.div>

        {/* Right Side - Animated Image */}
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="image-bg">
            <img src={defaultPhoto} alt="Allana Shenelle" className="hero-photo" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;