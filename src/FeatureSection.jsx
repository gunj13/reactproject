import React from 'react';

function FeatureSection() {
  const boxStyles = {
    display: 'flex',
    flexDirection: 'column', // Display content vertically
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: '20px',
    backgroundColor: '#007bff', // Blue color
    color: '#fff', // White text
    borderRadius: '8px',
    marginBottom: '20px',
    border: '1px black solid'
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={boxStyles}>
        <h3>Customer Satisfaction</h3>
        <p>Enhance customer experience</p>
      </div>
      <div style={boxStyles}>
        <h3>Business Growth</h3>
        <p>Drive revenue and expansion</p>
      </div>
      <div style={boxStyles}>
        <h3>Financial Savings</h3>
        <p>Optimize cost and savings</p>
      </div>
      <div style={boxStyles}>
        <h3>Cashflow Enhancement</h3>
        <p>Improve cashflow management</p>
      </div>
      <div style={boxStyles}>
        <h3>Team Upskilling</h3>
        <p>Empower your workforce</p>
      </div>
    </div>
  );
}

export default FeatureSection;