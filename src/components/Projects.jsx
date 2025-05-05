import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Pokemon Explorer",
            description: "An interactive Pokemon application built with React and Vite that leverages the PokeAPI to display detailed information about Pokemon. Features include searching, filtering, and viewing comprehensive stats for each Pokemon.",
            githubLink: "https://github.com/BoushraAlkie/pokemon",
            demoLink: "https://pokemon-allana-boushra.netlify.app/",
            thumbnail: "/react (1).jpeg"
        },
        {
            id: 2,
            title: "Todo List Application",
            description: "A responsive Todo List application developed with React and Vite that helps users organize their tasks efficiently. Features include adding, editing, and deleting tasks, marking tasks as complete, and filtering tasks by status.",
            githubLink: "https://github.com/BoushraAlkie/todolist",
            demoLink: "https://todolist-allana-boushra.netlify.app/",
            thumbnail: "/react (2).jpeg"
        },
        {
            id: 3,
            title: "SafeNest - Flood Detection System",
            description: "An IoT-based flood detection and monitoring system designed to provide real-time, contactless water level measurements using ultrasonic sensors and ESP32 microcontrollers.",
            githubLink: "https://github.com/username/safenest-flood-detection",
            demoLink: "https://safenest.free.nf/?i=1",
            thumbnail: "/react.jpeg"
        }
    ];

    return (
        <div className="projects-container">
            <motion.h1 
                className="projects-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My Projects
            </motion.h1>
            
            <motion.p 
                className="projects-subtitle"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Here are some of my recent projects
            </motion.p>
            
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div 
                        className="project-card" 
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="project-thumbnail">
                            <img src={project.thumbnail} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <motion.a 
                                    href={project.githubLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="github-link"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    GitHub
                                </motion.a>
                                <motion.a 
                                    href={project.demoLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="demo-link"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Live Demo
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
