"use client";

import { useState } from 'react';
import { GiRose } from "react-icons/gi";
import NavbarLi from './NavbarLi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container">
      {/* Logo Section */}
      <div className="logo-section">
        <span>Dil Se <span className="afsanay">Qalam</span></span>
        <GiRose className="icon" />
      </div>

      <nav className={`navbar ${isMenuOpen ? "mobile-menu flex" : "hidden"} desktop`}>
        <ul className={`flex ${isMenuOpen ? "" : "desktop"}`}>
          <NavbarLi href="/" name='Home' />
          <NavbarLi href="/aboutUs" name='About Us' />
          <NavbarLi href="/novels" name='Novels' />
          <NavbarLi href="/contactUs" name='Contact Us' />
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="mobile-menu-btn">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="svg-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;