import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

import aboutUsImg from '../assets/images/4An3w4Fd6p6btdl6bqIdnFzNrc.png';
import aboutOurValuesImg from '../assets/images/1aCop2a0TYiA8V50usMqj70NJw.png';
import aboutOurTeamImg from '../assets/images/pVu2WHc66ylHtC01MPSAuEuRNaI.png';

import antiguaFlagImg from '../assets/images/ZeBZqN8NpXkSxrR6YZlqRycxFU.png';
import dominicaFlagImg from '../assets/images/wLOsBhANAdRhbfacePHntZzVw.png';
import grenadaFlagImg from '../assets/images/GEFk6QPCwavYiJ7x8Ae95qlisG8.png';
import stLuciaFlagImg from '../assets/images/4Myq6r9XpFgPQjwIV9kFlGraZY0.png';
import stKittsFlagImg from '../assets/images/eeUc1jJ4QnQaRJubkyXP5kmDQ.png';

import spainFlagImg from '../assets/images/4zG3QOk3DC0X8YD5fs44oCSEdQ.png';
import usaFlagImg from '../assets/images/Du5P7E3cyN63wFuxNpOcIIN1jKg.png';
import portugalFlagImg from '../assets/images/KQnzZPUhdx66CUFR9kpW4CK63fU.png';
import greeceFlagImg from '../assets/images/pe6PofMhOLNLYkUoedeCijwzsbc.png';
import maltaFlagImg from '../assets/images/r8AhRs6cQOyEjxNuqY0KH2p6yw.png';

