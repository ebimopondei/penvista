import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProgramsSection.css';

const citizenshipPrograms = [
  {
    country: 'Antigua & Barbuda',
    flag: '🇦🇬',
    videoUrl: 'https://www.youtube.com/embed/XqZsoesa55w',
    description: 'Visa-free travel to 150+ countries. Processing timeline: 3-4 months',
  },
  {
    country: 'Dominica',
    flag: '🇩🇲',
    videoUrl: 'https://www.youtube.com/embed/lFm4s50OpwM',
    description: 'Visa-free travel to 140+ countries. Processing timeline: 3-4 months',
  },
  {
    country: 'St. Kitts & Nevis',
    flag: '🇰🇳',
    videoUrl: 'https://www.youtube.com/embed/jfKfPfyJRdk',
    description: 'Visa-free travel to 150+ countries. Processing timeline: 3-4 months',
  }
];

const residencyPrograms = [
  {
    country: 'Greece',
    flag: '🇬🇷',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600&auto=format&fit=crop',
    description: 'Visa-free travel to 26 Schengen countries. Processing timeline: 2-3 months',
  },
  {
    country: 'Portugal',
    flag: '🇵🇹',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=600&auto=format&fit=crop',
    description: 'Visa-free travel to 26 Schengen countries. Processing timeline: 12-18 months',
  },
  {
    country: 'Spain',
    flag: '🇪🇸',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=600&auto=format&fit=crop',
    description: 'Visa-free travel to 26 Schengen countries. Processing timeline: 5-6 months',
  }
];

const ProgramsSection = () => {
  const citizenshipRef = useRef<HTMLDivElement>(null);
  const residencyRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * (window.innerWidth < 768 ? 1 : 0.4);
      ref.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="programs">

      {/* Floating Info Cards */}
      <div className="programs-stats container stats-container">
        <div className="hero-stats-wrapper">
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="stat-card">
              <div className="stat-card-top">
                <h3>Over 10K +</h3>
              </div>
              <div className="stat-card-bottom">
                <p>Families Advised</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card-top">
                <h3>5 Years</h3>
              </div>
              <div className="stat-card-bottom">
                <p>In Experience</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card-top">
                <h3>100%</h3>
              </div>
              <div className="stat-card-bottom">
                <p>Success rate</p>
              </div>
            </div>
          </motion.div>

          {/* Mobile slider controls (visual only since CSS scroll-snap handles interaction natively) */}
          <div className="mobile-stats-nav">
              <button className="stats-nav-btn prev">
                <ChevronLeft size={20} color="white" />
              </button>
              <button className="stats-nav-btn next">
                <ChevronRight size={20} color="white" />
              </button>
          </div>
        </div>
      </div>


      <div className="container">
        
        {/* Citizenship Section */}
        <div className="program-category">
          <motion.div 
            className="program-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Citizenship by Investment</span>
            <h2>Secure a powerful second passport through our expertly managed citizenship by investment programs.</h2>
          </motion.div>

          <div className="programs-slider" ref={citizenshipRef}>
            {citizenshipPrograms.map((program, index) => (
              <motion.div 
                key={index}
                className="program-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="card-video">
                  <iframe 
                    src={program.videoUrl} 
                    title={`${program.country} Program`} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    <span className="flag">{program.flag}</span>
                    <h3>{program.country}</h3>
                  </div>
                  <p>{program.description}</p>
                  <button className="btn-outline card-btn">Explore programme <ArrowRight size={16} /></button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn" onClick={() => scrollSlider(citizenshipRef, 'left')}><ChevronLeft size={20} /></button>
            <button className="carousel-btn" onClick={() => scrollSlider(citizenshipRef, 'right')}><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="programs-divider"></div>

        {/* Residency Section */}
        <div className="program-category">
          <motion.div 
            className="program-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Residency by Investment</span>
            <h2>Transform property investments into life-changing residency opportunities across elite global destinations.</h2>
          </motion.div>

          <div className="programs-slider" ref={residencyRef}>
            {residencyPrograms.map((program, index) => (
              <motion.div 
                key={index}
                className="program-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="card-image">
                  <img src={program.image} alt={program.country} />
                </div>
                <div className="card-content">
                  <div className="card-title">
                    <span className="flag">{program.flag}</span>
                    <h3>{program.country}</h3>
                  </div>
                  <p>{program.description}</p>
                  <button className="btn-outline card-btn">Explore programme <ArrowRight size={16} /></button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn" onClick={() => scrollSlider(residencyRef, 'left')}><ChevronLeft size={20} /></button>
            <button className="carousel-btn" onClick={() => scrollSlider(residencyRef, 'right')}><ChevronRight size={20} /></button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;
