import { Linkedin, Mail, Phone } from 'lucide-react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          
          <div className="footer-brand">
            <Link to="/" className="logo footer-logo">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="var(--primary)" />
                <path d="M2 17L12 22L22 17" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="logo-text">PENVISTA</span>
            </Link>
            <p className="brand-address">6 Sirakoro Street off Blantyre street, Wuse II, Abuja,Nigeria.</p>
            
            <div className="brand-contact">
              <a href="mailto:info@penvistalimited.com" className="contact-item">
                <Mail size={18} className="contact-icon" />
                <span>info@penvistalimited.com</span>
              </a>
              <a href="tel:+2349150846333" className="contact-item">
                <Phone size={18} className="contact-icon" />
                <span>+234 915 - 084 - 6333</span>
              </a>
            </div>
          </div>

          <div className="footer-right-content">
            <div className="footer-links-group">
              <div className="footer-col">
                <h4>ABOUT US</h4>
                <ul>
                  <li><Link to="/about">About Penvista</Link></li>
                  <li><a href="/about#our-team">Advisory Board</a></li>
                  <li><a href="/about#our-vision-mission">Our Vision</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>PROGRAMMES</h4>
                <ul>
                  <li><a href="/#citizenship">Citizenship</a></li>
                  <li><a href="/#residency">Residency</a></li>
                  <li><Link to="/services">Our Services</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>RESOURCES</h4>
                <ul>
                  <li><Link to="/#faq">FAQ</Link></li> {/* Linking to contact for FAQ for now or specific FAQ page if available */}
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/#testimonials">Testimonials</Link></li>
                </ul>
              </div>
            </div>

            <div className="footer-newsletter">
              <h4>Subscribe to our Newsletter</h4>
              <form className="newsletter-input-container" onSubmit={(e) => e.preventDefault()}>
                <div className="newsletter-input-wrapper">
                  <input type="email" placeholder="Enter your email" required />
                  <button type="submit" className="btn-newsletter">
                    <Mail size={16} /> Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/penvistalimited" className="social-icon" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
          </div>
          
          <div className="footer-copyright">
            <p>&copy; Penvista {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
