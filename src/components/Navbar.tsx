import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="var(--primary)" />
            <path d="M2 17L12 22L22 17" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="logo-text">PENVISTA</span>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <a href="#" className="nav-link">About Us</a>
          <div className="nav-item-dropdown">
            <a href="#" className="nav-link">Citizenship <ChevronDown size={14} /></a>
          </div>
          <div className="nav-item-dropdown">
            <a href="#" className="nav-link">Residency <ChevronDown size={14} /></a>
          </div>
          <div className="nav-item-dropdown">
            <a href="#" className="nav-link">Services <ChevronDown size={14} /></a>
          </div>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="nav-actions">
          <a href="#" className="btn-outline contact-btn">
            <Phone size={16} /> Contact Us
          </a>
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#">About Us</a>
          <a href="#">Citizenship</a>
          <a href="#">Residency</a>
          <a href="#">Services</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
