import image from '../../assets/images/zXCUeWBk2kmedhzNiDKTosdtdo.png';
import { Calendar, Package } from 'lucide-react';
import './AboutHeroSection.css';
import { Link } from 'react-router-dom';

export default function AboutHeroSection(){
    return (
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-image">
            <img src={image} alt="Penvista Global Citizenship" />
            <div className="overlay"></div>
          </div>
          <div className="about-hero-content">
            <div className="badge anim-slide-up">
              About Us
            </div>
            <h1 className="anim-slide-up-d1">
              We set out to build a better path to global citizenship
            </h1>
            <p className="anim-slide-up-d2">
              At Penvista, we're dedicated to guiding you through the complex world of citizenship and residency options, opening doors to global opportunities and a brighter future.
            </p>
            <div className="about-hero-actions anim-slide-up-d3">
              <Link to="https://calendly.com/penvistalimited-info/30min?month=2024-12">
                <button className="btn-primary"><Calendar size={18} /> Schedule a Meeting</button>
              </Link>
              <Link to="/about">
                <button className="btn-outline"><Package size={18} /> Explore Programmes</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
}