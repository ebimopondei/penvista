import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQSection.css';

const faqs = [
  {
    question: "What is citizenship by investment?",
    answer: "Citizenship by Investment is a legal process that allows individuals to acquire citizenship in a foreign country by making a significant economic contribution such as an investment in real estate, a national development fund, or government bonds. In return, investors gain the rights and benefits of citizenship including a passport that provides enhanced global mobility and access to new business and personal opportunities."
  },
  {
    question: "Which countries offer citizenship by investment programs?",
    answer: "Popular CBI programs include St. Kitts and Nevis, Dominica, Antigua and Barbuda, Grenada, and Saint Lucia in the Caribbean as well as Malta and Turkey in Europe. Each program varies in terms of investment options, processing times, and benefits."
  },
  {
    question: "How long does it take to acquire a second passport?",
    answer: "Processing times vary by country. Some Caribbean programs can be completed in as little as 6-12 months, while European programs may take over 12 months. Factors like due diligence processes and type of investment can affect timelines."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq bg-white">
      <div className="container faq-container">
        
        <div className="faq-header">
          <h2>Got questions? <span>We've got answers!</span></h2>
          <p>Whether you're curious about our services, investment options, or the application process, we have curated answers to help you make informed decisions. Look through the categories below to quickly find the topics that matter most to you!</p>
          
          <div className="faq-tabs">
            <button className="faq-tab active">Citizenship</button>
            <button className="faq-tab">Residency</button>
            <button className="faq-tab">General</button>
            <button className="faq-tab">Process</button>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
