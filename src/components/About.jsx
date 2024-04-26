import React from 'react';
import './About.css';
import Footer from './Footer';

const About = () => {
  return (
    <div className="about-us-container">
      <div className="upper-half">
      <h1 className="about-us-heading">About Us</h1>
        <div className="about-image-container">
          <img src="/images/stand.png" alt="About Us" className="about-image" />
        </div>
        
      </div>

      <div className="lower-half">
        <p className="intro-text">
        <h1>Simpli amal</h1>
        Simpli amal was founded in Nov 2022 on the principle of simplified execution derived from "Amal" which means putting learning into practice.
        Our purpose is to enable the success of our customers on their transformation journey.</p>

        <div className="box-container">
          <div className="boxes">
            <h3>Mission</h3>
            <p>
              Transform tough business challenges across industry sectors into opportunities for fostering sustainable growth and prosperity for our clients, their stakeholders, and the broader community.
            </p>
          </div>

          <div className="boxes">
            <h3>Vision</h3>
            <p>
              Empower Indian & Global MSMEs, startups, corporates & institutions by enabling upskilling and operational excellence through the strategic application of change management, lean six sigma, business transformation methodologies and innovative solutions, & coaching.
            </p>
          </div>

          <div className="boxes">
            <h3>Values</h3>
            <p>★ Customer centricity</p>
            <p>★ Agility</p>
            <p>★ Passion</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;