import { Calendar, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Background Overlay */}
      {/* <div className="hero-overlay"></div> */}
      
      <div className="container hero-content">
        <motion.div 
          className="hero-text-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Unlock a World of Opportunities with Citizenship and Residency by Investment</h1>
          <p>Secure your future with second passports and global residency options.</p>
          
          <div className="hero-actions">
            <Link to="https://calendly.com/penvistalimited-info/30min?month=2024-12">
              <button className="btn-primary ">
                <Calendar size={18} />  <span className='text-2xl font-bold'>Schedule a Meeting</span>
              </button>
            </Link>
            <a href="#citizenship">
              <button className=" hero-btn-outline ">
                <Package size={18} /> <span className='text-lg font-bold'>Explore Programmes</span>
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
