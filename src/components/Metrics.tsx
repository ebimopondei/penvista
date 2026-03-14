import { Globe, Trophy, Award } from 'lucide-react';
import './Metrics.css';

export default function Metrics (){
    return (
        <section className="about-metrics-section">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-item">
              <Globe className="metric-icon" size={32} />
              <h4>Global Network</h4>
              <p>With connections in over 50 countries, Penvista consistently ranks among the top 25 firms in global immigration services.</p>
            </div>
            <div className="metric-item">
              <Trophy className="metric-icon" size={32} />
              <h4>100% Success Rate</h4>
              <p>We leverage direct government connections and our legal expertise to streamline immigration processes in our clients' favor.</p>
            </div>
            <div className="metric-item">
              <Award className="metric-icon" size={32} />
              <h4>Licensed Collaborations</h4>
              <p>Penvista maintains official partnerships with government agencies overseeing citizenship and residency by investment programs.</p>
            </div>
          </div>
        </div>
      </section>
    )
}