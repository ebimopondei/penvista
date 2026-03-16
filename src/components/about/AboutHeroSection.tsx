import image from '../../assets/images/zXCUeWBk2kmedhzNiDKTosdtdo.png';
import { motion } from 'framer-motion';
import { Calendar, Package } from 'lucide-react';
import './AboutHeroSection.css';
import { Link } from 'react-router-dom';

export default function AboutHeroSection(){
    return (
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-image">
            <img src={image} alt="Penvista Global Citizenship" />
            <div className="overlay"></div>
          </div>
          <div className="about-hero-content">
            <motion.div 
              className="badge"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              We set out to build a better path to global citizenship
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At Penvista, we're dedicated to guiding you through the complex world of citizenship and residency options, opening doors to global opportunities and a brighter future.
            </motion.p>
            <motion.div
              className="about-hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link to="https://calendly.com/penvistalimited-info/30min?month=2024-12">
                <button className="btn-primary"><Calendar size={18} /> Schedule a Meeting</button>
              </Link>
              <Link to="/about">
                <button className="btn-outline"><Package size={18} /> Explore Programmes</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    )
}