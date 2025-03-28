import React from 'react';

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <h2>Contact Us</h2>
            {/* <p>Email: <a href="mailto:add_email_here">add_email_here</a></p>
            <p>Phone: <a href="tel:add_phone_no">add_phone_no</a></p> */}
          </div>
          <div className="social-icons">
            <h4>Follow on Linkedin:</h4>&nbsp;<a href="linkedin.com/in/anoopsiddharth"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
