import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './TestimonialsSection.css';

const testimonials = [
  {
    text: "Penvista is amazing! The amount of guidance and clarity they brought to the citizenship process was invaluable. I highly recommend them to anyone looking to secure a second passport with ease and absolute professionalism. Their commitment to success is evident.",
    name: "Mr. Sam",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    colSpan: 1,
    rowSpan: 2,
    background: "#FFF3EE" // Light peach
  },
  {
    text: "Working with Penvista has been a game-changer. They made the complex process feels seamless and helped me map out a clear path to European residency. I appreciate their honest and practical approach to global investment.",
    name: "Dr. Obi",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
    colSpan: 1,
    rowSpan: 1,
    background: "#F9FAFB" // Light gray
  },
  {
    text: "Their team provided invaluable advice on my property investment in Greece. Not only did I find a beautiful home, but they seamlessly handled the Golden Visa application. A top-tier service for elite global investors.",
    name: "Mr. Babatunde",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=150&auto=format&fit=crop",
    colSpan: 1,
    rowSpan: 1,
    background: "#FFF3EE" // Light peach
  }
];

const TestimonialsSection = () => {
  return (
    <section id='testimonnials' className="testimonials">
      <div className="container">
        
        <div className="testimonials-header">
          <span className="section-label">Testimonials</span>
          <h2>See Why Our Clients Trust Us. Their Words, and Success about Penvista.</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className={`testimonial-card col-span-${testimonial.colSpan} row-span-${testimonial.rowSpan}`}
              style={{ backgroundColor: testimonial.background }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Quote className="quote-icon" size={24} />
              <p className="testimonial-text">{testimonial.text}</p>
              
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <strong>{testimonial.name}</strong>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
