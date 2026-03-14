import HeroSection from '../components/HeroSection';
import ProgramsSection from '../components/ProgramsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <ProgramsSection />
        <TestimonialsSection />
        <ContactSection />
        <FAQSection />
      </Layout>
    </>
  );
};

export default Home;
