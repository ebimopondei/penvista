import { Linkedin, Twitter, Instagram, Send, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          
          <div className="footer-brand">
            <div className="logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="var(--primary)" />
                <path d="M2 17L12 22L22 17" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="logo-text">PENVISTA</span>
            </div>
            <p className="brand-desc">The business hub of immigration and residence.</p>
            
            <div className="brand-contact">
              <div className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>London, United Kingdom</span>
              </div>
              <div className="contact-item">
                <Mail size={16} className="contact-icon" />
                <span>hello@penvista.com</span>
              </div>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>ABOUT US</h4>
              <ul>
                <li><a href="#">Who We Are</a></li>
                <li><a href="#">Why Choose Us</a></li>
                <li><a href="#">How It Works</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>PROGRAMMES</h4>
              <ul>
                <li><a href="#">Citizenship</a></li>
                <li><a href="#">Residency</a></li>
                <li><a href="#">Real Estate</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>RESOURCES</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Testimonials</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>Subscribe to our Newsletter</h4>
            <div className="newsletter-input">
              <input type="email" placeholder="Email Address" />
              <button className="btn-primary"><Send size={16} /> Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Penvista. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-icon"><Linkedin size={18} /></a>
            <a href="#" className="social-icon"><Twitter size={18} /></a>
            <a href="#" className="social-icon"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
