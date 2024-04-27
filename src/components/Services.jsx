import React, { useState, useEffect ,useRef} from "react";
import Footer from './Footer';
import './Services.css';

function Services() {
  return (
    <div className="services-page">
    <div id="scrollpic"></div>
      <div className="detailed-services">
        <h1>Our Services</h1>
        
        <div className="service-box">
          <h2><i className="fas fa-chart-line service-icon"></i>&nbsp;&nbsp;TRAINING</h2>
          <div class="space"></div>
          <div className="sub-section">
            <h3>Lean Methodology</h3>
            <p>
              Embrace lean principles to optimize processes, eliminate waste, and maximize value for your customers.
            </p>
          </div>
          <div className="sub-section">
            <h3>Six Sigma</h3>
            <p>
              Achieve operational excellence and quality perfection with time-tested Six Sigma methodologies. We lay emphasis on a phased approach to build a continuous improvement culture in your organization. Build a strong performing team with training for Champion, Green Belts, and Black Belts on DMAIC and DFSS.
            </p>
          </div>
          <div className="sub-section">
            <h3>Project Management</h3>
            <p>
              Equip your team with the essential skills to successfully plan, execute, and deliver projects on time and within budget through Project Management training, from traditional or Agile.
            </p>
          </div>
          {/* Add more sub-sections as needed */}
        </div>

        <div className="service-box">
        <h2><i className="fas fa-chart-line service-icon"></i>&nbsp;&nbsp;CONSULTING</h2>
        <div class="space"></div>
          <div className="sub-section">
            <h3>Strategic Planning</h3>
            <p>
              Develop strategic initiatives and plans to drive business growth and competitive advantage.
            </p>
          </div>
          <div className="sub-section">
            <h3>Process Improvement</h3>
            <p>
              Identify bottlenecks and inefficiencies in processes, and implement solutions for enhanced productivity.
            </p>
          </div>
          {/* Add more sub-sections as needed */}
        </div>

        <div className="service-box">
        <h2><i className="fas fa-chart-line service-icon"></i>&nbsp;&nbsp;ASSESSMENTS</h2>
        <div class="space"></div>
          <div className="sub-section">
            <h3>Channel Evaluation</h3>
            <p>
              Channel assessments provide invaluable insights into your distribution network's strengths and weaknesses, enabling strategic decision-making, optimization, and transformation.
            </p>
          </div>
          <div className="sub-section">
            <h3>Supplier Assessment</h3>
            <p>
              We can help ensure supplier reliability, quality, and compliance by assessing supplier performance, mitigating risks, and identifying improvement opportunities in alignment with your supply chain policies.
            </p>
          </div>
          <div className="sub-section">
            <h3>Training & Skill Assessment</h3>
            <p>
              We can provide customized assessment solutions to evaluate employee knowledge and skills, enabling targeted training interventions and performance improvements.
            </p>
          </div>
          {/* Add more sub-sections as needed */}
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
