import React from 'react';

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>Email: <a href="mailto:anoopsiddharth9@gamil.com">anoopsiddharth9@gamil.com</a></p>
            <p>Phone: <a href="tel:+91 9741170044">+91 9741170044</a></p>
            <p>Address: <br/>Nandadweep Apartments, 
                        Viviani Road, Richards Town,<br/> Bengaluru, Karnataka, 560006</p>

          </div>
          <div className="social-icons">
            <h4>Follow on Linkedin:</h4>&nbsp;<a href="linkedin.com/in/anoopsiddharth"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
