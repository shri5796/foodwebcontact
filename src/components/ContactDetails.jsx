import React from 'react';
import './ContactDetails.css';

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <div className="contact-detail-item">
        <h3 className="detail-title">Call Us:</h3>
        <p className="detail-content phone-number">+91-9975856513</p>
      </div>

      <div className="contact-detail-item">
        <h3 className="detail-title">Hours:</h3>
        <p className="detail-content">Mon-Fri 11am - 8pm</p>
        <p className="detail-content">Sat-Sun 9am - 10pm</p>
      </div>

      <div className="contact-detail-item">
        <h3 className="detail-title">Our Location:</h3>
        <p className="detail-content">123 Bridge Street</p>
        <p className="detail-content">New Delhi, IND 110060</p>
        <p className="detail-content">India</p>
      </div>
    </div>
  );
};

export default ContactDetails;
