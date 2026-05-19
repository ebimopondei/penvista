import { useEffect } from 'react';
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

import logo from '../assets/images/LEQ72kcY1q7YhhSNOjk1Fl5OKnM.svg';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const header = document.getElementById('main-navbar');
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 50 || !isHomePage) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const toggleMobileMenu = () => {
    const menu = document.getElementById('mobile-menu');
    const toggleBtn = document.getElementById('mobile-toggle-btn');
    const body = document.body;
    if (menu && toggleBtn) {
      const isOpen = menu.classList.toggle('open');
      toggleBtn.setAttribute('data-open', String(isOpen));
      
      if (isOpen) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    }
  };

  const closeMobileMenu = () => {
    const menu = document.getElementById('mobile-menu');
    const toggleBtn = document.getElementById('mobile-toggle-btn');
    const body = document.body;
    if (menu) menu.classList.remove('open');
    if (toggleBtn) toggleBtn.setAttribute('data-open', 'false');
    body.style.overflow = '';
  };

  const toggleMobileSubMenu = (e: React.MouseEvent) => {
    const parent = e.currentTarget.parentElement;
    if (parent) {
      parent.classList.toggle('submenu-open');
    }
  };

  return (
    <header id="main-navbar" className={`navbar ${!isHomePage ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="" />
          <span className="logo-text">PENVISTA</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <div className="nav-links-wrapper">
            <div className="nav-item-dropdown">
              <Link to="/about" className="nav-link">About us <ChevronDown size={14} /></Link>
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
            </div>

            <div className="nav-item-dropdown">
              <a href="#" className="nav-link">Citizenship <ChevronDown size={14} /></a>
              <div className="mega-menu citizenship-menu glass-panel">
                <div className="mega-menu-header">
                  <h4>The Carribean</h4>
                </div>
                <div className="mega-menu-grid citizenship-grid">
                  <Link to="/citizenship/antigua-barbuda" className="mega-card flag-card">
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
            </div>
            <div className="nav-item-dropdown">
              <a href="#" className="nav-link">Residency <ChevronDown size={14} /></a>
              <div className="mega-menu citizenship-menu glass-panel">
                <div className="mega-menu-header">
                  <h4>Europe & America</h4>
                </div>
                <div className="mega-menu-grid citizenship-grid">
                  <Link to="/residency/greece" className="mega-card flag-card">
                    <img src={greeceFlagImg} alt="Greece" className="flag-img" />
                    <div className="flag-texture"></div>
                    <div className="mega-card-overlay">
                      <span>Greece</span>
                    </div>
                    <div className="flag-icon-expand">
                      <ArrowUpRight size={14} />
                    </div>
                  </Link>
                  <Link to="/residency/malta" className="mega-card flag-card">
                    <img src={maltaFlagImg} alt="Malta" className="flag-img" />
                    <div className="flag-texture"></div>
                    <div className="mega-card-overlay">
                      <span>Malta</span>
                    </div>
                  </Link>
                  <Link to="/residency/portugal" className="mega-card flag-card">
                    <img src={portugalFlagImg} alt="Portugal" className="flag-img" />
                    <div className="flag-texture"></div>
                    <div className="mega-card-overlay">
                      <span>Portugal</span>
                    </div>
                  </Link>
                  <Link to="/residency/spain" className="mega-card flag-card">
                    <img src={spainFlagImg} alt="Spain" className="flag-img" />
                    <div className="flag-texture"></div>
                    <div className="mega-card-overlay">
                      <span>Spain</span>
                    </div>
                  </Link>
                  <Link to="/residency/usa" className="mega-card flag-card">
                    <img src={usaFlagImg} alt="United States" className="flag-img" />
                    <div className="flag-texture"></div>
                    <div className="mega-card-overlay">
                      <span>United States</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="nav-item-dropdown">
              <Link to="/services" className="nav-link">Services <ChevronDown size={14} /></Link>
              <div className="mega-menu services-menu glass-panel">
                <div className="mega-menu-grid">
                  <a href="/services#post-citizenship" className="mega-card service-mega-card">
                    <img src={postCitizenSupportImg} alt="Post Citizenship Support" />
                    <div className="mega-card-overlay">
                      <span>Post Citizenship Support</span>
                    </div>
                  </a>
                  <a href="/services#real-estate" className="mega-card service-mega-card">
                    <img src={realEstateInvestmentImg} alt="Real Estate Investment" />
                    <div className="mega-card-overlay">
                      <span>Real Estate Investment</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="nav-actions">
          <Link to="/contact" className="btn-outline contact-btn">
            <Phone size={16} /> Contact Us
          </Link>
          <button 
            id="mobile-toggle-btn"
            className="mobile-toggle" 
            onClick={toggleMobileMenu}
            data-open="false"
          >
            <Menu size={24} color="#fff" className="menu-icon-open" />
            <X size={24} color="#fff" className="menu-icon-close" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div id="mobile-menu" className="mobile-menu">
        <div className="mobile-menu-inner container">
          <div className="mobile-menu-nav">
            <div className="mobile-nav-item">
              <Link to="/about" onClick={closeMobileMenu} className="mobile-nav-link">About Us</Link>
            </div>

            <div className="mobile-nav-item has-submenu">
              <button className="mobile-nav-link" onClick={toggleMobileSubMenu}>
                Citizenship <ChevronDown size={18} />
              </button>
              <div className="mobile-submenu">
                <div className="mobile-submenu-grid">
                  <Link to="/citizenship/antigua-barbuda" onClick={closeMobileMenu}>Antigua & Barbuda</Link>
                  <Link to="/citizenship/dominica" onClick={closeMobileMenu}>Dominica</Link>
                  <Link to="/citizenship/grenada" onClick={closeMobileMenu}>Grenada</Link>
                  <Link to="/citizenship/st-lucia" onClick={closeMobileMenu}>St. Lucia</Link>
                  <Link to="/citizenship/st-kitts" onClick={closeMobileMenu}>St Kitts & Nevis</Link>
                </div>
              </div>
            </div>

            <div className="mobile-nav-item has-submenu">
              <button className="mobile-nav-link" onClick={toggleMobileSubMenu}>
                Residency <ChevronDown size={18} />
              </button>
              <div className="mobile-submenu">
                <div className="mobile-submenu-grid">
                  <Link to="/residency/greece" onClick={closeMobileMenu}>Greece</Link>
                  <Link to="/residency/malta" onClick={closeMobileMenu}>Malta</Link>
                  <Link to="/residency/portugal" onClick={closeMobileMenu}>Portugal</Link>
                  <Link to="/residency/spain" onClick={closeMobileMenu}>Spain</Link>
                  <Link to="/residency/usa" onClick={closeMobileMenu}>United States</Link>
                </div>
              </div>
            </div>

            <div className="mobile-nav-item has-submenu">
              <button className="mobile-nav-link" onClick={toggleMobileSubMenu}>
                Services <ChevronDown size={18} />
              </button>
              <div className="mobile-submenu">
                <div className="mobile-submenu-grid">
                  <a href="/services#post-citizenship" onClick={closeMobileMenu}>Post Citizenship Support</a>
                  <a href="/services#real-estate" onClick={closeMobileMenu}>Real Estate Investment</a>
                </div>
              </div>
            </div>

            <div className="mobile-nav-item">
              <Link to="/contact" onClick={closeMobileMenu} className="mobile-nav-link">Contact Us</Link>
            </div>
          </div>

          <div className="mobile-menu-footer">
            <div className="mobile-contact-info">
              <p>Email: info@penvista.limited</p>
              <p>Phone: +1 234 567 890</p>
            </div>
            <div className="mobile-social-links">
              {/* Add social media links here if needed */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
