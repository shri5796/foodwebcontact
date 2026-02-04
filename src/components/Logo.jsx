import React from 'react';
import './Logo.css';

const Logo = ({ className = '' }) => {
  return (
    <div className={`logo ${className}`}>
      <svg
        className="logo-icon"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="20" cy="24" rx="12" ry="8" fill="#DC2626" />
        <ellipse cx="20" cy="22" rx="10" ry="6" fill="#DC2626" opacity="0.9" />
        <path
          d="M12 22C12 22 14 20 16 20C18 20 20 22 20 22"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M20 8C20 8 22 10 24 12C26 14 28 16 28 18"
          stroke="#DC2626"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M22 6C22 6 23 7 24 8C25 9 26 10 26 11"
          stroke="#DC2626"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="logo-text">Bistro Bliss</span>
    </div>
  );
};

export default Logo;

