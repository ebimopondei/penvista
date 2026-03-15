import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import './Contact.css';

// Using a placeholder image for the antique phones background 
// since it wasn't explicitly found in assets, but we can use an unsplash one for now
const bgImage = "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1600&auto=format&fit=crop"; 
// Alternative dark phone: https://images.unsplash.com/photo-1520697830682-8bc617b07c80

const Contact = () => {
  return (
    <Layout>
      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="contact-hero-overlay"></div>
          <div className="container contact-hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At Penvista, we are dedicated to empowering individuals and families with tailored advisory solutions that drive value and satisfaction.
            </motion.p>
          </div>
        </section>

        {/* Info Cards Section */}
        <section className="contact-info-section container">
            <div className="contact-cards">
              <motion.div 
                className="info-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="info-icon">
                  <MapPin size={28} />
                </div>
                <h3>Our Office</h3>
                <p>6 Sirakoro Street off Blantyre street,<br/>Wuse II, Abuja, Nigeria.</p>
              </motion.div>

              <motion.div 
                className="info-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="info-icon">
                  <Phone size={28} />
                </div>
                <h3>Customer Care</h3>
                <p>+234 915 - 084 - 6333</p>
              </motion.div>

              <motion.div 
                className="info-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="info-icon">
                  <Mail size={28} />
                </div>
                <h3>Email Address</h3>
                <p>info@penvistalimited.com</p>
              </motion.div>
            </div>
        </section>

        {/* Main Form Section */}
        <section className="contact-form-section container">
          <div className="contact-form-grid">
            {/* Left Content */}
            <motion.div 
              className="contact-text-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="contact-pill">Contact us</span>
              <h2>Get in Touch</h2>
              <p>
                Our skilled, multilingual team brings a wealth of experience to your immigration journey. With legal experts and professionals across our international network, we offer personalized service tailored to your needs.
              </p>
              <div className="contact-curved-arrow">
                 <svg width="250" height="100" viewBox="0 0 250 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 25 C 80 15, 120 120, 160 50 C 180 15, 220 50, 240 70 M 230 60 L 245 75 L 225 80" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="paint0_linear" x1="0" y1="0" x2="250" y2="100" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#a3b1c6" />
                        <stop offset="0.5" stopColor="#5d6576" />
                        <stop offset="1" stopColor="var(--primary)" />
                      </linearGradient>
                    </defs>
                  </svg>
              </div>
            </motion.div>

            {/* Right Form Card */}
            <motion.div 
              className="contact-form-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Let's Talk</h3>
              <p className="form-subtitle">Fill out the form below, and let us help you unlock the benefits of global citizenship today!</p>
              
              <form className="talk-form">
                <div className="form-row">
                  <input type="text" placeholder="Full name" required />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email address" required />
                </div>
                <div className="form-row">
                  <input type="tel" placeholder="Phone number" required />
                </div>
                <div className="form-row">
                  <textarea placeholder="Enter your message" rows={3} required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <Calendar size={18} />
                  Contact us
                </button>
              </form>
            </motion.div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Contact;
