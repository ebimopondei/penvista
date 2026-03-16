import './WhyPenvista.css';
import whyImage from '../assets/images/HO81G6Okts2vZE0Im9MaBBj4JEw.png';

export default function WhyPenvista() {
  return (
    <section className="why-penvista-section">
      <div className="container">
        <div className="why-penvista-grid">
          <div className="why-penvista-content">
            <div className="section-badge why-badge">Why Penvista</div>
            <h2 className="section-title">What Drives Us</h2>
            
            <div className="why-features-list">
              <div className="why-feature-item">
                <span className="why-feature-title">Value - </span>
                <span className="why-feature-desc">We advise individuals to make informed decisions with the options of high value Investments, while also gaining citizenship with global diversification.</span>
              </div>
              
              <div className="why-feature-item">
                <span className="why-feature-title">Result Driven - </span>
                <span className="why-feature-desc">Your needs are our utmost concern. We offer solutions and ensure optimized results while achieving your dreams.</span>
              </div>
              
              <div className="why-feature-item">
                <span className="why-feature-title">Competitive Fees - </span>
                <span className="why-feature-desc">Penvista offers competitive pricing as well as ensuring clients get better return on their Investments.</span>
              </div>
              
              <div className="why-feature-item">
                <span className="why-feature-title">Confidentiality - </span>
                <span className="why-feature-desc">Penvista maintains the privacy and confidentiality of clients within the limits of applicable laws and regulations.</span>
              </div>
              
              <div className="why-feature-item">
                <span className="why-feature-title">Professional Experience - </span>
                <span className="why-feature-desc">Our Brand consists of a team of qualified staff with an in-depth knowledge of the industry as well as a global network of partners to guide all the way.</span>
              </div>
              
              <div className="why-feature-item">
                <span className="why-feature-title">Bespoke Services - </span>
                <span className="why-feature-desc">We understand that every individual is unique and have different needs which helps analyze the value proportioned options suitable for you.</span>
              </div>
            </div>
          </div>
          
          <div className="why-penvista-image-wrapper">
            {/* <img src={whyImage} alt="Why Penvista" className="why-penvista-image" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
