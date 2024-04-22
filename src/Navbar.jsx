import React from 'react';

function Navbar() {
    return (
        <nav className="top-nav">
            <div className="logo">
                <b style={{ color: '#004aad' }}>Simpli</b>&nbsp;
                <b style={{ color: '#333132' }}>amal</b>
            </div>
            <div className="hamburger-menu">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li className="get-started"><a href="#contact"><b>Get Started</b></a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
