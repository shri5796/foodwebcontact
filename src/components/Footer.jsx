import React from 'react';
import Logo from './Logo';
import SocialIcons from './SocialIcons';
import './Footer.css';

const Footer = () => {
  const pagesLinks = [
    'Home',
    'About',
    'Menu',
    'Pricing',
    'Blog',
    'Contact',
    'Delivery',
  ];

  const utilityLinks = [
    'Start Here',
    'Styleguide',
    'Password Protected',
    '404 Not Found',
    'Licenses',
    'Changelog',
    'View More',
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <Logo className="footer-logo" />
          <p className="footer-description">
            In the new era of technology we look a future with certainty and once
            to be our company and.
          </p>
          <div className="footer-social-icons">
            <SocialIcons variant="footer" />
          </div>
        </div>
        <div className="footer-column">
          <h4 className="footer-section-title">Pages</h4>
          <ul className="footer-links">
            {pagesLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
          <h4 className="footer-section-title">Utility Pages</h4>
          <ul className="footer-links">
            {utilityLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-section-title">Follow Us On Instagram</h4>
          <div className="instagram-grid">
            <div className="instagram-item"></div>
            <div className="instagram-item"></div>
            <div className="instagram-item"></div>
            <div className="instagram-item"></div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2023 HireXup Developer. All rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

