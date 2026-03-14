import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact">
      <div className="contact-intro container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Take the First Step <span>Towards Global Citizenship!</span></h2>
          <p>Whether exploring options, ready to apply, or representing an individual, we are here. Fill out the form below, and our experts will help you step into a world of global citizenship.</p>
        </motion.div>
      </div>

      <div className="contact-wave">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 C240,120 480,120 720,60 C960,0 1200,0 1440,60 L1440,120 L0,120 Z" fill="var(--dark-navy)"></path>
        </svg>
      </div>

      <div className="contact-form-area">
        <div className="container form-container">
          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows={4} required></textarea>
            </div>
            <button type="submit" className="btn-primary form-submit">
              <Send size={18} /> Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
