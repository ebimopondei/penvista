import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, Download, Home, Flag, Shield, Landmark, Award, Cloud, IdCard, CornerUpRight, CornerUpLeft, Building, Wallet, Receipt, CreditCard, Building2, Mountain, ChevronLeft, ChevronRight } from 'lucide-react';
import { programsInfo } from '../data/programs';
import type { ProgramData } from '../data/programs';
import './ProgramPage.css';
import Layout from '../components/Layout';
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

const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>, tabId: string) => {
  const section = e.currentTarget.closest('.program-requirements-section');
  if (!section) return;

  // Update active tab button
  section.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  e.currentTarget.classList.add('active');

  // Show matching tab content
  section.querySelectorAll('.tab-panel').forEach(panel => {
    if (panel.getAttribute('data-tab') === tabId) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
};

const ProgramPage = () => {
  const { id } = useParams<{ id: string }>();

  
  // If no ID or ID not found in data, redirect to home
  if (!id || !programsInfo[id]) {
    return <Navigate to="/" replace />;
  }

  const program: ProgramData = programsInfo[id];

  const statsList = [
    program.stats.countries ? { value: `${program.stats.countries} Countries`, label: 'Visa Free Travel' } : null,
    program.stats.investment ? { value: program.stats.investment, label: 'Minimum Requirement' } : null,
    program.stats.months ? { value: program.stats.months, label: 'Processing Time' } : null,
  ].filter(Boolean) as { value: string, label: string }[];



  return (
    <Layout>
      <div className="program-page">
        {/* Dynamic Hero Section */}  
        <section className="program-hero" style={{ backgroundImage: `url(${program.heroImage})` }}>
          <div className="container program-hero-container">
            <div className="badge anim-slide-up">
              {program.type === 'citizenship' ? 'Citizenship By Investment' : 'Residency By Investment'}
            </div>
            
            <h1 className="anim-slide-up-d1">
              {program.title}
            </h1>
            
            <p className="program-hero-lead anim-slide-up-d2">
              {program.heroHeadline}
            </p>
            
            <div className="program-hero-actions anim-slide-up-d3">
              <Link to="https://calendly.com/penvistalimited-info/30min?month=2024-12">
                <button className="btn-primary"><Calendar size={18} /> Schedule a Meeting</button>
              </Link>
              <button className="btn-outline glass-btn">
                <Link target='_blank' to={program.download}>
                  <Download size={18} /> Download PDF
                </Link>
              </button>
            </div>
          </div>
          
          {/* Overlapping Stats Bar */}
        </section>

          <div className=" stats-container">
            <div className="stats-wrappers desktop-statss hero-stats">
              {statsList.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="stat-card anim-slide-up-d3">
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                </div>
              ))}

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
        {/* About Section */}
        <section className="program-about-section">
          <div className="container">
            <div className="section-header-left">
              <span className="subtitle-line">About {program.title}</span>
              <h2>{program.about.content[0]}</h2>
            </div>
            
            <div className="program-about-content">
              {program.about.content.slice(1).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              
              {program.about.bullets && (
                <ul className="program-bullets">
                  {program.about.bullets.map((bullet, idx) => (
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
                Experience the Perks of Citizenship in {program.title}.
              </h2>
            </div>
            
            <div className="benefits-grid">
              {program.benefits.map((benefit, index) => {
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
        {program.requirements && (
          <section className="program-requirements-section">
            <div className="container">
              <div className="section-header-left">
              <span className="subtitle-line">Requirments</span>
                <h2 style={{ maxWidth: '800px', fontSize: '32px', marginBottom: '40px', color: 'var(--secondary)', lineHeight: '1.4' }}>{program.requirements.description}</h2>
              </div>
              
              <div className="tabs-header">
                {program.requirements.tabs.map((tab, idx) => (
                  <button 
                    key={tab.id}
                    className={`tab-btn ${idx === 0 ? 'active' : ''}`}
                    onClick={(e) => handleTabClick(e, tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="tab-content-area">
                {program.requirements.tabs.map((tab, idx) => (
                  <div 
                    key={tab.id}
                    className={`requirements-grid tab-panel tab-content-animated ${idx === 0 ? 'active' : ''}`}
                    data-tab={tab.id}
                  >
                    {tab.items.map((item, i) => {
                      const IconComponent = IconMap[item.icon] || Award;
                      return (
                        <div key={i} className="requirement-card">
                          <div className="requirement-icon">
                            <IconComponent size={36} />
                          </div>
                          <h3>{item.title}</h3>
                          <p style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {program.investment && (
          <section 
            className="investment-infos program-requirements-section"
          >
            <div className='container'>
              <div className='section-header-left'>
                <span className="subtitle-line">Investment</span>
                <h3 className="investment-headline">{program.investment.headline}</h3>
                <p className="investment-desc">{program.investment.description}</p>
              </div>
              
              <h4 className="investment-options-title">{program.investment.subTitle}</h4>
              <div className="investment-options-list">
                {program.investment.bullets?.map((opt, idx) => (
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
        {program.process && (
          <section className="program-process-section">
            <div className="container">
              <h2 className="text-center section-title">{program.process.title}</h2>
              
              <div className="process-grid-container">
                <div className="process-cell light-cell process-top-left">
                  <div className="process-cell-content">
                    {(() => {
                      const IconComponent = IconMap[program.process.steps[0].icon] || CornerUpRight;
                      return <IconComponent className="process-icon" size={32} />;
                    })()}
                    <h3>{program.process.steps[0].title}</h3>
                    <p>{program.process.steps[0].description}</p>
                    <button className="btn-outline-primary"><Download size={16} /> Download PDF</button>
                  </div>
                </div>
                
                <div className="process-cell dark-cell process-top-right">
                  <div className="process-time-display">
                    <span dangerouslySetInnerHTML={{ __html: program.process.steps[0].timeframe.replace(' ', ' <span>') + '</span>' }} />
                  </div>
                </div>
                
                <div className="process-cell dark-cell process-bottom-left">
                  <div className="process-time-display">
                    <span dangerouslySetInnerHTML={{ __html: program.process.steps[1].timeframe.replace(' ', ' <br/><span>') + '</span>' }} />
                  </div>
                </div>
                
                <div className="process-cell light-cell process-bottom-right">
                  <div className="process-cell-content">
                    {(() => {
                      const IconComponent = IconMap[program.process.steps[1].icon] || CornerUpLeft;
                      return <IconComponent className="process-icon" size={32} />;
                    })()}
                    <h3>{program.process.steps[1].title}</h3>
                    <p>{program.process.steps[1].description}</p>
                    <button className="btn-outline-primary"><Download size={16} /> Download PDF</button>
                  </div>
                </div>

                <div className="process-cell light-cell process-top-left">
                  <div className="process-cell-content">
                    {(() => {
                      const IconComponent = IconMap[program.process.steps[2].icon] || CornerUpRight;
                      return <IconComponent className="process-icon" size={32} />;
                    })()}
                    <h3>{program.process.steps[2].title}</h3>
                    <p>{program.process.steps[2].description}</p>
                    <button className="btn-outline-primary"><Download size={16} /> Download PDF</button>
                  </div>
                </div>
                
                <div className="process-cell dark-cell process-top-right">
                  <div className="process-time-display">
                    <span dangerouslySetInnerHTML={{ __html: program.process.steps[2].timeframe.replace(' ', ' <span>') + '</span>' }} />
                  </div>
                </div>
                
               
              </div>
            </div>
          </section>
        )}


      </div>
        <FAQSection />
        <ContactSection />
    </Layout>
  );
};

export default ProgramPage;
