import React, { useState, useEffect } from "react";
import logo from "./Techstiq-Logo.png";

export default function Footer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [animateStats, setAnimateStats] = useState(false);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimateStats(true);
          console.log("Footer came into view - animations triggered");
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById("innovative-footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("WhatsApp Updates - Phone Number Submitted:", phoneNumber);
    // Add your submission logic here
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", newsletterEmail);
    setNewsletterEmail("");
    // Add success animation
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:Support@Techstiq.com";
    console.log("Email clicked - redirecting to Support@Techstiq.com");
  };

  const stats = [
    { number: "10K+", label: "Happy Clients", icon: "👥" },
    { number: "500+", label: "Projects Done", icon: "🚀" },
    { number: "99%", label: "Success Rate", icon: "✨" },
    { number: "24/7", label: "Support", icon: "🛟" },
  ];

  return (
    <footer
      id="innovative-footer"
      className="text-center text-lg-start border-0"
      style={{
        background: "linear-gradient(135deg, rgb(224, 247, 250), rgb(224, 236, 252) 70%, rgb(240, 251, 252))",
        color: "#1a2a52",
        paddingTop: "3rem",
        paddingBottom: "0", // Changed to 0 since we'll add padding to copyright section
        position: "relative",
        overflow: "hidden",
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        opacity: isVisible ? 1 : 0,
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Animated Background Elements - Reduced for mobile */}
      <div
        className="d-none d-md-block"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(66, 139, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 207, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(218, 232, 252, 0.2) 0%, transparent 50%)
          `,
          animation: "float 6s ease-in-out infinite",
        }}
      />

      {/* Floating Particles - Reduced for mobile */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none" }}>
        {[...Array(window.innerWidth < 768 ? 5 : 15)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              background: "rgba(66, 139, 255, 0.2)",
              borderRadius: "50%",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `particle-float ${Math.random() * 4 + 3}s linear infinite`,
              animationDelay: Math.random() * 2 + "s",
            }}
          />
        ))}
      </div>

      {/* Main Content - Optimized for mobile */}
      <div className="container py-3" style={{ position: "relative", zIndex: 2 }}>
        {/* Mobile Layout */}
        <div className="d-block d-md-none">
          {/* Logo Section - Mobile */}
          <div className="text-center mb-4">
            <img
              src={logo}
              alt="Techstiq Logo"
              style={{ 
                height: "60px", 
                width: "auto", 
                objectFit: "contain",
                marginBottom: "1rem"
              }}
            />
          </div>

          {/* WhatsApp Section - Mobile First */}
          <div className="mb-4">
            <div
              className="p-3 rounded-4 mx-auto"
              style={{
                background: "linear-gradient(135deg, rgba(37, 211, 102, 0.1) 0%, rgba(25, 169, 82, 0.1) 100%)",
                border: "1px solid rgba(37, 211, 102, 0.3)",
                backdropFilter: "blur(10px)",
                maxWidth: "350px",
              }}
            >
              <div className="text-center mb-3">
                <i className="fab fa-whatsapp me-2" style={{ color: "#25D366", fontSize: "1.5rem" }}></i>
                <div>
                  <h6 style={{ color: "#1a2a52", fontSize: "1rem", fontWeight: "600", margin: 0 }}>
                    WhatsApp Updates
                  </h6>
                  <small style={{ color: "#5a6b8c", fontSize: "0.8rem" }}>Get instant notifications</small>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="mb-3">
                <div className="position-relative mb-2">
                  <span
                    className="position-absolute"
                    style={{
                      left: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#5a6b8c",
                      fontSize: "0.85rem",
                      zIndex: 2,
                    }}
                  >
                    🇮🇳 +
                  </span>
                  <input
                    type="tel"
                    className="form-control border-0 w-100"
                    placeholder="Enter Phone No"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    style={{
                      background: "#ffffff",
                      color: "#1a2a52",
                      paddingLeft: "45px",
                      paddingRight: "15px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                      borderRadius: "12px",
                      border: "2px solid rgba(37, 211, 102, 0.2)",
                      outline: "none",
                      fontSize: "0.9rem",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.border = "2px solid #25D366";
                      e.target.style.boxShadow = "0 0 0 3px rgba(37, 211, 102, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.border = "2px solid rgba(37, 211, 102, 0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn fw-semibold w-100"
                  style={{
                    background: "linear-gradient(135deg, #25D366 0%, #1ea952 100%)",
                    border: "none",
                    color: "#ffffff",
                    borderRadius: "12px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    fontSize: "0.9rem",
                    padding: "12px",
                  }}
                  onTouchStart={(e) => {
                    e.target.style.transform = "scale(0.98)";
                  }}
                  onTouchEnd={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  Submit
                </button>
              </form>
              
              <div className="text-center">
                <small style={{ color: "#5a6b8c", fontSize: "0.75rem" }}>
                  💬 Get real-time project updates & support
                </small>
              </div>
            </div>
          </div>

          {/* Social Media Section - Mobile */}
          <div className="text-center">
            <div className="d-flex justify-content-center flex-wrap gap-2">
              {[
                { icon: "fab fa-linkedin-in", color: "#0077b5", url: "https://www.linkedin.com/company/Techstiq/", name: "LinkedIn" },
                { icon: "fab fa-instagram", color: "#E4405F", url: "https://www.instagram.com/Techstiq?utm_source=qr&igsh=ejRiaTIyajVmc2Jr", name: "Instagram" },
                { icon: "fab fa-facebook-f", color: "#1877F2", url: "https://www.facebook.com/share/1CNEYPbsXN/?mibextid=qi2Omg", name: "Facebook" },
                { icon: "fab fa-x", color: "#000000", url: "https://x.com/Thetechstiq?t=M3RquO1wgZ2uTcoezu712Q&s=08", name: "Twitter" },
                { icon: "fab fa-youtube", color: "#FF0000", url: "https://youtube.com/@Techstiq?si=JCdJ8vi_XcQXlJXc", name: "YouTube" },
                { icon: "fas fa-envelope", color: "#D44638", url: "#", name: "Email" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.name === "Email" ? "#" : social.url}
                  target={social.name === "Email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  onClick={
                    social.name === "Email"
                      ? (e) => {
                          e.preventDefault();
                          handleEmailClick();
                        }
                      : undefined
                  }
                  className="text-decoration-none"
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    padding: "12px",
                    borderRadius: "12px",
                    color: social.color,
                    fontSize: "1.1rem",
                    transition: "all 0.2s ease",
                    border: "1px solid rgba(66, 139, 255, 0.1)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    userSelect: "none",
                    minWidth: "44px",
                    minHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.transform = "scale(0.95)";
                    e.currentTarget.style.boxShadow = `0 4px 15px ${social.color}40`;
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                  }}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="d-none d-md-block">
          <div className="row g-3 align-items-center justify-content-between flex-wrap">
            {/* Left: Logo and description with "Connect With Us" heading */}
            <div
              className="col-lg-auto col-md-12 d-flex flex-column align-items-start gap-2"
              style={{ minWidth: 320 }}
            >
              <div className="d-flex align-items-center gap-3 w-100">
                <img
                  src={logo}
                  alt="Techstiq Logo"
                  style={{ height: "80px", marginBottom:'50px ',width: "auto", objectFit: "contain", display: "block" }}
                />
              </div>
              
              {/* Social Icons */}
              <div className="d-flex gap-2 flex-wrap">
                {[
                  { icon: "fab fa-linkedin-in", color: "#0077b5", url: "https://www.linkedin.com/company/Techstiq/", name: "LinkedIn" },
                  { icon: "fab fa-instagram", color: "#E4405F", url: "https://www.instagram.com/Techstiq?utm_source=qr&igsh=ejRiaTIyajVmc2Jr", name: "Instagram" },
                  { icon: "fab fa-facebook-f", color: "#1877F2", url: "https://www.facebook.com/share/1CNEYPbsXN/?mibextid=qi2Omg", name: "Facebook" },
                  { icon: "fab fa-x", color: "#000000", url: "https://x.com/Thetechstiq?t=M3RquO1wgZ2uTcoezu712Q&s=08", name: "Twitter" },
                  { icon: "fab fa-youtube", color: "#FF0000", url: "https://youtube.com/@Techstiq?si=JCdJ8vi_XcQXlJXc", name: "YouTube" },
                  { icon: "fas fa-envelope", color: "#D44638", url: "#", name: "Email" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.name === "Email" ? "#" : social.url}
                    target={social.name === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    onClick={
                      social.name === "Email"
                        ? (e) => {
                            e.preventDefault();
                            handleEmailClick();
                          }
                        : undefined
                    }
                    className="text-decoration-none"
                    style={{
                      background: "rgba(255, 255, 255, 0.9)",
                      padding: "10px",
                      borderRadius: "12px",
                      color: social.color,
                      fontSize: "1.1rem",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      border: "1px solid rgba(66, 139, 255, 0.1)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      userSelect: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px) rotate(5deg)";
                      e.currentTarget.style.boxShadow = `0 8px 25px ${social.color}40`;
                      e.currentTarget.style.background = "rgba(255, 255, 255, 1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) rotate(0deg)";
                      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
                    }}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: WhatsApp updates */}
            <div className="col-lg-auto col-md-12">
              <div
                className="p-4 rounded-4 h-100"
                style={{
                  background: "linear-gradient(135deg, rgba(37, 211, 102, 0.1) 0%, rgba(25, 169, 82, 0.1) 100%)",
                  border: "1px solid rgba(37, 211, 102, 0.3)",
                  backdropFilter: "blur(10px)",
                  minWidth: "280px",
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <i className="fab fa-whatsapp me-2" style={{ color: "#25D366", fontSize: "1.8rem" }}></i>
                  <div>
                    <h6 style={{ color: "#1a2a52", fontSize: "1.1rem", fontWeight: "600", margin: 0 }}>WhatsApp Updates</h6>
                    <small style={{ color: "#5a6b8c", fontSize: "0.85rem" }}>Get instant notifications</small>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
                  <div className="flex-grow-1 position-relative">
                    <span
                      className="position-absolute"
                      style={{
                        left: "12px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#5a6b8c",
                        fontSize: "0.9rem",
                        zIndex: 2,
                      }}
                    >
                      🇮🇳 +
                    </span>
                    <input
                      type="tel"
                      className="form-control border-0"
                      placeholder="Enter Phone No"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      style={{
                        background: "#ffffff",
                        color: "#1a2a52",
                        paddingLeft: "50px",
                        paddingRight: "15px",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        borderRadius: "12px",
                        border: "2px solid rgba(37, 211, 102, 0.2)",
                        outline: "none",
                        fontSize: "0.95rem",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.border = "2px solid #25D366";
                        e.target.style.boxShadow = "0 0 0 3px rgba(37, 211, 102, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.border = "2px solid rgba(37, 211, 102, 0.2)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn fw-semibold px-4"
                    style={{
                      background: "linear-gradient(135deg, #25D366 0%, #1ea952 100%)",
                      border: "none",
                      color: "#ffffff",
                      borderRadius: "12px",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      fontSize: "0.95rem",
                      minWidth: "100px",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px) scale(1.05)";
                      e.target.style.boxShadow = "0 8px 25px rgba(37, 211, 102, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0) scale(1)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    Submit
                  </button>
                </form>
                <div className="text-center">
                  <small style={{ color: "#5a6b8c", fontSize: "0.8rem" }}>
                    💬 Get real-time project updates & support
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div
        className="w-100 text-center"
        style={{
          background: "rgba(26, 42, 82, 0.1)",
          borderTop: "1px solid rgba(66, 139, 255, 0.2)",
          padding: "1rem 0",
          marginTop: "2rem",
          backdropFilter: "blur(5px)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="container">
          <p 
            style={{ 
              margin: 0, 
              color: "#1a2a52", 
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            © Copyright 2025 Techstiq Infotech
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }
        @keyframes particle-float {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Mobile-specific optimizations */
        @media (max-width: 767px) {
          #innovative-footer {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          
          .container {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
