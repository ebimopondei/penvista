import { Calendar, Plus, Minus } from 'lucide-react';
import Layout from '../components/Layout';
import './Services.css';
import heroBg from '../assets/images/3EXtK8R7C1JdCe1QoyHeRWoVSlE.png'
import supportImg from '../assets/images/9GXSX9aPuZQJvIZbKV6qJUb4r0.png'
import estateImg from '../assets/images/naLxHncaF14FKKjACoOet8Firk.png'
import { Link } from 'react-router-dom';

const supportItems = [
  { title: "Driver's License", content: "We assist in the processing of Driver's License, without the need to travel to the home country. As a Government Authorized ID, a local driver's license can also be used as a travel document within countries of the OECS.", icon: '🚗' },
  { title: "Opening a Bank Account", content: "A Local Bank Account provides citizens with financial security, asset protection and opens opportunities for local investment. We assist citizens with the opening of personal and corporate bank accounts.", icon: '🏦' },
  { title: "Tax ID", content: "A Tax Identification Number is useful in opening bank accounts internationally, facilitates the import &amp; export of goods in and out of Dominica. Only citizens who are physically present on island, for more than 183 days continuously, are required to file tax returns.", icon: '📋' },
  { title: "Business Incorporation", content: "We provide professional advice and assistance with incorporation and registration of Business Name and Local Company Incorporation.", icon: '💼' },
  { title: "Post Registration of Qualifying Dependents", content: "i. New born child after citizenship has been gotten by one of the parents or both parents. ii. Spouse after main applicant has gotten citizenship. ii. Registration of Parents, Siblings as a dependent.", icon: '👨‍👩‍👧‍👦' }
];

const estateItems = [
  { title: "Real Estate", content: "We assist client to source real estate in both local and international locations.", icon: '🏢' },
  { title: "Diversified Portfolio", content: "We help structure and manage investment portfolios across multiple global markets.", icon: '💼' },
  { title: "Off-shore Investments", content: "We provide guidance on international investment opportunities and secure wealth management solutions.", icon: '📈' },
  { title: "Project Management", content: "We oversee all aspects of your investment projects from inception to completion.", icon: '📊' }
];

const handleAccordionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  const item = e.currentTarget.closest('.accordion-item');
  const list = e.currentTarget.closest('.accordion-list');
  if (!item || !list) return;

  const isOpen = item.classList.contains('active');

  // Close all in this list
  list.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
  list.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));

  // Toggle clicked
  if (!isOpen) {
    item.classList.add('active');
    const content = item.querySelector('.accordion-content');
    if (content) content.classList.add('open');
  }
};

const Services = () => {
  return (
    <Layout>
      <div className="services-page">
        {/* Hero Section */}
        <section className="services-hero-container container">
          <div className="services-hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="services-hero-content anim-slide-up">
              <span className="services-pill">Our Services</span>
              <h1>We offer quality post citizenship services</h1>
              <p>Get in touch with one of our Advisors today. You can book a complimentary 30-minute call to discuss your needs</p>
              <Link to="https://calendly.com/penvistalimited-info/30min?month=2024-12">
                <button className="btn-primary schedule-btn">
                  <Calendar size={18} /> Schedule a Meeting
                </button>
              </Link>
            </div>
          </div>
        </section>


        {/* Post Citizenship Support Section */}
        <section id="post-citizenship" className="services-content-section containers">
          <div className="svc-content-grid">
            
            <div className="svc-text-side anim-slide-left">
              <h2>Post Citizenship Support</h2>
              <p className="svc-description">
                Penvista's dedicated support team assists with family member registration, banking arrangements, tax documentation, driving credentials, and corporate establishment services.
              </p>

              <div className="accordion-list">
                {supportItems.map((item, idx) => (
                  <div key={idx} className={`accordion-item ${idx === 0 ? 'active' : ''}`}>
                    <button 
                      className="accordion-header" 
                      onClick={handleAccordionClick}
                    >
                      <span className="accordion-title">
                        {item.icon}
                        &nbsp; {item.title}
                      </span>
                      <Plus size={20} className="icon-plus" />
                      <Minus size={20} className="icon-minus" />
                    </button>
                    <div className={`accordion-content ${idx === 0 ? 'open' : ''}`}>
                      <div className="accordion-inner">
                        {item.content}
                      </div>
                    </div>
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
            </div>

            <div className="svc-image-side anim-slide-right-d2">
              <img src={supportImg} alt="Post Citizenship Support" />
            </div>

          </div>
        </section>

        {/* Real Estate Section */}
        <section id="real-estate" className="services-content-section container">
          <div className="svc-content-grid reverse-grid">
            
            <div className="svc-image-side anim-slide-left">
              <img src={estateImg} alt="Real Estate Investment" />
            </div>

            <div className="svc-text-side anim-slide-right">
              <h2>Real Estate Investment Management</h2>
              <p className="svc-description">
                At Penvista, we have handpicked real estate portfolios in prestigious locations that delivers both strong returns and coveted residency rights.
              </p>

              <div className="accordion-list">
                {estateItems.map((item, idx) => (
                  <div key={idx} className={`accordion-item ${idx === 0 ? 'active' : ''}`}>
                    <button 
                      className="accordion-header" 
                      onClick={handleAccordionClick}
                    >
                      <span className="accordion-title">
                        {item.icon}
                        &nbsp; {item.title}
                      </span>
                      <Plus size={20} className="icon-plus" />
                      <Minus size={20} className="icon-minus" />
                    </button>
                    <div className={`accordion-content ${idx === 0 ? 'open' : ''}`}>
                      <div className="accordion-inner">
                        {item.content}
                      </div>
                    </div>
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
            </div>

          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Services;
