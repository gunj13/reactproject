import React from "react";
import Footer from './Footer';
import './Services.css';

function Services() {
  return (
    <div className="services-page">
      {/* Detailed Services */}
    <div id="scrollpic"></div>
      <div className="detailed-services">
        <h1 style={{ color: "#004aad" }}>Our Services</h1>
        <div className="service-box-container">
          <div className="service-box">
            <i className="fas fa-chart-line service-icon"></i>
            <h3>Training</h3>
            <ul>
              <li>Lean Management System</li>
            </ul>
          </div>
          <div className="service-box">
            <i className="fas fa-star service-icon"></i>
            <h3>Consulting</h3>
            <ul>
              <li>Lean Management System</li>
            </ul>
          </div>
          <div className="service-box">
            <i className="fas fa-lightbulb service-icon"></i>
            <h3>Assessments / Appraisals</h3>
            <ul>
              <li>Lean Management System</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits */}

      <h1 className="benefits-header">
        Benefits
      </h1>
      <section className="benefits">
        <div className="benefit">
          <i className="fas fa-chart-line"></i>
          <h3>Enhanced Efficiency</h3>
          <p>
            Streamline operations, eliminate inefficiencies, and optimize
            processes for improved productivity and cost savings.
          </p>
        </div>

        <div className="benefit">
          <i className="fas fa-star"></i>
          <h3>Improved Quality</h3>
          <p>
            Ensure your products and services meet the highest standards,
            leading to increased customer satisfaction and brand loyalty.
          </p>
        </div>

        <div className="benefit">
          <i className="fas fa-lightbulb"></i>
          <h3>Accelerated Innovation</h3>
          <p>
            Foster a culture of innovation, enabling rapid iteration,
            experimentation, and adaptation to market changes.
          </p>
        </div>

        <div className="benefit">
          <i className="fas fa-exchange-alt"></i>
          <h3>Seamless Transformation</h3>
          <p>
            Ensure smooth transitions during complex business transformations,
            minimizing disruptions and maximizing success.
          </p>
        </div>

        <div className="benefit">
          <i className="fas fa-shield-alt"></i>
          <h3>Risk Mitigation</h3>
          <p>
            Mitigate risks across your supply chain and project lifecycle,
            safeguarding your business and protecting your bottom line.
          </p>
        </div>

        <div className="benefit">
          <i className="fas fa-balance-scale"></i>
          <h3>Enhanced Decision-Making</h3>
          <p>
            Empower informed decision-making with data-driven insights to
            capitalize on market trends, identify opportunities, and mitigate
            risks.
          </p>
        </div>

        <div className="benefit">
          <i className="fas fa-cog"></i>
          <h3>Tailored Solutions</h3>
          <p>
            Receive personalized support and achieve measurable results aligned
            with your strategic goals through customized solutions.
          </p>
        </div>

        <div className="benefit">
          <i className="fas fa-user-tie"></i>
          <h3>Empowered Leadership</h3>
          <p>
            Equip your leadership team with the knowledge and skills to drive
            change, foster innovation, and inspire high-performance teams.
          </p>
        </div>

        <div className="benefit">
          <i className="fas fa-chart-bar"></i>
          <h3>Measurable Results</h3>
          <p>
            We focus on driving real, sustainable value for your organization,
            delivering tangible results aligned with your goals.
          </p>
        </div>
      </section>
      <Footer/>        
    </div>
  );
};

export default Services;
