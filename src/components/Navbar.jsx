import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {HashLink as Hash} from 'react-router-hash-link';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = navbarRef.current;

      if (prevScrollPos > currentScrollPos) {
        navbar.style.transform = 'translateY(0)';
      } else {
        navbar.style.transform = 'translateY(-100%)';
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`top-nav ${isMenuOpen ? 'active' : ''}`} ref={navbarRef}>
      <div className="logo">
        <b style={{ color: '#004aad' }}>Simpli</b>&nbsp;
        <b style={{ color: '#333132' }}>amal</b>
      </div>
      <div
        className={`hamburger-menu ${isMenuOpen ? 'change' : ''}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li className="get-started">
          <Hash smooth to="/#contact"><b>Get Started</b></Hash>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;