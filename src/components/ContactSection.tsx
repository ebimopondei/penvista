import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import './ContactSection.css';
import waveImage from '../assets/images/JId6adFK4DyJqJjSgxEvo12YWU.png';

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
          <p>Make an enquiry, and we'll provide expert assistance tailored to your needs. Fill out the form below, and let us help you unlock the benefits of global citizenship today!</p>
        </motion.div>
      </div>


      <div className="contact-form-area">
          <img src={waveImage} className='contact-wave-image' alt="wave" />
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
