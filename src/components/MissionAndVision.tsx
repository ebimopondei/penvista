import './MissionAndVision.css';

export default function MissionAndVision(){
    return(
        <section className="vision-mission-section">
        <div className="container">
          {/* Vision */}
          <div className="split-layout">
            <div className="split-content">
              <div className="section-badge">Our Vision</div>
              <h2>The Future We Envision</h2>
              <p>To be a leading investment company which creates global opportunities with international diversifications.</p>
            </div>
            <div className="split-image">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" alt="Our Vision" />
            </div>
          </div>
          
          {/* Mission */}
          <div className="split-layout reverse top-gap">
            <div className="split-content">
              <div className="section-badge">Our Mission</div>
              <h2>Our Purpose, Your Journey</h2>
              <p>To provide advisory solutions which brings value and satisfaction to individuals while meeting their goals through the best options available in the industry.</p>
            </div>
            <div className="split-image">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" alt="Our Mission" />
            </div>
          </div>
        </div>
      </section>
    )
}