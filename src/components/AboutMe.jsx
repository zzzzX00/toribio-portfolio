import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";
import profilePic from '../assets/allana.jpg'; 
import Navbar from './Navbar';

const AboutMe = () => {
  return (
    <section className="about-me">
      <Navbar />

      <div className="about-container">
        {/* Left - Image Section */}
        <motion.div
        className="about-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={profilePic} alt="Shane's Profile" />
        </motion.div>

        {/* Right - Text Section */}
        <motion.div
          className="about-content"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About <span>Me</span>
          </motion.h1>
          <h3>Web Developer | Over Thinker</h3>
          <p>
            Hi! I'm <strong>Shane</strong>, a <strong>21-year-old</strong> BSIT student at 
            <strong> Western Mindanao State University</strong>. I love connecting with people who value relationships and enjoy deep 
            conversations that inspire growth and learning. Passionate about <strong>technology and creativity</strong>, With a strong foundation
            in web development, I aim to create seamless, responsive designs.
          </p>
          <motion.a
            href="#contact"
            className="cta-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;