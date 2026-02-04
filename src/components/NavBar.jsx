import React from 'react';
import Logo from './Logo';
import './NavBar.css';

const NavBar = ({ activePage = 'Contact' }) => {
  const navLinks = [
    { name: 'Home', path: '#' },
    { name: 'About', path: '#' },
    { name: 'Menu', path: '#' },
    { name: 'Pages', path: '#' },
    { name: 'Contact', path: '#' },
  ];

  return (
    <nav className="nav-bar">
      <div className="nav-content">
        <Logo />
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`nav-link ${activePage === link.name ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <button className="book-table-btn">Book A Table</button>
      </div>
    </nav>
  );
};

export default NavBar;

