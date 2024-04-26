import React from 'react';

function AboutFounder() {
    const aboutStyles = {
      fontSize:'110%',
      
    };
    const reachOut = {
      backgroundColor: 'rgb(67, 30, 229)',
      padding: '10px',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      marginTop: '20px',
      textAlign: 'center', 
      fontSize: '110%',
  };
  

    return (
        <section className="all-about">
        <div className="white-line"></div>
      <div className="about-container" id="about">
        <h1>Meet the Founder</h1>
        <div className="about-content">
          <div className="profile">
            <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="Profile Photo" id="profileonly"/>
            <div className="icon-section">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="/images/tat.png" alt="Tata Motors" title="Tata Motors"/>
              <img src="/images/hon.png" alt="Honda Motor" title="Honda Motor"/>
              <img src="/images/3m.png" alt="3M India" title="3M India"/>
            </div>
          </div>
          <div style={aboutStyles}>
            <h2>Anoop Siddharth</h2>
            <ul>
              <li>Three decades of Corporate Experience across Business Verticals and Multiple Cultures</li>
              <li>Accomplished P&L, Sales and Marketing Leader</li>
              <li>Certified Master Black Belt and Business Black Belt in Lean Six Sigma</li>
            </ul>
            <button style={reachOut}>Reach Out to Learn More</button>
    
          </div>
        </div>
      </div>
    </section>
    );  
}  

export default AboutFounder;