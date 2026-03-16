import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, Home, Flag, Shield, Landmark, Award, Cloud, IdCard, CornerUpRight, CornerUpLeft, Building, Wallet, Receipt, CreditCard, Building2, Mountain, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import Layout from '../components/Layout';
import './ResidencyPage.css';
import { residenceInfo } from '../data/residence';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';



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
  const [activeTab, setActiveTab] = useState('eligibility');
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  
  // If no ID or ID not found in data, redirect to home
  if (!id || !residenceInfo[id]) {
    return <Navigate to="/" replace />;
  }
  const residence = residenceInfo[id];

  const statsList = [
    residence.stats.countries ? { value: `${residence.stats.countries} Countries`, label: 'Over Schengen Visa' } : null,
    residence.stats.investment ? { value: residence.stats.investment, label: 'Minimum Investment' } : null,
    residence.stats.months ? { value: residence.stats.months, label: 'Processing Time' } : null,
  ].filter(Boolean) as { value: string, label: string }[];

  // Use the specific ID if it exists, otherwise fallback to Malta for demonstration purposes based on the nav selections

  const prevStat = () => setCurrentStatIndex(prev => (prev === 0 ? statsList.length - 1 : prev - 1));
  const nextStat = () => setCurrentStatIndex(prev => (prev === statsList.length - 1 ? 0 : prev + 1));

  return (
    <Layout>
      <div className="program-page">
        {/* Dynamic Hero Section */}  
        <section className="program-hero" style={{ backgroundImage: `url(${residence.heroImage})` }}>
          <div className="container program-hero-container">
            <motion.div 
              className="badge"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {residence.type === 'citizenship' ? 'Citizenship By Investment' : 'Residency By Investment'}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {residence.title}
            </motion.h1>
            
            <motion.p
              className="program-hero-lead"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {residence.heroHeadline}
            </motion.p>
            
            <motion.div
              className="program-hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link to="https://calendly.com/penvistalimited-info/30min?month=2024-12">
                <button className="btn-primary"><Calendar size={18} /> Schedule a Meeting</button>
              </Link>
              <button className="btn-outline glass-btn"><Download size={18} /> Download PDF</button>
            </motion.div>
          </div>
          
          {/* Overlapping Stats Bar */}
        </section>

          <div className=" stats-container">
            <motion.div className="stats-wrappers desktop-statss hero-stats">
              {statsList.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  className="stat-card" 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.8, delay: 0.3 }}>
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                </motion.div>
              ))}

              {/* Mobile slider controls (visual only since CSS scroll-snap handles interaction natively) */}
                        <div className="mobile-stats-nav">
                            <button className="stats-nav-btn prev">
                              <ChevronLeft size={20} color="white" />
                            </button>
                            <button className="stats-nav-btn next">
                              <ChevronRight size={20} color="white" />
                            </button>
                        </div>
            </motion.div>
            
            {/* {statsList.length > 0 && (
              <div className="stats-wrapper mobile-stats">
                <button className="stat-nav-btn" onClick={prevStat}><ChevronLeft size={24} /></button>
                <div className="stat-content-mobile">
                  <h3>{statsList[currentStatIndex].value}</h3>
                  <p>{statsList[currentStatIndex].label}</p>
                </div>
                <button className="stat-nav-btn" onClick={nextStat}><ChevronRight size={24} /></button>
              </div>
            )} */}
          </div>
        {/* About Section */}
        <section className="program-about-section">
          <div className="container">
            <div className="section-header-left">
              <span className="subtitle-line">About {residence.title}</span>
              <h2>{residence.about.content[0]}</h2>
            </div>
            
            <div className="program-about-content">
              {residence.about.content.slice(1).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              
              {residence.about.bullets && (
                <ul className="program-bullets">
                  {residence.about.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="program-cta">
              <Link to="https://calendly.com/penvistalimited-info/30min?month=2024-12">
                <button className="btn-primary"><Calendar size={18} /> Schedule a call</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="program-benefits-section">
          <div className="container">
            <div className="section-header-left">
              <span className="subtitle-line">Benefits</span>
              <h2 style={{ maxWidth: '600px', fontSize: '36px', marginBottom: '40px' }}>
                Experience the Perks of Citizenship in {residence.title}.
              </h2>
            </div>
            
            <div className="benefits-grid">
              {residence.benefits.map((benefit, index) => {
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

        {/* Requirements Section */}
        {residence.requirements && (
          <section className="program-requirements-section">
            <div className="container">
              <div className="section-header-left">
              <span className="subtitle-line">Requirments</span>
                <h2 style={{ maxWidth: '800px', fontSize: '32px', marginBottom: '40px', color: 'var(--secondary)', lineHeight: '1.4' }}>{residence.requirements.description}</h2>
              </div>
              
              <div className="tabs-header">
                {residence.requirements.tabs.map(tab => (
                  <button 
                    key={tab.id}
                    className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="tab-content-area">
                <AnimatePresence mode="wait">
                  {residence.requirements.tabs.map(tab => (
                    activeTab === tab.id && (
                      <motion.div 
                        key={tab.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="requirements-grid"
                      >
                        {tab.items.map((item, idx) => {
                          const IconComponent = IconMap[item.icon] || Award;
                          return (
                            <div key={idx} className="requirement-card">
                              <div className="requirement-icon">
                                <IconComponent size={36} />
                              </div>
                              <h3>{item.title}</h3>
                              <p style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                            </div>
                          );
                        })}
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </section>
        )}

        {residence.investment && (
          <section 
            className="investment-infos program-requirements-section"
          >
            <div className='container'>
              <div className='section-header-left'>
                <span className="subtitle-line">Investment</span>
                <h3 className="investment-headline">{residence.investment.headline}</h3>
                <p className="investment-desc">{residence.investment.description}</p>
              </div>
              
              <h4 className="investment-options-title">{residence.investment.subTitle}</h4>
              <div className="investment-options-list">
                {residence.investment.bullets?.map((opt, idx) => (
                  <p key={idx}>{opt}</p>
                ))}
              </div>

              <Link to="https://calendly.com/penvistalimited-info/30min?month=2024-12">
                <button className="btn-primary mt-4"><Calendar size={18} /> Schedule a call</button>
              </Link>
            </div>
          </section>
        )}

        {/* Process Section */}
        {residence.process && (
          <section className="program-process-section">
            <div className="container">
              <h2 className="text-center section-title">{residence.process.title}</h2>
              
              <div className="process-grid-container">
                {/* Visual grid connecting cells */}
                <div className="process-cell light-cell process-top-left">
                  <div className="process-cell-content">
                    {(() => {
                      const IconComponent = IconMap[residence.process.steps[0].icon] || CornerUpRight;
                      return <IconComponent className="process-icon" size={32} />;
                    })()}
                    <h3>{residence.process.steps[0].title}</h3>
                    <p>{residence.process.steps[0].description}</p>
                    <button className="btn-outline-primary"><Download size={16} /> Download PDF</button>
                  </div>
                </div>
                
                <div className="process-cell dark-cell process-top-right">
                  <div className="process-time-display">
                    <span dangerouslySetInnerHTML={{ __html: residence.process.steps[0].timeframe.replace(' ', ' <span>') + '</span>' }} />
                  </div>
                </div>
                
                <div className="process-cell dark-cell process-bottom-left">
                  <div className="process-time-display">
                    <span dangerouslySetInnerHTML={{ __html: residence.process.steps[1].timeframe.replace(' ', ' <br/><span>') + '</span>' }} />
                  </div>
                </div>
                
                <div className="process-cell light-cell process-bottom-right">
                  <div className="process-cell-content">
                    {(() => {
                      const IconComponent = IconMap[residence.process.steps[1].icon] || CornerUpLeft;
                      return <IconComponent className="process-icon" size={32} />;
                    })()}
                    <h3>{residence.process.steps[1].title}</h3>
                    <p>{residence.process.steps[1].description}</p>
                    <button className="btn-outline-primary"><Download size={16} /> Download PDF</button>
                  </div>
                </div>

                <div className="process-cell light-cell process-top-left">
                  <div className="process-cell-content">
                    {(() => {
                      const IconComponent = IconMap[residence.process.steps[2].icon] || CornerUpRight;
                      return <IconComponent className="process-icon" size={32} />;
                    })()}
                    <h3>{residence.process.steps[2].title}</h3>
                    <p>{residence.process.steps[2].description}</p>
                    <button className="btn-outline-primary"><Download size={16} /> Download PDF</button>
                  </div>
                </div>
                
                <div className="process-cell dark-cell process-top-right">
                  <div className="process-time-display">
                    <span dangerouslySetInnerHTML={{ __html: residence.process.steps[2].timeframe.replace(' ', ' <span>') + '</span>' }} />
                  </div>
                </div>
                
               
              </div>
            </div>
          </section>
        )}

        <ContactSection />
        <FAQSection />

      </div>
    </Layout>
  );
};

export default ResidencyPage;
