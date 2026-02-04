import React from 'react';
import SocialIcons from './SocialIcons';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="top-bar-left">
          <span className="phone-text">Call us: +91-9975856513</span>
          <span className="email-text">
            <svg
              className="email-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 3h12c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M2 4l6 4 6-4"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
            yummy@bistrobliss.com
          </span>
        </div>
        <div className="top-bar-right">
          <SocialIcons variant="header" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;

