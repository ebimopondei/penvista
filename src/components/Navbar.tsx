import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

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
                      <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop" alt="About Us" />
                      <div className="mega-card-overlay">
                        <span>About Us</span>
                      </div>
                    </Link>
                    <Link to="/about" className="mega-card">
                      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" alt="Our Values" />
                      <div className="mega-card-overlay">
                        <span>Our Values</span>
                      </div>
                    </Link>
                    <Link to="/about" className="mega-card">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" alt="Our Team" />
                      <div className="mega-card-overlay">
                        <span>Our Team</span>
                      </div>
                    </Link>
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
                    <Link to="#" className="mega-card flag-card">
                      <img src="https://flagcdn.com/w640/ag.png" alt="Antigua & Barbuda" className="flag-img" />
                      <div className="flag-texture"></div>
                      <div className="mega-card-overlay">
                        <span>Antigua & Barbuda</span>
                      </div>
                      <div className="flag-icon-expand">
                        <ArrowUpRight size={14} />
                      </div>
                    </Link>
                    <Link to="#" className="mega-card flag-card">
                      <img src="https://flagcdn.com/w640/dm.png" alt="Dominica" className="flag-img" />
                      <div className="flag-texture"></div>
                      <div className="mega-card-overlay">
                        <span>Dominica</span>
                      </div>
                    </Link>
                    <Link to="#" className="mega-card flag-card">
                      <img src="https://flagcdn.com/w640/gd.png" alt="Grenada" className="flag-img" />
                      <div className="flag-texture"></div>
                      <div className="mega-card-overlay">
                        <span>Grenada</span>
                      </div>
                    </Link>
                    <Link to="#" className="mega-card flag-card">
                      <img src="https://flagcdn.com/w640/lc.png" alt="St. Lucia" className="flag-img" />
                      <div className="flag-texture"></div>
                      <div className="mega-card-overlay">
                        <span>St. Lucia</span>
                      </div>
                    </Link>
                    <Link to="#" className="mega-card flag-card">
                      <img src="https://flagcdn.com/w640/kn.png" alt="St Kitts & Nevis" className="flag-img" />
                      <div className="flag-texture"></div>
                      <div className="mega-card-overlay">
                        <span>St Kitts & Nevis</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <a href="#" className="nav-link">Residency <ChevronDown size={14} /></a>
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
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <a href="#">Citizenship</a>
          <a href="#">Residency</a>
          <a href="#">Services</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
