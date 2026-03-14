import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Background Overlay */}
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <motion.div 
          className="hero-text-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Unlock a World of Opportunities with Citizenship and Residency by Investment</h1>
          <p>Secure your second passport and reshape your future with our expert guidance.</p>
          
          <div className="hero-actions">
            <button className="btn-primary">
              <Calendar size={18} /> Schedule a Meeting
            </button>
            <button className="btn-outline hero-btn-outline">
              Explore Programmes <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Info Cards */}
      <div className="container">
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="stat-card">
            <h3>Over 10k+</h3>
            <p>Positive Reviews</p>
          </div>
          <div className="stat-card">
            <h3>5 Years</h3>
            <p>in Experience</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Success Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
