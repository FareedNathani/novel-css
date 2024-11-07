import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Social Icons */}
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/fareed-nathani-30180a324/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedin className='icon'/>
          </a>
          <a
            href="mailto:fareednathani123@gmail.com"
            className="email"
            aria-label="Email"
          >
            <FaEnvelope className='icon'/>
          </a>
          <a
            href="https://github.com/FareedNathani/portfolio-next.git"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
            aria-label="GitHub"
          >
            <FaGithub className='icon'/>
          </a>
        </div>

        {/* Sections */}
        <div className="footer-grid">
          
          {/* FAQ Section */}
          <div className="footer-section">
            <h2>FAQ</h2>
            <ul>
              <li><a href="/faq">What is Dil Se Qalam?</a></li>
              <li><a href="/faq">How do I start reading novels?</a></li>
              <li><a href="/faq">Can I submit my own stories?</a></li>
            </ul>
          </div>

          {/* Navbar Links */}
          <div className="footer-section">
            <h2>Navigation</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/aboutUs">About Us</a></li>
              <li><a href="/novels">Novels</a></li>
              <li><a href="/contactUs">Contact Us</a></li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="footer-section">
            <h2>Links</h2>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* All Rights Reserved */}
        <div className="footer-rights">
          &copy; 2024 Fareed Nathani | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;