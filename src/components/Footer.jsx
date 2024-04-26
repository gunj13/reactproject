import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p>Email: anoopsiddharth9@gmail.com</p>
                    <p>Phone: +91 9741170044</p>
                    <p>Address: <br/>Nandadweep Apartments,<br/> 
                        Viviani Road, Richards Town,<br/> Bengaluru, Karnataka, 560006</p>
                </div>
                <div className="map-container">
                    {/* Google Map */}
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.507379564432!2d77.61327277454711!3d13.003329114182963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16fa66f86b73%3A0xc7a4b400f3859d33!2sNanda%20Dweep%20Apartments!5e0!3m2!1sen!2sin!4v1713864505409!5m2!1sen!2sin"
                        width="400"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className="social-icons">
                <h4>Follow Us</h4>
                <ul>
                    <li><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="linkedin.com/in/anoopsiddharth"><i className="fab fa-linkedin"></i></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
