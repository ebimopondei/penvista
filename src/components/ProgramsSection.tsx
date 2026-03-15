import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProgramsSection.css';

const citizenshipPrograms = [
  {
    country: 'Antigua & Barbuda',
    flag: '🇦🇬',
    videoUrl: 'https://www.youtube.com/embed/XqZsoesa55w',
    thumbnail: 'https://img.youtube.com/vi/XqZsoesa55w/hqdefault.jpg',
    feature: [
      "Visa-free travel to 160 Countries",
      "Minimum Investment $230,000"

    ]
  },
  {
    country: 'Dominica',
    flag: '🇩🇲',
    videoUrl: 'https://www.youtube.com/embed/lFm4s50OpwM',
    thumbnail: 'https://img.youtube.com/vi/lFm4s50OpwM/hqdefault.jpg',
    feature: [
      "Visa Free travel to 156 Countries",
      "Minimum Investment $200,000"
    ],

  },
  {
    country: 'Grenada',
    flag: '🇬🇩',
    videoUrl: 'https://www.youtube.com/embed/jfKfPfyJRdk',
    thumbnail: 'https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg',
    feature: [
      "Visa Free travel to 160 Countries",
      "Minimum Investment $235,000"
    ]

  },
  {
    country: 'St. Kitts & Nevis',
    flag: '🇰🇳',
    videoUrl: 'https://www.youtube.com/embed/jfKfPfyJRdk',
    thumbnail: 'https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg',
    feature: [
      "Visa Free travel to 160 Countries",
      "Minimum Investment $235,000"
    ]

  },
  {
    country: 'St. Lucia',
    flag: '🇱🇨',
    videoUrl: 'https://www.youtube.com/embed/jfKfPfyJRdk',
    thumbnail: 'https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg',
    feature: [
      "Visa Free travel to 159 Countries",
      "Minimum Investment $240,000"
    ]

  }
];

const residencyPrograms = [
  {
    country: 'Greece',
    flag: '🇬🇷',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600&auto=format&fit=crop',
    feature: [
      "Visa Free travel to 29 Schengen areas",
      "Minimum Investment $250,000"
    ],
  },
  {
    country: 'Portugal',
    flag: '🇵🇹',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=600&auto=format&fit=crop',
    feature: [
      "Visa Free travel to 29 Schengen areas",
      "Minimum Investment $280,000"
    ],
  },
  {
    country: 'Spain',
    flag: '🇪🇸',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=600&auto=format&fit=crop',
    feature: [
      "Visa Free travel to 29 Schengen areas",
      "Minimum Investment $500,000"
    ],
  },
  {
    country: 'Malta',
    flag: '🇲🇹',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=600&auto=format&fit=crop',
    feature: [
      "Visa Free travel to 29 Schengen areas",
      "Minimum Investment $150,000"
    ],
  },
  {
    country: 'United States',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=600&auto=format&fit=crop',
    feature: [
      "Visa Free travel to 29 Schengen areas",
      "Minimum Investment $800,000"
    ],
  },
];

const ProgramsSection = () => {
  const citizenshipRef = useRef<HTMLDivElement>(null);
  const residencyRef = useRef<HTMLDivElement>(null);
  const [playingVideos, setPlayingVideos] = useState<{[key: number]: boolean}>({});

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
            <h2>Secure a powerful second passport through our <span className='sub'>expertly managed citizenship by investment programs.</span></h2>
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
                  {!playingVideos[index] ? (
                    <div className="video-thumbnail" onClick={() => setPlayingVideos({...playingVideos, [index]: true})}>
                      <img src={program.thumbnail} alt={`${program.country} Video Thumbnail`} />
                      <div className="play-button-overlay">
                        <Play size={24} fill="white" color="white" />
                      </div>
                    </div>
                  ) : (
                    <iframe 
                      src={`${program.videoUrl}?autoplay=1`} 
                      title={`${program.country} Program`} 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
                <div className="card-content">
                  <div className="card-title">
                    <span className="flag">{program.flag}</span>
                    <h3>{program.country}</h3>
                  </div>
                  <p>{program.feature.map((feature, index) => (
                    <p key={index}>{feature}</p>
                  ))}</p>
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
                  <p>{program.feature.map((feature, index) => (
                    <p key={index}>{feature}</p>
                  ))}</p>
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
