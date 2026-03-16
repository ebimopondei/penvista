import './Services.css';
import citizenshipImg from '../assets/images/d6TuPDyx56YVai1LFHaRi69xVic17f5.png'
import residenceImg from '../assets/images/ZXXzqzt64zWukydF6rl1OC4xjI.png'
import postCitizenshipImg from '../assets/images/7uJ6TyJSkKCYKVY84NfZJz0Alc.png'

export default function Services(){
    return (
        <section className="about-services-section">
        <div className="container">
          <div className="section-header center">
            <div className="section-badge">Our Services</div>
          </div>
          <div className="services-grid">
            <div className="service-card" style={{ backgroundImage: `url(${citizenshipImg})` }}>
              <div className="service-content">
                <h3>Citizenship by Investment</h3>
                <p>A process that allows foreign nationals to acquire citizenship in a country through substantial economic investment.</p>
                <div className="service-line"></div>
              </div>
            </div>
            
            <div className="service-card" style={{ backgroundImage: `url(${residenceImg})` }}>
              <div className="service-content">
                <h3>Residence by Investment</h3>
                <p>Investment-based residency pathways allow foreign nationals to secure legal residence permits through qualified economic contributions to their chosen country.</p>
                <div className="service-line"></div>
              </div>
            </div>
            
            <div className="service-card" style={{ backgroundImage: `url('${postCitizenshipImg}')` }}>
              <div className="service-content">
                <h3>Post Citizenship Support</h3>
                <p>Our post-citizenship care provides dependent registration, banking setup, tax ID services, driving permits, and business incorporation assistance.</p>
                <div className="service-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}