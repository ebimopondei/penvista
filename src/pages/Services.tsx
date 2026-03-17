import { useState } from 'react';
import { Calendar, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import './Services.css';
import heroBg from '../assets/images/3EXtK8R7C1JdCe1QoyHeRWoVSlE.png'
import supportImg from '../assets/images/9GXSX9aPuZQJvIZbKV6qJUb4r0.png'
import estateImg from '../assets/images/naLxHncaF14FKKjACoOet8Firk.png'
import { Link } from 'react-router-dom';

// We'll use unspash images until local assets are confirmed.
// Alternative stamp-like abstract or actual documents: https://images.unsplash.com/photo-1618044733300-9472054094ee

const Services = () => {
  const [openSupportIdx, setOpenSupportIdx] = useState<number | null>(0); // first open by default
  const [openEstateIdx, setOpenEstateIdx] = useState<number | null>(0);

  const supportItems = [
    { title: "Driver's License", content: "We assist in the processing of Driver’s License, without the need to travel to the home country. As a Government Authorized ID, a local driver's license can also be used as a travel document within countries of the OECS." },
    { title: "Opening a Bank Account", content: "A Local Bank Account provides citizens with financial security, asset protection and opens opportunities for local investment. We assist citizens with the opening of personal and corporate bank accounts." },
    { title: "Tax ID", content: "A Tax Identification Number is useful in opening bank accounts internationally, facilitates the import &amp; export of goods in and out of Dominica. Only citizens who are physically present on island, for more than 183 days continuously, are required to file tax returns." },
    { title: "Business Incorporation", content: "We provide professional advice and assistance with incorporation and registration of Business Name and Local Company Incorporation." },
    { title: "Post Registration of Qualifying Dependents", content: "i. New born child after citizenship has been gotten by one of the parents or both parents. ii. Spouse after main applicant has gotten citizenship. ii. Registration of Parents, Siblings as a dependent." }
  ];

  const estateItems = [
    { title: "Real Estate", content: "We assist client to source real estate in both local and international locations." },
    { title: "Diversified Portfolio", content: "We help structure and manage investment portfolios across multiple global markets." },
    { title: "Off-shore Investments", content: "We provide guidance on international investment opportunities and secure wealth management solutions." },
    { title: "Project Management", content: "We oversee all aspects of your investment projects from inception to completion." }
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
            <motion.div 
              className="services-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="services-pill">Our Services</span>
              <h1>We offer quality post citizenship services</h1>
              <p>Get in touch with one of our Advisors today. You can book a complimentary 30-minute call to discuss your needs</p>
              <Link to="https://calendly.com/penvistalimited-info/30min?month=2024-12">
                <button className="btn-primary schedule-btn">
                  <Calendar size={18} /> Schedule a Meeting
                </button>
              </Link>
            </motion.div>
          </div>
        </section>


        {/* Post Citizenship Support Section */}
        <section id="post-citizenship" className="services-content-section containers">
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
                <Link to="https://calendly.com/penvistalimited-info/30min?month=2024-12">
                 <button className="btn-outline svc-outline-btn">
                   <Calendar size={18} /> Schedule a Meeting
                 </button>
                </Link>
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
                <Link to="https://calendly.com/penvistalimited-info/30min?month=2024-12">
                  <button className="btn-outline svc-outline-btn">
                    <Calendar size={18} /> Schedule a Meeting
                  </button>
                </Link>
              </div>
            </motion.div>

          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Services;