import postCitizenSupportImg from '../assets/images/1aCop2a0TYiA8V50usMqj70NJw.png';
import realEstateInvestmentImg from '../assets/images/kBQOMLrGN8EHXcPJTLbpfXAig.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${(isScrolled || !isHomePage) ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="var(--primary)" />
            <path d="M2 17L12 22L22 17" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="logo-text">PENVISTA</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <div className="nav-links-wrapper">
            <div 
              className="nav-item-dropdown" 
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/about" className="nav-link">About us <ChevronDown size={14} className={activeDropdown === 'about' ? 'rotate-180' : ''} /></Link>
              
              {/* Mega Menu */}
              {activeDropdown === 'about' && (
                <div className="mega-menu glass-panel">
                  <div className="mega-menu-grid">
                    <Link to="/about" className="mega-card">
                      <img src={aboutUsImg} alt="About Us" />
                      <div className="mega-card-overlay">
                        <span>About Us</span>
                      </div>
                    </Link>
                    <a href="/about#our-values" className="mega-card">
                      <img src={aboutOurValuesImg} alt="Our Values" />
                      <div className="mega-card-overlay">
                        <span>Our Values</span>
                      </div>
                    </a>
                    <a href="/about#our-team" className="mega-card">
                      <img src={aboutOurTeamImg} alt="Our Team" />
                      <div className="mega-card-overlay">
                        <span>Our Team</span>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div 
              className="nav-item-dropdown" 
              onMouseEnter={() => setActiveDropdown('citizenship')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#" className="nav-link">Citizenship <ChevronDown size={14} className={activeDropdown === 'citizenship' ? 'rotate-180' : ''} /></a>
              
              {/* Mega Menu */}
              {activeDropdown === 'citizenship' && (
                <div className="mega-menu citizenship-menu glass-panel">
                  <div className="mega-menu-header">
                    <h4>The Carribean</h4>
                  </div>
                  <div className="mega-menu-grid citizenship-grid">
                    <Link to="/citizenship/antigua-barbuda" className="mega-card flag-card" onClick={() => setActiveDropdown(null)}>
                      <img src={antiguaFlagImg} alt="Antigua & Barbuda" className="flag-img" />
                      <div className="flag-texture"></div>
                      <div className="mega-card-overlay">
                        <span>Antigua & Barbuda</span>
                      </div>
                      <div className="flag-icon-expand">
                        <ArrowUpRight size={14} />
                      </div>
                    </Link>
                    <Link to="/citizenship/dominica" className="mega-card flag-card">
                      <img src={dominicaFlagImg} alt="Dominica" className="flag-img" />
                      <div className="flag-texture"></div>
                      <div className="mega-card-overlay">
                        <span>Dominica</span>
                      </div>
                    </Link>
                    <Link to="/citizenship/grenada" className="mega-card flag-card">
                      <img src={grenadaFlagImg} alt="Grenada" className="flag-img" />
                      <div className="flag-texture"></div>
                      <div className="mega-card-overlay">
                        <span>Grenada</span>
                      </div>
                    </Link>
                    <Link to="/citizenship/st-lucia" className="mega-card flag-card">
                      <img src={stLuciaFlagImg} alt="St. Lucia" className="flag-img" />
                      <div className="flag-texture"></div>
                      <div className="mega-card-overlay">
                        <span>St. Lucia</span>
                      </div>
                    </Link>
                    <Link to="/citizenship/st-kitts" className="mega-card flag-card">
                      <img src={stKittsFlagImg} alt="St Kitts & Nevis" className="flag-img" />
                      <div className="flag-texture"></div>
                      <div className="mega-card-overlay">
                        <span>St Kitts & Nevis</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div 
              className="nav-item-dropdown" 
              onMouseEnter={() => setActiveDropdown('residency')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#" className="nav-link">Residency <ChevronDown size={14} className={activeDropdown === 'residency' ? 'rotate-180' : ''} /></a>
              
              {/* Mega Menu */}
              {activeDropdown === 'residency' && (
                <div className="mega-menu citizenship-menu glass-panel">
                  <div className="mega-menu-header">
                    <h4>Europe & America</h4>
                  </div>
                  <div className="mega-menu-grid citizenship-grid">
                    <Link to="/residency/greece" className="mega-card flag-card" onClick={() => setActiveDropdown(null)}>
                      <img src={greeceFlagImg} alt="Greece" className="flag-img" />
                      <div className="flag-texture"></div>
                      <div className="mega-card-overlay">
                        <span>Greece</span>
                      </div>
                      <div className="flag-icon-expand">
                        <ArrowUpRight size={14} />
                      </div>
                    </Link>
                    <Link to="/residency/malta" className="mega-card flag-card" onClick={() => setActiveDropdown(null)}>
                      <img src={maltaFlagImg} alt="Malta" className="flag-img" />
                      <div className="flag-texture"></div>
                      <div className="mega-card-overlay">
                        <span>Malta</span>
                      </div>
                    </Link>
                    <Link to="/residency/portugal" className="mega-card flag-card" onClick={() => setActiveDropdown(null)}>
                      <img src={portugalFlagImg} alt="Portugal" className="flag-img" />
                      <div className="flag-texture"></div>
                      <div className="mega-card-overlay">
                        <span>Portugal</span>
                      </div>
                    </Link>
                    <Link to="/residency/spain" className="mega-card flag-card" onClick={() => setActiveDropdown(null)}>
                      <img src={spainFlagImg} alt="Spain" className="flag-img" />
                      <div className="flag-texture"></div>
                      <div className="mega-card-overlay">
                        <span>Spain</span>
                      </div>
                    </Link>
                    <Link to="/residency/united-states" className="mega-card flag-card" onClick={() => setActiveDropdown(null)}>
                      <img src={usaFlagImg} alt="United States" className="flag-img" />
                      <div className="flag-texture"></div>
                      <div className="mega-card-overlay">
                        <span>United States</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div 
              className="nav-item-dropdown" 
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/services" className="nav-link">Services <ChevronDown size={14} className={activeDropdown === 'services' ? 'rotate-180' : ''} /></Link>
              
              {/* Mega Menu */}
              {activeDropdown === 'services' && (
                <div className="mega-menu services-menu glass-panel">
                  <div className="mega-menu-grid">
                    <a href="/services#post-citizenship" className="mega-card service-mega-card" onClick={() => setActiveDropdown(null)}>
                      <img src={postCitizenSupportImg} alt="Post Citizenship Support" />
                      <div className="mega-card-overlay">
                        <span>Post Citizenship Support</span>
                      </div>
                    </a>
                    <a href="/services#real-estate" className="mega-card service-mega-card" onClick={() => setActiveDropdown(null)}>
                      <img src={realEstateInvestmentImg} alt="Real Estate Investment" />
                      <div className="mega-card-overlay">
                        <span>Real Estate Investment</span>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="nav-actions">
          <Link to="/contact" className="btn-outline contact-btn">
            <Phone size={16} /> Contact Us
          </Link>
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
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <a href="#">Citizenship</a>
          <a href="#">Residency</a>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
