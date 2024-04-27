
function FeatureSection() {
  const sectionStyle ={
    display: 'flex', justifyContent: 'center', marginTop: '-7vh', zIndex:'1',
    height: '7vh', position:'relative', width:'100%',
  };
  const boxStyles = {
    display: 'flex',
    flexDirection: 'column', // Display content vertically
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: '20px',
    backgroundColor: 'rgb(67, 30, 229)', // Blue color
    color: '#fff', // White text
    borderLeft: '1px black solid',
    width: '20%',
  };
  

  return (
    <div style={sectionStyle}>
      <div style={boxStyles}>
        <h3>Customer Satisfaction</h3>
      </div>
      <div style={boxStyles}>
        <h3>Business Growth</h3>
      </div>
      <div style={boxStyles}>
        <h3>Financial Savings</h3>
      </div>
      <div style={boxStyles}>
        <h3>Cashflow Enhancement</h3>
      </div>
      <div style={boxStyles}>
        <h3>Team Upskilling</h3>
      </div>

    </div>
  );
}

export default FeatureSection;