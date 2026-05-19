
import { ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import './ProgramsSection.css';
import antiguaImg from '../assets/images/B4mdtRSgsphYROOzk6tEAsMo17f5.png';
import dominicaImg from '../assets/images/79GZ2luNSOrtht7JE6RYHJZP84.png';
import grenadaImg from '../assets/images/LcfkZvpm1r7ud6N5yIrN7gYu7mg.png';
import stKittsImg from '../assets/images/ZJaa4qJlJW5wL3CtRltsKGjpSOU.png';
import stLuciaImg from '../assets/images/qOomg3KzwQpLRBEbyFTFqC7t1c.png';

import greeceImg from '../assets/images/7kLScwXLFKhcjCZlcglWH74.png';
import portugalImg from '../assets/images/F3M7aDYY07HgDkAvSk6A0yAD1XI.png';
import spainImg from '../assets/images/B01umKNyNbBVvybXP0IFqpGfKg.png';
import maltaImg from '../assets/images/qVaq9IScnmoZssQCdSQDeXe92w.png';
import usaImg from '../assets/images/9BTDZfGvRUMLKB3S2fFq8DzC3h8.png';
import { Link } from 'react-router-dom';
interface programs {
    country: string;
    flag: string;
    videoUrl: string;
    thumbnail: string;
    feature: string[];
    link: string;
}
const citizenshipPrograms: programs[] = [
  {
    country: 'Antigua & Barbuda',
    flag: '🇦🇬',
    videoUrl: 'https://www.youtube.com/embed/XqZsoesa55w',
    thumbnail: antiguaImg,
    feature: [
      "Visa-free travel to 160 Countries",
      "Minimum Investment $230,000"

    ],
    link: "antigua-barbuda"
  },
  {
    country: 'Dominica',
    flag: '🇩🇲',
    videoUrl: 'https://www.youtube.com/embed/lFm4s50OpwM',
    thumbnail: dominicaImg,
    feature: [
      "Visa Free travel to 156 Countries",
      "Minimum Investment $200,000"
    ],
    link: "dominica"

  },
  {
    country: 'Grenada',
    flag: '🇬🇩',
    videoUrl: 'https://www.youtube.com/embed/jfKfPfyJRdk',
    thumbnail: grenadaImg,
    feature: [
      "Visa Free travel to 160 Countries",
      "Minimum Investment $235,000"
    ],
    link: "grenada"

  },
  {
    country: 'St. Kitts & Nevis',
    flag: '🇰🇳',
    videoUrl: 'https://www.youtube.com/embed/jfKfPfyJRdk',
    thumbnail: stKittsImg,
    feature: [
      "Visa Free travel to 160 Countries",
      "Minimum Investment $235,000"
    ],
    link: "st-kitts"

  },
  {
    country: 'St. Lucia',
    flag: '🇱🇨',
    videoUrl: 'https://www.youtube.com/embed/jfKfPfyJRdk',
    thumbnail: stLuciaImg,
    feature: [
      "Visa Free travel to 159 Countries",
      "Minimum Investment $240,000"
    ],
    link: "st-lucia"

  }
];

const residencyPrograms: programs[] = [
  {
    country: 'Greece',
    flag: '🇬🇷',
    videoUrl: 'https://www.youtube.com/embed/XqZsoesa55w',
    thumbnail: greeceImg,
    feature: [
      "Visa Free travel to 29 Schengen areas",
      "Minimum Investment $250,000"
    ],
    link: "greece"
  },
  {
    country: 'Portugal',
    flag: '🇵🇹',
    videoUrl: 'https://www.youtube.com/embed/XqZsoesa55w',
    thumbnail: portugalImg,
    feature: [
      "Visa Free travel to 29 Schengen areas",
      "Minimum Investment $280,000"
    ],
    link: "portugal"
  },
  {
    country: 'Spain',
    flag: '🇪🇸',
    videoUrl: 'https://www.youtube.com/embed/XqZsoesa55w',
    thumbnail: spainImg,
    feature: [
      "Visa Free travel to 29 Schengen areas",
      "Minimum Investment $500,000"
    ],
    link: "spain"
  },
  {
    country: 'Malta',
    flag: '🇲🇹',
    videoUrl: 'https://www.youtube.com/embed/XqZsoesa55w',
    thumbnail: maltaImg,
    feature: [
      "Visa Free travel to 29 Schengen areas",
      "Minimum Investment $150,000"
    ],
    link: "malta"
  },
  {
    country: 'United States',
    flag: '🇺🇸',
    videoUrl: 'https://www.youtube.com/embed/XqZsoesa55w',
    thumbnail: usaImg,
    feature: [
      "Visa Free travel to 29 Schengen areas",
      "Minimum Investment $800,000"
    ],
    link: "usa"
  },
];

const handlePlayVideo = (e: React.MouseEvent<HTMLDivElement>, videoUrl: string, country: string) => {
  const wrapper = e.currentTarget.closest('.card-video');
  if (wrapper) {
    wrapper.innerHTML = `<iframe src="${videoUrl}?autoplay=1" title="${country} Program" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;height:100%;border:none;border-radius:inherit;"></iframe>`;
  }
};

const scrollSlider = (sliderId: string, direction: 'left' | 'right') => {
  const el = document.getElementById(sliderId);
  if (el) {
    const scrollAmount = el.clientWidth * (window.innerWidth < 768 ? 1 : 0.4);
    el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  }
};

const ProgramsSection = () => {

  return (
    <section className="programs">

      {/* Floating Info Cards */}
      <div className="programs-stats container stats-container">
        <div className="hero-stats-wrapper">
          <div className="hero-stats anim-slide-up-d3">
            <div className="stat-card anim-slide-up-d3">
              <div className="stat-card-top">
                <h3>Over 10K +</h3>
              </div>
              <div className="stat-card-bottom">
                <p>Families Advised</p>
              </div>
            </div>
            <div className="stat-card anim-slide-up-d3">
              <div className="stat-card-top">
                <h3>5 Years</h3>
              </div>
              <div className="stat-card-bottom">
                <p>In Experience</p>
              </div>
            </div>
            <div className="stat-card anim-slide-up-d3">
              <div className="stat-card-top">
                <h3>100%</h3>
              </div>
              <div className="stat-card-bottom">
                <p>Success rate</p>
              </div>
            </div>
          </div>

          {/* Mobile slider controls */}
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
        <div id='citizenship' className="program-category">
          <div className="program-header anim-slide-up">
            <span className="section-label">Citizenship by Investment</span>
            <h2>Secure a powerful second passport through our <span className='sub'>expertly managed citizenship by investment programs.</span></h2>
          </div>

          <div className="programs-slider" id="citizenship-slider">
            {citizenshipPrograms.map((program, index) => (
              <div 
                key={index}
                className="program-card anim-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-video">
                  <div className="video-thumbnail" onClick={(e) => handlePlayVideo(e, program.videoUrl, program.country)}>
                    <img src={program.thumbnail} alt={`${program.country} Video Thumbnail`} />
                    <div className="play-button-overlay">
                      <Play size={24} fill="white" color="white" />
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    <span className="flag">{program.flag}</span>
                    <h3>{program.country}</h3>
                  </div>
                  <p>{program.feature.map((feature, index) => (
                    <p key={index}>{feature}</p>
                  ))}</p>
                  <button className="btn-outline card-btn">
                    <Link to={`/citizenship/${program.link}`}>
                      Explore programme <ArrowRight size={16} />
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn" onClick={() => scrollSlider('citizenship-slider', 'left')}><ChevronLeft size={20} /></button>
            <button className="carousel-btn" onClick={() => scrollSlider('citizenship-slider', 'right')}><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="programs-divider"></div>

        {/* Residency Section */}
        <div id='residency' className="program-category">
          <div className="program-header anim-slide-up">
            <span className="section-label">Residency by Investment</span>
            <h2>Transform property investments into life-changing residency opportunities across elite global destinations.</h2>
          </div>

          <div className="programs-slider" id="residency-slider">
            {residencyPrograms.map((program, index) => (
              <div 
                key={index}
                className="program-card anim-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-video">
                  <div className="video-thumbnail" onClick={(e) => handlePlayVideo(e, program.videoUrl, program.country)}>
                    <img src={program.thumbnail} alt={`${program.country} Video Thumbnail`} />
                    <div className="play-button-overlay">
                      <Play size={24} fill="white" color="white" />
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    <span className="flag">{program.flag}</span>
                    <h3>{program.country}</h3>
                  </div>
                  <p>{program.feature.map((feature, index) => (
                    <p key={index}>{feature}</p>
                  ))}</p>
                  <button className="btn-outline card-btn">
                    <Link to={`/residency/${program.link}`}>
                      Explore programme <ArrowRight size={16} />
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn" onClick={() => scrollSlider('residency-slider', 'left')}><ChevronLeft size={20} /></button>
            <button className="carousel-btn" onClick={() => scrollSlider('residency-slider', 'right')}><ChevronRight size={20} /></button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;
