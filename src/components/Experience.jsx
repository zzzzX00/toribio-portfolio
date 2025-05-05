import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            company: "INNOVATESPHERE TECHNOLOGIES",
            role: "Project Manager",
            duration: "2023 - Present",
            description: "Leading cross-functional teams in the development and implementation of innovative software solutions. Responsible for project planning, resource allocation, and ensuring timely delivery of high-quality products that meet client requirements.",
            skills: ["Project Management", "Agile Methodologies", "Team Leadership", "Client Relations", "Resource Planning"]
        }
    ];

    return (
        <div className="experience-container">
            <motion.h1 
                className="experience-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Professional Experience
            </motion.h1>
            
            <motion.p 
                className="experience-subtitle"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                My journey in software engineering
            </motion.p>
            
            <div className="experience-timeline">
                {experiences.map((exp, index) => (
                    <motion.div 
                        className="experience-card" 
                        key={exp.id}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                        <div className="experience-header">
                            <h3 className="experience-role">{exp.role}</h3>
                            <span className="experience-duration">{exp.duration}</span>
                        </div>
                        <h4 className="experience-company">{exp.company}</h4>
                        <p className="experience-description">{exp.description}</p>
                        <div className="experience-skills">
                            {exp.skills.map((skill, idx) => (
                                <motion.span 
                                    className="skill-tag" 
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.5 + index * 0.2 + idx * 0.05 }}
                                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
