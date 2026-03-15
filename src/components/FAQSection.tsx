import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQSection.css';

type FaqCategory = 'citizenship' | 'residency' | 'benefits' | 'process';

const faqData: Record<FaqCategory, { question: string, answer: string }[]> = {
  citizenship: [
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
  ],
  residency: [
    {
      question: "What is Residency by Investment (RBI)?",
      answer: "Residency by investment programs allow individuals to acquire permanent or temporary residency in a foreign country by investing in its economy, typically through real estate or job creation. This often leads to citizenship after a set period."
    },
    {
      question: "Which countries offer Residency by Investment Programs?",
      answer: "Many countries worldwide offer Residency by Investment programs, with popular options including Portugal’s Golden Visa, Spain, Greece, Malta in Europe as well as the EB-5 program in the United States. Each program has unique investment requirements, residency obligations and benefits."
    },
    {
      question: "Can Residency by Investment lead to citizenship?",
      answer: "Many Residency by Investment programs provide a pathway to citizenship after a specific period of residence. For Example, Portugal’s Golden Visa allows application for citizenship after 5 years while Spain requires 10 years of residency before citizenship eligibility."
    }
  ],
  benefits: [
    {
      question: "What are the primary benefits of obtaining a Second Citizenship?",
      answer: "A Second Citizenship provides increased global mobility allowing visa free or visa-on-arrival access to over 150 countries and the ability to live, work and study in the country and a safety net for individuals seeking security and stability."
    },
    {
      question: "How can Residency or Citizenship by investment impact my business or career?",
      answer: "Residency or Citizenship in a new country can open doors to international markets, offer tax incentives and improve access to financial and business networks. This can be especially beneficial for entrepreneurs and professionals seeking to expand their operations or advance their careers internationally."
    },
    {
      question: "Are there tax advantages associated with obtaining residency or citizenship in another country?",
      answer: "Yes, some countries offer favorable tax conditions for new residents or citizens such as low or no taxes on foreign income, capital gains, or inheritance."
    }
  ],
  process: [
    {
      question: "What is the first step to begin the Residency or Citizenship application?",
      answer: "Initial steps include a consultation with a licensed advisor to evaluate eligibility and program suitability. This helps identify the best options based on personal and financial goals."
    },
    {
      question: "What documentation is required for the application process?",
      answer: "Generally, you’ll need valid identification, proof of funds, investment source verification and a clean criminal record. Specific documentation requirements vary by country."
    },
    {
      question: "Can my family members be included in my citizenship or residency application?",
      answer: "Most programs allow you to include your spouse, dependent children, and sometimes parents or grandparents in your application. However, additional fees and documentation are usually required for each family member."
    }
  ]
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<FaqCategory>('citizenship');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentFaqs = faqData[activeTab];

  return (
    <section className="faq bg-white">
      <div className="container faq-container">
        
        <div className="faq-header">
          <h2>Got questions? <span>We've got answers!</span></h2>
          <p>Whether you're curious about our services, investment options, or the application process, we have curated answers to help you make informed decisions. Look through the categories below to quickly find the topics that matter most to you!</p>
          
          <div className="faq-tabs">
            {(Object.keys(faqData) as FaqCategory[]).map((tab) => (
              <button 
                key={tab}
                className={`faq-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab);
                  setOpenIndex(0); // Reset open FAQ when switching tabs
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="faq-list">
          {currentFaqs.map((faq, index) => (
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
