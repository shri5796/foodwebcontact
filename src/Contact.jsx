import React from 'react';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import ContactForm from './components/ContactForm';
import ContactDetails from './components/ContactDetails';
import Footer from './components/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <TopBar />
      <NavBar activePage="Contact" />

      <main className="contact-content">
        <div className="contact-container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            We consider all the drivers of change give you the components you need
            to change to create a truly happy.
          </p>

          <ContactForm />
          <ContactDetails />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
