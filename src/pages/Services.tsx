import { useState } from 'react';
import { Calendar, Plus, Minus, MoveUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import './Services.css';

// We'll use unspash images until local assets are confirmed.
const heroBg = "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1600&auto=format&fit=crop";
const supportImg = "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"; 
// Alternative stamp-like abstract or actual documents: https://images.unsplash.com/photo-1618044733300-9472054094ee
const estateImg = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop";

const Services = () => {
  const [openSupportIdx, setOpenSupportIdx] = useState<number | null>(0); // first open by default
  const [openEstateIdx, setOpenEstateIdx] = useState<number | null>(0);

  const supportItems = [
    { title: "Driver's License", content: "Assistance in acquiring local driving credentials quickly and legally." },
    { title: "Opening a Bank Account", content: "Expert guidance in opening local corporate and personal bank accounts." },
    { title: "Tax ID", content: "Procurement of Tax Identification Numbers and advice on tax planning." },
    { title: "Business Incorporation", content: "End-to-end services to set up your corporate entities seamlessly." },
    { title: "Post Registration of Qualifying Dependents", content: "Support in extending residency or citizenship benefits to your family members." }
  ];

  const estateItems = [
    { title: "Real Estate", content: "Access exclusive luxury properties and guaranteed rental yield opportunities." },
    { title: "Diversified Portfolio", content: "Spread your investment across different property types for stable returns." },
    { title: "Off-shore Investments", content: "Secure offshore real estate opportunities with tax-efficient structures." },
    { title: "Project Management", content: "Full lifecycle property management, from acquisition to tenanting and maintenance." }
  ];

  const toggleSupportFn = (idx: number) => {
    setOpenSupportIdx(openSupportIdx === idx ? null : idx);
  };

  const toggleEstateFn = (idx: number) => {
    setOpenEstateIdx(openEstateIdx === idx ? null : idx);
  };

  return (
    <Layout>
      <div className="services-page">
        {/* Hero Section */}
        <section className="services-hero-container container">
          <div className="services-hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="services-hero-overlay"></div>
            <motion.div 
              className="services-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="services-pill">Our Services</span>
              <h1>We offer quality post citizenship services</h1>
              <p>Get in touch with one of our Advisors today. You can book a complimentary 30-minute call to discuss your needs</p>
              <button className="btn-primary schedule-btn">
                <Calendar size={18} /> Schedule a Meeting
              </button>
            </motion.div>
          </div>
        </section>


        {/* Post Citizenship Support Section */}
        <section id="post-citizenship" className="services-content-section container">
          <div className="svc-content-grid">
            
            <motion.div 
              className="svc-text-side"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2>Post Citizenship Support</h2>
              <p className="svc-description">
                Penvista's dedicated support team assists with family member registration, banking arrangements, tax documentation, driving credentials, and corporate establishment services.
              </p>

              <div className="accordion-list">
                {supportItems.map((item, idx) => (
                  <div key={idx} className="accordion-item">
                    <button 
                      className="accordion-header" 
                      onClick={() => toggleSupportFn(idx)}
                    >
                      <span className="accordion-title">
                        {/* Placeholder icon depending on index, based on design screenshot */}
                        {idx === 0 && '🚗'} 
                        {idx === 1 && '🏦'} 
                        {idx === 2 && '📋'} 
                        {idx === 3 && '💼'} 
                        {idx === 4 && '👨‍👩‍👧‍👦'} 
                        &nbsp; {item.title}
                      </span>
                      {openSupportIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
                    </button>
                    <AnimatePresence>
                      {openSupportIdx === idx && (
                        <motion.div 
                          className="accordion-content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="accordion-inner">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="svc-cta-wrapper">
                 <button className="btn-outline svc-outline-btn">
                   <Calendar size={18} /> Schedule a Meeting
                 </button>
              </div>
            </motion.div>

            <motion.div 
              className="svc-image-side"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={supportImg} alt="Post Citizenship Support" />
            </motion.div>

          </div>
        </section>

        {/* Real Estate Section */}
        <section id="real-estate" className="services-content-section container">
          <div className="svc-content-grid reverse-grid">
            
            <motion.div 
              className="svc-image-side"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={estateImg} alt="Real Estate Investment" />
            </motion.div>

            <motion.div 
              className="svc-text-side"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2>Real Estate Investment Management</h2>
              <p className="svc-description">
                At Penvista, we have handpicked real estate portfolios in prestigious locations that delivers both strong returns and coveted residency rights.
              </p>

              <div className="accordion-list">
                {estateItems.map((item, idx) => (
                  <div key={idx} className="accordion-item">
                    <button 
                      className="accordion-header" 
                      onClick={() => toggleEstateFn(idx)}
                    >
                      <span className="accordion-title">
                        {idx === 0 && '🏢'} 
                        {idx === 1 && '💼'} 
                        {idx === 2 && '📈'} 
                        {idx === 3 && '📊'} 
                        &nbsp; {item.title}
                      </span>
                      {openEstateIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
                    </button>
                    <AnimatePresence>
                      {openEstateIdx === idx && (
                        <motion.div 
                          className="accordion-content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="accordion-inner">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="svc-cta-wrapper">
                 <button className="btn-outline svc-outline-btn">
                   <Calendar size={18} /> Schedule a Meeting
                 </button>
              </div>
            </motion.div>

          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Services;
