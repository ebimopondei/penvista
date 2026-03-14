import './About.css';
import Layout from '../components/Layout';
import AboutHeroSection from '../components/about/AboutHeroSection';
import AboutInroSection from '../components/about/AboutIntroSection';
import Services from '../components/Services';
import MissionAndVision from '../components/MissionAndVision';
import Team from '../components/Team';
import Metrics from '../components/Metrics';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';

const About = () => {
  return (
    <Layout>
      <div className="about-page">
        <AboutHeroSection />
        <AboutInroSection />
        <Services />
        <MissionAndVision />
        <Team />
        <Metrics />
        <TestimonialsSection />
        <ContactSection />
        <FAQSection />
      </div>
    </Layout>
  );
};

export default About;
