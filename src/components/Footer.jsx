import React, { useState, useEffect } from "react";

export default function Footer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [animateStats, setAnimateStats] = useState(false);

  // Real-time clock update


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
    window.location.href = "mailto:Support@techstiq.com";
    console.log("Email clicked - redirecting to Support@techstiq.com");
  };

  const stats = [
    { number: "10K+", label: "Happy Clients", icon: "👥" },
    { number: "500+", label: "Projects Done", icon: "🚀" },
    { number: "99%", label: "Success Rate", icon: "✨" },
    { number: "24/7", label: "Support", icon: "🛟" }
  ];

  return (
    <footer
      id="innovative-footer"
      className="text-center text-lg-start border-0"
      style={{
        background: "linear-gradient(135deg, #dae8fc 0%, #a8cfff 50%, #95c7ff 100%)",
        color: "#1a2a52",
        paddingTop: "4rem",
        paddingBottom: "1rem",
        position: "relative",
        overflow: "hidden",
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        opacity: isVisible ? 1 : 0,
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >
      {/* Animated Background Elements */}
      <div
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
          animation: "float 6s ease-in-out infinite"
        }}
      ></div>

      {/* Floating Particles */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none" }}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              background: "rgba(66, 139, 255, 0.3)",
              borderRadius: "50%",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `particle-float ${Math.random() * 3 + 2}s linear infinite`,
              animationDelay: Math.random() * 2 + "s"
            }}
          />
        ))}
      </div>

      {/* Stats Section */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row mb-5">
          <div className="col-12">
            <div className="d-flex justify-content-center align-items-center mb-4">
              <div
                style={{
                  background: "rgba(66, 139, 255, 0.1)",
                  padding: "8px 20px",
                  borderRadius: "25px",
                  border: "1px solid rgba(66, 139, 255, 0.2)",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "#428bff"
                }}
              >
                🎯 Trusted by Industry Leaders
              </div>
            </div>
            <div className="row g-4">
              {stats.map((stat, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                  <div
                    className="text-center p-4 rounded-4 h-100"
                    style={{
                      background: "rgba(255, 255, 255, 0.8)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(66, 139, 255, 0.2)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: animateStats ? "translateY(0)" : "translateY(30px)",
                      opacity: animateStats ? 1 : 0,
                      transitionDelay: `${index * 0.1}s`,
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                      e.currentTarget.style.boxShadow = "0 20px 40px rgba(66, 139, 255, 0.2)";
                      console.log(`Stat hovered: ${stat.label}`);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{stat.icon}</div>
                    <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#428bff", marginBottom: "0.5rem" }}>
                      {stat.number}
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#5a6b8c", fontWeight: "500" }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-4" style={{ position: "relative", zIndex: 2 }}>
        <div className="row g-5 align-items-start">
          {/* Left Column - Company Info & Social */}
          <div className="col-lg-4 col-md-6">
            {/* Company Logo/Brand */}
            <div className="mb-4">
              <div
                className="d-flex align-items-center mb-3"
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #428bff 0%, #1a61ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                🚀 TECHSTIQ
              </div>
              <p style={{ color: "#5a6b8c", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Transforming ideas into digital reality with cutting-edge technology and innovative solutions.
              </p>
            </div>

            {/* Social Media */}
            <h6 className="fw-bold mb-3" style={{ color: "#1a2a52" }}>
              Connect With Us
            </h6>
            <div className="d-flex gap-2 mb-4 flex-wrap">
              {[
                { icon: "fab fa-linkedin-in", color: "#0077b5", url: "https://www.linkedin.com/company/techstiq/", name: "LinkedIn" },
                { icon: "fab fa-instagram", color: "#E4405F", url: "https://www.instagram.com/techstiq?utm_source=qr&igsh=ejRiaTIyajVmc2Jr", name: "Instagram" },
                { icon: "fab fa-facebook-f", color: "#1877F2", url: "https://www.facebook.com/share/1CNEYPbsXN/?mibextid=qi2Omg", name: "Facebook" },
                { icon: "fab fa-x", color: "#000000", url: "https://x.com/Thetechstiq?t=M3RquO1wgZ2uTcoezu712Q&s=08", name: "Twitter" },
                { icon: "fab fa-youtube", color: "#FF0000", url: "https://youtube.com/@techstiq?si=JCdJ8vi_XcQXlJXc", name: "YouTube" },
                { icon: "fas fa-envelope", color: "#D44638", url: "#", name: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.name === "Email" ? "#" : social.url}
                  target={social.name === "Email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  onClick={social.name === "Email" ? (e) => { e.preventDefault(); handleEmailClick(); } : undefined}
                  className="text-decoration-none"
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    padding: "10px",
                    borderRadius: "12px",
                    color: social.color,
                    fontSize: "1.1rem",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: "1px solid rgba(66, 139, 255, 0.1)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-3px) rotate(5deg)";
                    e.target.style.boxShadow = `0 8px 25px ${social.color}40`;
                    e.target.style.background = "rgba(255, 255, 255, 1)";
                    console.log(`${social.name} hovered`);
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0) rotate(0deg)";
                    e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                    e.target.style.background = "rgba(255, 255, 255, 0.9)";
                  }}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>


          </div>

          {/* Middle Column - Newsletter */}
          {/* <div className="col-lg-4 col-md-6">
            <div
              className="p-4 rounded-4 h-100"
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(66, 139, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
              }}
            >
              <div className="text-center mb-4">
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📧</div>
                <h5 style={{ color: "#1a2a52", fontWeight: "700", marginBottom: "0.5rem" }}>
                  Stay Updated
                </h5>
                <p style={{ color: "#5a6b8c", fontSize: "0.9rem", margin: 0 }}>
                  Get the latest tech insights and updates delivered to your inbox
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="mb-4">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control border-0"
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      console.log("Newsletter email changed:", e.target.value);
                    }}
                    style={{
                      background: "#f8fbff",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      border: "2px solid transparent",
                      fontSize: "0.95rem",
                      transition: "all 0.3s ease"
                    }}
                    onFocus={(e) => {
                      e.target.style.border = "2px solid #428bff";
                      e.target.style.background = "#ffffff";
                      console.log("Newsletter input focused");
                    }}
                    onBlur={(e) => {
                      e.target.style.border = "2px solid transparent";
                      e.target.style.background = "#f8fbff";
                    }}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn w-100 fw-semibold"
                  style={{
                    background: "linear-gradient(135deg, #428bff 0%, #1a61ff 100%)",
                    border: "none",
                    color: "#ffffff",
                    borderRadius: "12px",
                    padding: "12px",
                    fontSize: "0.95rem",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 8px 25px rgba(66, 139, 255, 0.4)";
                    console.log("Newsletter subscribe button hovered");
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  🚀 Subscribe to Newsletter
                </button>
              </form>

              <div className="text-center">
                <small style={{ color: "#5a6b8c", fontSize: "0.8rem" }}>
                  📊 Join 10,000+ tech enthusiasts already subscribed
                </small>
              </div>
            </div>
          </div> */}

          {/* Right Column - WhatsApp Updates */}
          <div className="col-lg-4 col-md-12">
            <div
              className="p-4 rounded-4 h-100"
              style={{
                background: "linear-gradient(135deg, rgba(37, 211, 102, 0.1) 0%, rgba(25, 169, 82, 0.1) 100%)",
                border: "1px solid rgba(37, 211, 102, 0.3)",
                backdropFilter: "blur(10px)"
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <i 
                  className="fab fa-whatsapp me-2" 
                  style={{ color: "#25D366", fontSize: "1.8rem" }}
                ></i>
                <div>
                  <h6 style={{ color: "#1a2a52", fontSize: "1.1rem", fontWeight: "600", margin: 0 }}>
                    WhatsApp Updates
                  </h6>
                  <small style={{ color: "#5a6b8c", fontSize: "0.85rem" }}>
                    Get instant notifications
                  </small>
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
                      zIndex: 2
                    }}
                  >
                    🇮🇳 +
                  </span>
                  <input
                    type="tel"
                    className="form-control border-0"
                    placeholder="Enter Phone No"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      console.log("Phone number input changed:", e.target.value);
                    }}
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
                      transition: "all 0.3s ease"
                    }}
                    onFocus={(e) => {
                      e.target.style.border = "2px solid #25D366";
                      e.target.style.boxShadow = "0 0 0 3px rgba(37, 211, 102, 0.1)";
                      console.log("Phone input focused");
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
                    minWidth: "100px"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px) scale(1.05)";
                    e.target.style.boxShadow = "0 8px 25px rgba(37, 211, 102, 0.4)";
                    console.log("Submit button hovered");
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

        {/* Bottom Section */}
        <div 
          className="row mt-5 pt-4"
          style={{ 
            borderTop: "1px solid rgba(66, 139, 255, 0.2)",
            background: "rgba(255, 255, 255, 0.3)",
            borderRadius: "20px",
            margin: "2rem -15px 0 -15px",
            padding: "2rem 15px 1rem 15px"
          }}
        >
          <div className="col-md-6 text-md-start text-center">
            <p className="mb-2" style={{ color: "#1a2a52", fontSize: "0.9rem", fontWeight: "500" }}>
              © 2025 Techstiq Labs. All rights reserved.
            </p>
            <small style={{ color: "#5a6b8c", fontSize: "0.8rem" }}>
              🚀 Powered by Innovation • 🔒 Built with Security • ⚡ Optimized for Performance
            </small>
          </div>
          <div className="col-md-6 text-md-end text-center mt-3 mt-md-0">
            <div className="d-flex justify-content-md-end justify-content-center gap-3">
              <a href="#" style={{ color: "#5a6b8c", fontSize: "0.85rem", textDecoration: "none" }}>Privacy Policy</a>
              <a href="#" style={{ color: "#5a6b8c", fontSize: "0.85rem", textDecoration: "none" }}>Terms of Service</a>
              <a href="#" style={{ color: "#5a6b8c", fontSize: "0.85rem", textDecoration: "none" }}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Agent */}
      {/* <div className="position-fixed" style={{ bottom: "20px", right: "20px", zIndex: 1000 }}>
        <div
          className="d-flex align-items-center p-3 rounded-pill"
          style={{
            background: "linear-gradient(135deg, #428bff 0%, #1a61ff 100%)",
            color: "#ffffff",
            boxShadow: "0 8px 32px rgba(66, 139, 255, 0.4)",
            cursor: "pointer",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            border: "2px solid rgba(255, 255, 255, 0.2)"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-5px) scale(1.05)";
            e.target.style.boxShadow = "0 15px 45px rgba(66, 139, 255, 0.6)";
            console.log("Techstiq Agent hovered");
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.boxShadow = "0 8px 32px rgba(66, 139, 255, 0.4)";
          }}
          onClick={() => console.log("Techstiq Agent clicked")}
        >
          <div
            className="rounded-circle me-3"
            style={{
              width: "45px",
              height: "45px",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem"
            }}
          >
            🤖
          </div>
          <div>
            <div style={{ fontSize: "0.95rem", fontWeight: "700" }}>
              AI Assistant
            </div>
            <div style={{ fontSize: "0.8rem", opacity: 0.9 }}>
              Techstiq Support
            </div>
          </div>
          <div className="ms-2">
            <div
              style={{
                width: "10px",
                height: "10px",
                background: "#4ade80",
                borderRadius: "50%",
                animation: "pulse 2s infinite"
              }}
            ></div>
          </div>
        </div>
      </div> */}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes particle-float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </footer>
  );
}
