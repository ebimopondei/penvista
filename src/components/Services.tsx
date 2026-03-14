import './Services.css';

export default function Services(){
    return (
        <section className="about-services-section">
        <div className="container">
          <div className="section-header center">
            <div className="section-badge">Our Services</div>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop" alt="Citizenship by Investment" />
              </div>
              <div className="service-content">
                <h3>Citizenship by Investment</h3>
                <p>A process that allows foreign nationals to acquire citizenship in a country through substantial economic investment.</p>
                <div className="service-line"></div>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=600&auto=format&fit=crop" alt="Residence by Investment" />
              </div>
              <div className="service-content">
                <h3>Residence by Investment</h3>
                <p>Investment-based residency pathways allow foreign nationals to secure legal residence permits through qualified economic contributions to their chosen country.</p>
                <div className="service-line"></div>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-image">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" alt="Post Citizenship Support" />
              </div>
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