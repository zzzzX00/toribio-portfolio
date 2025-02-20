import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); 
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <Link to="/" className="navbar-logo">AT</Link>
            <ul className="navbar-links">
                <li><Link to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</Link></li>
                <li><Link to="/about-me" className={({ isActive }) => isActive ? "active-link" : ""}>About</Link></li>
                <li><Link to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>Projects</Link></li>
                <li><Link to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;