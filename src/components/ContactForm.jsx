import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // validation logic
  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      tempErrors.email = 'Enter a valid email address';
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('Form Submitted:', formData);
      alert('Form submitted successfully!');

      // reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="contact-form-card">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Write a subject"
          />
          {errors.subject && (
            <span className="error">{errors.subject}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
          ></textarea>
          {errors.message && (
            <span className="error">{errors.message}</span>
          )}
        </div>

        <button type="submit" className="send-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
