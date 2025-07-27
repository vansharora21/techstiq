  import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import logo from "./techstiq_logo.jpeg";

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
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
        const data = await response.json();
        console.log('Success:', data);
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
        console.error('API Error:', errorData);
        alert('Failed to submit the form: ' + errorData.message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  const services = [
    { icon: '💻', title: 'Web Development', desc: 'Custom web solutions' },
    { icon: '📱', title: 'Mobile Apps', desc: 'iOS & Android development' },
    { icon: '☁️', title: 'Cloud Services', desc: 'Scalable cloud infrastructure' },
    { icon: '🔒', title: 'Cybersecurity', desc: 'Advanced security solutions' }
  ];

  const contactInfo = [
    { icon: '📍', title: 'Address', value: 'Jaipur,Rajasthan' },  
    { icon: '📞', title: 'Phone', value: '+91 6350-383-767 ' },
    { icon: '✉️', title: 'Email', value: 'support@techstiq.com' },
    { icon: '🕒', title: 'Business Hours', value: 'Mon-Fri: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM' }
  ];

  return (
    <>
      <Helmet>
        <link rel="icon" href={logo} />
        <title>Contact Us | TechStiq – Get in Touch Today</title>
        <meta name="description" content="Connect with TechStiq for cutting-edge technology solutions, web development, mobile apps, and digital transformation services." />
        <meta name="keywords" content="TechStiq, IT company, web development, mobile apps, contact" />
      </Helmet>

      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .contact-page {
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Animated Background */
        .hero-section {
          background: linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 50%, #81d4fa 100%);
          color: #0d47a1;
          padding: 4rem 1rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(66, 165, 245, 0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          transform: ${isVisible ? 'translateY(0)' : 'translateY(50px)'};
          opacity: ${isVisible ? '1' : '0'};
          transition: all 1s ease-out;
        }

        .hero-title {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
          background: linear-gradient(135deg, #0d47a1, #1565c0, #42a5f5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textGlow 3s ease-in-out infinite alternate;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          opacity: 0.8;
          max-width: 700px;
          margin: 0 auto 2rem;
          animation: slideInUp 1s ease-out 0.3s both;
        }

        .services-preview {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
          animation: slideInUp 1s ease-out 0.6s both;
        }

        .service-bubble {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: #1565c0;
          box-shadow: 0 4px 15px rgba(66, 165, 245, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .service-bubble:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 8px 25px rgba(66, 165, 245, 0.3);
        }

        /* Floating particles */
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #42a5f5;
          border-radius: 50%;
          opacity: 0.6;
          animation: float 6s ease-in-out infinite;
        }

        .main-section {
          background: #f8fafc;
          padding: 4rem 1rem;
          position: relative;
        }

        .contact-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .form-container {
          background: white;
          padding: 2.5rem;
          border-radius: 1rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          transform: ${isVisible ? 'translateX(0)' : 'translateX(-50px)'};
          opacity: ${isVisible ? '1' : '0'};
          transition: all 1s ease-out 0.5s;
          position: relative;
          overflow: hidden;
        }

        .form-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #42a5f5, #1e88e5, #1976d2);
          animation: shimmer 2s ease-in-out infinite;
        }

        .form-title {
          font-size: 2rem;
          font-weight: 700;
          color: #0d47a1;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .form-group {
          margin-bottom: 1.5rem;
          position: relative;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #1565c0;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input {
          width: 100%;
          padding: 1rem 1.2rem;
          font-size: 1rem;
          border-radius: 0.75rem;
          border: 2px solid #e2e8f0;
          outline: none;
          transition: all 0.3s ease;
          background: #fff;
          position: relative;
        }

        .form-input:focus {
          border-color: #42a5f5;
          box-shadow: 0 0 0 4px rgba(66, 165, 245, 0.15);
          transform: translateY(-2px);
        }

        .form-input:focus + .form-label {
          color: #42a5f5;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-button {
          background: linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%);
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 0.75rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .submit-button:hover {
          background: linear-gradient(135deg, #1e88e5 0%, #1565c0 100%);
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(66, 165, 245, 0.4);
        }

        .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .submit-button:hover::before {
          left: 100%;
        }

        .right-section {
          transform: ${isVisible ? 'translateX(0)' : 'translateX(50px)'};
          opacity: ${isVisible ? '1' : '0'};
          transition: all 1s ease-out 0.7s;
        }

        .contact-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(66, 165, 245, 0.05), rgba(30, 136, 229, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .contact-card:hover::before {
          opacity: 1;
        }

        .contact-card:hover {
          transform: translateY(-10px) rotateY(5deg);
          box-shadow: 0 20px 50px rgba(66, 165, 245, 0.2);
        }

        .contact-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
          animation: bounce 2s ease-in-out infinite;
        }

        .contact-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0d47a1;
          margin-bottom: 0.5rem;
        }

        .contact-card p {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .map-container {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          position: relative;
        }

        .map-header {
          background: linear-gradient(135deg, #42a5f5, #1e88e5);
          color: white;
          padding: 1.5rem;
          text-align: center;
        }

        .map-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .map-iframe {
          width: 100%;
          height: 300px;
          border: 0;
          display: block;
        }

        /* Tech-themed decorative elements */
        .tech-pattern {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 100px;
          height: 100px;
          opacity: 0.1;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2342a5f5' stroke-width='2'%3E%3Cpath d='M20 20h60v60H20z'/%3E%3Cpath d='M30 30h40v40H30z'/%3E%3Cpath d='M40 40h20v20H40z'/%3E%3C/g%3E%3C/svg%3E");
          animation: rotate 15s linear infinite reverse;
        }

        /* Mobile Contact Info Section */
        .mobile-contact-info {
          display: none;
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          margin-bottom: 2rem;
          transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
          opacity: ${isVisible ? '1' : '0'};
          transition: all 1s ease-out 0.3s;
        }

        .mobile-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .mobile-contact-item {
          text-align: center;
          padding: 1.5rem;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, rgba(66, 165, 245, 0.05), rgba(30, 136, 229, 0.05));
          transition: all 0.3s ease;
        }

        .mobile-contact-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(66, 165, 245, 0.15);
        }

        /* Animations */
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(66, 165, 245, 0.5); }
          50% { text-shadow: 0 0 40px rgba(66, 165, 245, 0.8); }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
            opacity: 0.8;
          }
          66% {
            transform: translateY(-10px) rotate(240deg);
            opacity: 0.4;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: 200px 0;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-title {
            font-size: 2.2rem;
          }

          .services-preview {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .contact-cards {
            grid-template-columns: 1fr;
          }

          .mobile-contact-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .form-container, .right-section {
            transform: none;
            opacity: 1;
          }

          .hero-section {
            padding: 3rem 1rem;
          }

          .main-section {
            padding: 2rem 1rem;
          }

          .mobile-contact-info {
            display: block;
            order: -1;
          }

          .form-container {
            order: 1;
          }

          .right-section {
            order: 2;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.8rem;
          }

          .form-container {
            padding: 1.5rem;
          }

          .contact-card {
            padding: 1.5rem;
          }

          .mobile-contact-info {
            padding: 1.5rem;
          }

          .service-bubble {
            padding: 0.75rem;
            font-size: 0.8rem;
          }
        }
      `}</style>

      <div className="contact-page">
        {/* Animated Hero Section */}
        <section className="hero-section">
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${4 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          
          <div className="hero-content">
            <h1 className="hero-title">Let's Build the Future Together</h1>
            <p className="hero-subtitle">
              Connect with our expert IT team for cutting-edge technology solutions, 
              digital transformation, and innovative software development services.
            </p>
            <div className="services-preview">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="service-bubble"
                  style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                >
                  <span>{service.icon}</span>
                  <span>{service.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="main-section">
          <div className="tech-pattern"></div>
          <div className="contact-container">
            {/* Mobile Contact Information - Shows only on mobile */}
            <div className="mobile-contact-info">
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#0d47a1',
                marginBottom: '1.5rem',
                textAlign: 'center',
                borderBottom: '2px solid #42a5f5',
                paddingBottom: '0.5rem'
              }}>
                Contact Information
              </h2>
              <div className="mobile-contact-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="mobile-contact-item">
                    <div className="contact-icon" style={{ 
                      fontSize: '2rem', 
                      marginBottom: '0.5rem',
                      color: '#42a5f5'
                    }}>
                      {info.icon}
                    </div>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#0d47a1',
                      marginBottom: '0.5rem'
                    }}>{info.title}</h4>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#64748b',
                      margin: '0',
                      lineHeight: '1.4',
                      whiteSpace: 'pre-line'
                    }}>{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated Contact Form */}
            <div className="form-container">
              <h2 className="form-title">Start Your Project</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    First Name *
                  </label>
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
                  <label htmlFor="lastName" className="form-label">
                    Last Name *
                  </label>
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
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
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
                  <label htmlFor="mobile" className="form-label">
                    Mobile Number *
                  </label>
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
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input form-textarea"
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                  />
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information & Map */}
            <div className="right-section">
              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="contact-card"
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <span 
                      className="contact-icon"
                      style={{ 
                        animationDelay: `${index * 0.2}s`,
                        color: '#42a5f5'
                      }}
                    >
                      {info.icon}
                    </span>
                    <h3>{info.title}</h3>
                    <p style={{ whiteSpace: 'pre-line' }}>{info.value}</p>
                  </div>
                ))}
              </div>
{/* 
              <div className="map-container">
                <div className="map-header">
                  <h3>Visit Our Office</h3>
                  <p>Located in the heart of Jaipur's tech district</p>
                </div>
                <iframe
                  className="map-iframe"
                  title="Google Maps - TechStiq Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1668.7096558668325!2d75.74276264959961!3d26.90530964898532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db49bb5a72b39%3A0x4b2a16b4ad946ddf!2sGandhi%20Path%20W%2C%20Girnar%20Colony%2C%20Scheme%20Number%208%2C%20Girnar%20Colony%20South%2C%20Sanjay%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302021!5e0!3m2!1sen!2sin!4v1749541441041!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
