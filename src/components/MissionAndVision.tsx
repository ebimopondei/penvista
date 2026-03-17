import './MissionAndVision.css';
import ourVisionImg from '../assets/images/4lGdLgf6RFMuRueYv0In7ovUGtw.png';
import ourMissionImg from '../assets/images/cMcih787tiXrnmi5bi07TAlPz2c.jpg';

export default function MissionAndVision(){
    return(
        <section id='our-vision-mission' className="vision-mission-section">
        <div className="container">
          {/* Vision */}
          <div className="split-layout">
            <div className="split-content">
              <div className="section-badge">Our Vision</div>
              <h2>The Future We Envision</h2>
              <p>To be a leading investment company which creates global opportunities with international diversifications.</p>
            </div>
            <div className="split-image">
              <img src={ourVisionImg} alt="Our Vision" />
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
              <img src={ourMissionImg} alt="Our Mission" />
            </div>
          </div>
        </div>
      </section>
    )
}