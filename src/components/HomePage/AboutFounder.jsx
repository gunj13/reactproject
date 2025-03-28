import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

function AboutFounder() {
   return (
        <section className="all-about">
        <div className="white-line"></div>
      <div className="about-container" id="about">
        <h1>Meet the Founder</h1>
        <div className="about-content">
          <div className="profile">
            <img src="/images/blank-profile.png" alt="Profile Photo" id="profileonly"/>
            {/* <img src="/images/profile.jpeg" alt="Profile Photo" id="profileonly"/> */}
            <div className="icon-section">
              <img src="/images/tata2.png" alt="Tata Motors" title="Tata Motors" style={{height:'45px',  padding:'3px'}}/>
              <img src="/images/honda2.png" alt="Honda Motor" title="Honda Motor"/>
              <img src="/images/3M2.png" alt="3M India" title="3M India"/>
            </div>
          </div>
          <div className="aboutStyles">
            {/* <h2>Founder</h2> */}
            <ul>
              <li>Three decades of Corporate Experience across Business Verticals and Multiple Cultures</li>
              <li>Accomplished P&L, Sales and Marketing Leader</li>
              <li>Certified Master Black Belt and Business Black Belt in Lean Six Sigma</li>
            </ul><br></br>
            <Link smooth to="/#contact" className="reachout-btn">Reach Out to Learn More</Link>
    
          </div>
        </div>
      </div>
    </section>
    );  
}  

export default AboutFounder;