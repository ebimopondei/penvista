import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Home, Flag, Shield, Landmark, Award, Cloud, IdCard, CornerUpRight, CornerUpLeft, Building, Wallet, Receipt, CreditCard, Building2, Mountain, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';
import './ResidencyPage.css';

// Mock Data for Residency - We can extract this later if needed, but keeping it simple to match requirements for now
const residencyData: Record<string, any> = {
  'malta': {
    title: 'Malta',
    heroImage: 'https://images.unsplash.com/photo-1514222288950-705a91439401?q=80&w=1600&auto=format&fit=crop',
    heroHeadline: "Malta's Residency by Investment Program provides a streamlined pathway to European residency in a strategically located, English-speaking nation. Renowned for its favorable tax system, world-class healthcare, and excellent education opportunities, Malta is a top choice among international investors.",
    type: 'residency',
    stats: {
      countries: '29', // Over Schengen Visa
      investment: '€150,000',
      months: '6 - 8 Months'
    },
    about: {
      content: [
        "A Global Hub for Residency and Business.",
        "Malta offers an attractive blend of Mediterranean lifestyle, strategic location, and a robust economy. It is highly sought after by investors looking for a secure and prosperous environment in the European Union.",
        "The Malta Permanent Residence Programme (MPRP) grants third-country nationals the right to reside, settle, and stay in Malta permanently, along with visa-free travel across the Schengen zone."
      ],
      bullets: [
        "Strategic European location",
        "English as an official language",
        "Favorable tax regime",
        "High standard of living"
      ]
    },
    benefits: [
      {
        title: "Schengen Mobility",
        description: "Enjoy visa-free travel across the 29 Schengen Area countries for 90 out of 180 days.",
        icon: "Flag"
      },
      {
        title: "Family Inclusion",
        description: "Include your spouse, unmarried dependent children of any age, and dependent parents or grandparents.",
        icon: "Home"
      },
      {
        title: "Right to Reside",
        description: "Permanent right to reside, settle, and stay indefinitely in Malta.",
        icon: "Shield"
      },
      {
        title: "Investment Opportunities",
        description: "Access a thriving real estate market and business ecosystem.",
        icon: "Landmark"
      }
    ]
  }
};

const IconMap: Record<string, any> = {
  'Passport': Shield,
  'Home': Home,
  'Flag': Flag,
  'Landmark': Landmark,
  'Calendar': Calendar,
  'Award': Award,
  'Cloud': Cloud,
  'IdCard': IdCard,
  'CornerUpRight': CornerUpRight,
  'CornerUpLeft': CornerUpLeft,
  'Building': Building,
  'Wallet': Wallet,
  'Receipt': Receipt,
  'CreditCard': CreditCard,
  'Building2': Building2,
  'MountainSun': Mountain,
};

const ResidencyPage = () => {
  const { id } = useParams<{ id: string }>();
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  
  // If no ID or ID not found in data, redirect to home
  // In a real app we'd have all countries (spain, portugal, greece, us) here
  if (!id || !residencyData[id]) {
    // For presentation demo, if they pick another country, just show malta as fallback, or redirect
    if (id && ['greece', 'portugal', 'spain', 'united-states'].includes(id)) {
        // We'll just render Malta's data for the demo if they click the other dropdowns
    } else {
        return <Navigate to="/" replace />;
    }
  }

  // Use the specific ID if it exists, otherwise fallback to Malta for demonstration purposes based on the nav selections
  const program = residencyData[id] || residencyData['malta'];

  const statsList = [
    { value: `${program.stats.countries} Countries`, label: 'Over Schengen Visa' },
    { value: program.stats.investment, label: 'Minimum Investment' },
    { value: program.stats.months, label: 'Processing Time' },
  ];

  const prevStat = () => setCurrentStatIndex(prev => (prev === 0 ? statsList.length - 1 : prev - 1));
  const nextStat = () => setCurrentStatIndex(prev => (prev === statsList.length - 1 ? 0 : prev + 1));

  return (
    <Layout>
      <div className="program-page residency-page">
        {/* Dynamic Hero Section - Residency specific (only 1 button) */}
        <section className="program-hero residency-hero" style={{ backgroundImage: `url(${program.heroImage})` }}>
          <div className="hero-overlay"></div>
          <div className="container program-hero-container">
            <motion.div 
              className="badge"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Residency By Investment
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {program.title}
            </motion.h1>
            
            <motion.p
              className="program-hero-lead"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {program.heroHeadline}
            </motion.p>
            
            <motion.div
              className="program-hero-actions residency-hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Only ONE button for Residency, matching the screenshot */}
              <button className="schedule-btn-residency"><Calendar size={18} /> Schedule a Meeting</button>
            </motion.div>
          </div>
          
          {/* Overlapping Stats Bar */}
          <div className="container stats-container">
            <div className="stats-wrapper desktop-stats">
              {statsList.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="stats-wrapper mobile-stats">
              <button className="stat-nav-btn" onClick={prevStat}><ChevronLeft size={24} /></button>
              <div className="stat-content-mobile">
                <h3>{statsList[currentStatIndex].value}</h3>
                <p>{statsList[currentStatIndex].label}</p>
              </div>
              <button className="stat-nav-btn" onClick={nextStat}><ChevronRight size={24} /></button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="program-about-section">
          <div className="container">
            <div className="section-header-left">
              <span className="subtitle-line">About {program.title}</span>
              <h2>{program.about.content[0]}</h2>
            </div>
            
            <div className="program-about-content">
              {program.about.content.slice(1).map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}
              
              {program.about.bullets && (
                <ul className="program-bullets">
                  {program.about.bullets.map((bullet: string, idx: number) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="program-cta">
              <button className="btn-dark"><Calendar size={18} /> Schedule a call</button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="program-benefits-section">
          <div className="container">
            <div className="section-header-left">
              <span className="subtitle-line">Benefits</span>
              <h2 style={{ maxWidth: '600px', fontSize: '36px', marginBottom: '40px' }}>
                Experience the Perks of Residency in {program.title}.
              </h2>
            </div>
            
            <div className="benefits-grid">
              {program.benefits.map((benefit: any, index: number) => {
                const IconComponent = IconMap[benefit.icon] || Shield;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`benefit-row ${!isEven ? 'reverse' : ''}`}>
                    <div className="benefit-content">
                      <div className="benefit-icon">
                        <IconComponent size={32} />
                      </div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                    {benefit.image && (
                      <div className="benefit-image">
                        <img src={benefit.image} alt={benefit.title} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default ResidencyPage;
