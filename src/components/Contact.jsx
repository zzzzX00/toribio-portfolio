import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import './Contact.css';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const email = "dnd255262@gmail.com";
    
    const socialLinks = [
        {
            id: 1,
            name: "GitHub",
            url: "https://github.com/zzzzX00/",
            icon: <FaGithub />
        },
        {
            id: 2,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/allana-shenelle-toribio-805721351/",
            icon: <FaLinkedin />
        },
        {
            id: 3,
            name: "Facebook",
            url: "https://www.facebook.com/allana.asilo",
            icon: <FaFacebook />
        }
    ];
    
    return (
        <div className="contact-container">
            <motion.h1 
                className="contact-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Get In Touch
            </motion.h1>
            
            <motion.p 
                className="contact-subtitle"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Feel free to reach out for collaborations or just a friendly hello
            </motion.p>
            
            <motion.div 
                className="contact-email-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
            >
                <FaEnvelope className="email-icon" />
                <a href={`mailto:${email}`} className="contact-email">{email}</a>
            </motion.div>
            
            <div className="social-links">
                {socialLinks.map((link, index) => (
                    <motion.a 
                        key={link.id} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label={link.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    >
                        {link.icon}
                        <span className="social-name">{link.name}</span>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Contact;
