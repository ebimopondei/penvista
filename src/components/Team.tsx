import './Team.css'
export default function Team (){
    return (
        <section className="about-team-section">
        <div className="container">
          <div className="section-header center">
            <div className="section-badge">Our Team</div>
            <h2><span>Bridging Borders,</span> Building Futures</h2>
          </div>

          <div className="team-list">
            {/* Joy Afegbua */}
            <div className="team-member-row">
              <div className="team-text">
                <span className="quote-icon start">“</span>
                <p>
                  <strong>Joy Afegbua</strong>, founder of Penvista Limited, possesses diversified and extensive expertise in finance, project management, and international citizenship advisory.
                </p>
                <p>
                  With a Master's in Financial Economics and experience as Senior Client Advisor at CIPROG LTD, she specialized in citizenship by investment for high-net-worth individuals. Her seven-year tenure at StarTimes Group in finance and brand management further enriches her multifaceted approach client service.
                </p>
                <span className="quote-icon end">”</span>
                <div className="team-name">Joy Afegbua, Managing Director</div>
              </div>
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Joy Afegbua" />
              </div>
            </div>

            {/* Legal Team */}
            <div className="team-department">
              <h3><strong>Legal</strong> Team</h3>
            </div>
            <div className="team-member-row reverse">
              <div className="team-text">
                <span className="quote-icon start">“</span>
                <p>
                  <strong>Izunna Lawrence Emecheta</strong> is a distinguished legal professional specializing in corporate compliance, property law, and investment consultancy.
                </p>
                <p>
                  A graduate of Madonna University's Law Faculty and Nigerian Law School, he is a member of The Chartered Institute of Arbitrators and ICSAN.
                </p>
                <p>
                  His expertise in navigating complex legal frameworks and regulatory compliance makes him an invaluable advisor for global citizenship solutions.
                </p>
                <span className="quote-icon end">”</span>
                <div className="team-name">Izunna L. Emecha, Legal Advisor</div>
              </div>
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" alt="Izunna Lawrence Emecheta" />
              </div>
            </div>

            {/* Advisory Team */}
            <div className="team-department">
              <h3><strong>Advisory</strong> Team</h3>
            </div>
            <div className="team-member-row">
              <div className="team-text">
                <span className="quote-icon start">“</span>
                <p>
                  <strong>Ugo Obi</strong>, Penvista's Board of Advisor and founder of Tilden Development Limited, brings extensive expertise in investment and wealth management.
                </p>
                <p>
                  Gained a master's from Aston Business School and has experience managing $40M+ in real estate portfolios, he specializes in international business, forex markets, and strategic investment consulting. His analytical approach drives innovative solutions in global investment strategies.
                </p>
                <span className="quote-icon end">”</span>
                <div className="team-name">Ugo Obi, Chief Advisor</div>
              </div>
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" alt="Ugo Obi" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}