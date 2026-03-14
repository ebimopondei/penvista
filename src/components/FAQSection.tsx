import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQSection.css';

const faqs = [
  {
    question: "What is citizenship by investment?",
    answer: "Citizenship by investment programs offer high-net-worth individuals the opportunity to legally acquire a new nationality in return for an investment in the host country's economy."
  },
  {
    question: "Which countries offer citizenship by investment programs?",
    answer: "Many countries worldwide offer these programs, including Caribbean nations like Antigua & Barbuda, Dominica, St. Kitts & Nevis, as well as European countries like Malta and Turkey."
  },
  {
    question: "How long does it take to acquire a second passport?",
    answer: "The timeline varies by country, but many Caribbean programs process applications within 3 to 6 months, whereas European programs may require 12 to 24 months."
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
          <p>We know you may have questions when considering citizenship or residency. Read a quick guide to understanding your options and preparing for your journey. Check out our FAQ below for clear, straightforward answers.</p>
          
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
