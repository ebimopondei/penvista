import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import Layout from '../components/Layout';
import './Contact.css';
import bgImage from '../assets/images/I7GjIQbARsN9Omsak972NRF7WQ.png';

// Using a placeholder image for the antique phones background 
// since it wasn't explicitly found in assets, but we can use an unsplash one for now
// Alternative dark phone: https://images.unsplash.com/photo-1520697830682-8bc617b07c80

const Contact = () => {
  return (
    <Layout>
      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="container contact-hero-content">
            <h1 className="anim-slide-up">
              Contact Us
            </h1>
            <p className="anim-slide-up-d2">
              At Penvista, we are dedicated to empowering individuals and families with tailored advisory solutions that drive value and satisfaction.
            </p>
          </div>
        </section>

        {/* <svg style={{width: '100%', height: '100%'}} viewBox="0 0 440 120" preserveAspectRatio="none" width="100%" height="100%"><use href="#svg-21099438_1102"></use></svg> */}

        {/* Info Cards Section */}
        <section className="contact-info-section container">
            <div className="contact-cards">
              <div 
                className="info-card anim-slide-up-d3"
              >
                <div className="info-icon">
                  <MapPin size={28} />
                </div>
                <h3>Our Office</h3>
                <p>6 Sirakoro Street off Blantyre street,<br/>Wuse II, Abuja, Nigeria.</p>
              </div>

              <div 
                className="info-card anim-slide-up"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="info-icon">
                  <Phone size={28} />
                </div>
                <h3>Customer Care</h3>
                <p>+234 915 - 084 - 6333</p>
              </div>

              <div 
                className="info-card anim-slide-up"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="info-icon">
                  <Mail size={28} />
                </div>
                <h3>Email Address</h3>
                <p>info@penvistalimited.com</p>
              </div>
            </div>
        </section>

        {/* Main Form Section */}
        <section className="contact-form-section container">
          <div className="contact-form-grid">
            {/* Left Content */}
            <div className="contact-text-content anim-slide-left">
              <span className="contact-pill">Contact us</span>
              <h2>Get in Touch</h2>
              <p>
                Our skilled, multilingual team brings a wealth of experience to your immigration journey. With legal experts and professionals across our international network, we offer personalized service tailored to your needs.
              </p>
              <div className="contact-curved-arrow">
                 <svg width="250" height="100" viewBox="0 0 250 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 25 C 80 15, 120 120, 160 50 C 180 15, 220 50, 240 70 M 230 60 L 245 75 L 225 80" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="paint0_linear" x1="0" y1="0" x2="250" y2="100" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#a3b1c6" />
                        <stop offset="0.5" stopColor="#5d6576" />
                        <stop offset="1" stopColor="var(--primary)" />
                      </linearGradient>
                    </defs>
                  </svg>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="contact-form-card anim-slide-right-d2">
              <h3>Let's Talk</h3>
              <p className="form-subtitle">Fill out the form below, and let us help you unlock the benefits of global citizenship today!</p>
              
              <form className="talk-form">
                <div className="form-row">
                  <input type="text" placeholder="Full name" required />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email address" required />
                </div>
                <div className="form-row">
                  <input type="tel" placeholder="Phone number" required />
                </div>
                <div className="form-row">
                  <textarea placeholder="Enter your message" rows={3} required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <Calendar size={18} />
                  Contact us
                </button>
              </form>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Contact;
