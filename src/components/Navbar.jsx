import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo */}
                <Link to="/" className="navbar-logo">AT</Link>

                {/* Menu Icon (Hamburger) */}
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Navbar Links */}
                <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    <li><Link to="/" className={location.pathname === '/' ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about-me" className={location.pathname === '/about-me' ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link to="/projects" className={location.pathname === '/projects' ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>Projects</Link></li>
                    <li><Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''} onClick={() => setMenuOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;