import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import logo from "./techstiq_logo.jpeg";
import treeSVG from "./tree swing.gif"; // Make sure this path is correct

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api1.learnitfy.com/api/user/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Thanks for contacting us! We'll get back to you soon.");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        alert('Failed to submit the form: ' + errorData.message);
      }
    } catch (error) {
      alert('Something went wrong. Please try again later.');
    }
  };

  const contactInfo = [
    { icon: '📍', title: 'Address', value: 'Jaipur, Rajasthan' },
    { icon: '📞', title: 'Phone', value: '+91 6350-383-767' },
    { icon: '✉️', title: 'Email', value: 'support@techstiq.com' },
    { icon: '🕒', title: 'Business Hours', value: 'Mon-Fri: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM' }
  ];

  return (
    <>
      <Helmet>
        <link rel="icon" href={logo} />
        <title>Contact Us | TechStiq – Get in Touch Today</title>
      </Helmet>
      <style jsx="true">{`
        * { box-sizing: border-box; }
        .contact-main-wrap {
          min-height: 100vh;
          background: #f8fafc;
          font-family: 'Inter', sans-serif;
        }
        .contact-hero-section {
          background: linear-gradient(100deg, #e0f2fe 0%, #b3e5fc 45%, #81d4fa 100%);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 0 0 2rem 0;
          min-height: 420px;
          position: relative;
          overflow: hidden;
          gap: 3rem;
        }
        .contact-left-illustration {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex: 1 1 420px;
          min-width: 350px;
          min-height: 320px;
          height: 100%;
        }
        .contact-left-illustration img {
          max-width: 480px;
          min-width: 320px;
          width: 100%;
          height: auto;
          object-fit: contain;
          margin: 2rem 0 2rem 1rem;
          border-radius: 32px;
          box-shadow: 0 8px 64px 0 rgba(66,195,201,0.20), 0 1px 8px rgba(30,136,229,0.07);
          background: white;
          animation: fadeIn 1.2s 0.2s both;
        }
        .contact-hero-main {
          flex: 2 1 500px;
          padding: 2.5rem 4vw;
        }
        .contact-section-head {
          text-align: left;
          margin-bottom: 1.5rem;
          animation: fadeUp 0.9s both;
        }
        .contact-section-head h5 {
          color: #41c3c9;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 0.35rem;
          letter-spacing: 1px;
          font-size: 1.1rem;
        }
        .contact-section-head h2 {
          font-size: 2.85rem;
          font-weight: 800;
          margin: 0 0 0.5rem 0;
          line-height: 1.16;
        }
        .contact-section-head h2 span {
          color: #41c3c9;
          font-weight: 900;
        }
        .animate-underline-bar {
          background: #41c3c9;
          height: 4px;
          width: 90px;
          margin: 0.65rem 0 1.1rem 0;
          border-radius: 3px;
          animation: barGrow 1.1s cubic-bezier(0.4,0,0.2,1);
        }
        .contact-section-head p {
          color: #495356;
          margin-bottom: 0.6rem;
          font-size: 1.18rem;
          max-width: 530px;
        }
        @keyframes fadeUp {
          from { opacity:0; transform: translateY(22px); }
          to { opacity:1; transform: none; }
        }
        @keyframes fadeIn {
          from{ opacity:0; transform: scale(0.92);}
          to{ opacity:1; transform: scale(1);}
        }
        @keyframes barGrow {
          from { width: 0; }
          to { width: 90px; }
        }

        /* Layout for Below Section */
        .contact-below-container {
          display: flex;
          max-width: 1200px;
          margin: 0 auto 3rem auto;
          gap: 2.5rem;
          padding: 0 2vw;
          align-items: flex-start;
        }
        .contact-form-side {
          flex: 2;
          background: white;
          border-radius: 1.1rem;
          padding: 2.7rem 2.2rem 2.2rem 2.2rem;
          box-shadow: 0 1px 8px 0 rgba(66, 165, 245, 0.06);
          animation: fadeUp 1.2s 0.15s both;
        }
        .form-title {
          font-size: 2rem;
          font-weight: 700;
          color: #0d47a1;
          text-align:center;
          margin-bottom: 1.2rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-group label {
          font-weight: 600;
          color: #1565c0;
          margin-bottom: 0.5rem;
          font-size: 1rem;
          display: block;
        }
        .form-input, .form-textarea {
          width: 100%;
          font-size: 1rem;
          border-radius: 0.8rem;
          border: 2px solid #e2e8f0;
          outline: none;
          background: #fff;
          padding: 1rem 1.2rem;
          margin-top: 0.3rem;
          transition: border-color 0.23s, box-shadow 0.22s;
        }
        .form-input:focus, .form-textarea:focus {
          border-color: #41c3c9;
          box-shadow: 0 0 0 4px #41c3c933;
        }
        .form-textarea {
          min-height:110px;
          max-height:260px;
          resize: vertical;
        }
        .submit-button {
          margin-top: 0.7rem;
          background: linear-gradient(135deg, #41c3c9 0%, #009688 100%);
          color: #fff;
          font-weight: 700;
          font-size: 1.1rem;
          border-radius: 0.8rem;
          border: none;
          cursor: pointer;
          padding: 1rem 2rem;
          transition: all 0.17s;
          will-change: transform;
        }
        .submit-button:hover {
          background: linear-gradient(135deg, #009688 0%, #41c3c9 100%);
          box-shadow: 0 8px 25px #41c3c933;
          transform: translateY(-3px) scale(1.025);
        }
        .contact-info-side {
          flex: 1 1 280px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
          gap: 2rem;
          animation: fadeIn 1.1s 0.23s both;
        }
        .contact-info-boxes {
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
        }
        .contact-info-card {
          background: #f6f7f9;
          border-radius: 1rem;
          box-shadow: 0 1px 6px 0 rgba(66,195,201,0.06);
          display: flex;
          align-items: flex-start;
          padding: 1.3rem 1.1rem;
          gap: 1.15rem;
          cursor: pointer;
          transition: box-shadow 0.2s, transform 0.2s;
          will-change: transform, box-shadow;
        }
        .contact-info-card:hover {
          box-shadow: 0 10px 40px rgba(65,195,201,0.16);
          transform: translateY(-7px) scale(1.045);
        }
        .contact-info-icon {
          font-size: 2.1rem;
          color: #41c3c9;
          margin-right: 0.24rem;
          animation: bounceIcon 2.7s infinite both;
        }
        @keyframes bounceIcon {
          0%,100% { transform: translateY(0);}
          50%{ transform: translateY(-9px);}
        }
        .contact-info-details h3 {
          margin: 0 0 3px 0;
          font-size: 1.13rem;
          font-weight: 700;
          color: #15788d;
        }
        .contact-info-details p {
          color: #516470;
          font-size:1rem;
          margin:0;
          white-space:pre-line;
        }
        /* Responsiveness */
        @media (max-width:1200px){
          .contact-hero-section {gap:0;}
          .contact-left-illustration img {max-width:340px;}
        }
        @media (max-width:1080px) {
          .contact-below-container { flex-direction:column; gap:2.5rem;}
          .contact-form-side, .contact-info-side { width: 100%; max-width: 100%; }
        }
        @media (max-width: 900px) {
          .contact-hero-section {flex-direction: column; gap:0; min-height:unset;}
          .contact-hero-main{padding:2rem 5vw;}
          .contact-section-head h2{font-size:2rem;}
          .contact-left-illustration {
            justify-content:center; align-items:center; min-width:unset;
            margin-top:2rem; margin-bottom: 0;
          }
          .contact-left-illustration img {
            max-width:340px; min-width:170px; margin:0 0 0 0; border-radius:20px;
            box-shadow:0 2px 16px 0 rgba(66,195,201,0.13);
          }
        }
        @media (max-width:540px){
          .contact-section-head h2{font-size:1.21rem;}
          .contact-form-side, .contact-info-side{padding:0.9rem 0.3rem;}
        }
      `}</style>

      <div className="contact-main-wrap">
        {/* Hero Section with Big Illustration and Heading */}
        <section className="contact-hero-section">
          <div className="contact-left-illustration">
            <img src={treeSVG} alt="Tree swing" />
          </div>
          <div className="contact-hero-main">
            <div className="contact-section-head">
              <h5>Contact Us</h5>
              <h2>
                We Are <span>Here For</span> You
              </h2>
              <div className="animate-underline-bar" />
              <p>
                Got a project in mind? We’d love to hear about it. Take five minutes to fill out our project form so we can get to know you and understand your project.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content: Form + Contact Info */}
        <div className="contact-below-container">
          <div className="contact-form-side">
            <div className="form-title">
              Start Your Project
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number *</label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                />
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="contact-info-side">
            <div className="contact-info-boxes">
              {contactInfo.map((info, idx) => (
                <div className="contact-info-card" key={idx}>
                  <span className="contact-info-icon" style={{animationDelay: `${idx * 0.23}s`}}>
                    {info.icon}
                  </span>
                  <div className="contact-info-details">
                    <h3>{info.title}</h3>
                    <p>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
