import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";
import profilePic from '../assets/allana.jpg'; 
import Navbar from './Navbar';

const AboutMe = () => {
  // Skills data with icons and proficiency levels
  const skills = [
    { name: "HTML", icon: "fab fa-html5", proficiency: 90 },
    { name: "CSS", icon: "fab fa-css3-alt", proficiency: 85 },
    { name: "JavaScript", icon: "fab fa-js", proficiency: 80 },
    { name: "React", icon: "fab fa-react", proficiency: 75 },
    { name: "Bootstrap", icon: "fab fa-bootstrap", proficiency: 85 },
    { name: "UI/UX", icon: "fab fa-css3", proficiency: 80 },
  ];

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
          <h3>Web Developer | Overthinker</h3>
          <p>
            Hi! I'm <strong>Shane</strong>, a <strong>21-year-old</strong> BSIT student at 
            <strong> Western Mindanao State University</strong>. I love connecting with people who value relationships and enjoy deep 
            conversations that inspire growth and learning. Passionate about <strong>technology and creativity</strong>, With a strong foundation
            in web development, I aim to create seamless, responsive designs.
          </p>
          
          {/* Skills Section */}
          <motion.div 
            className="skills-section"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h3>My Skills</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <motion.div 
                  className="skill-item" 
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;