import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Banner from './components/HomePage..jsx';

function App() {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    console.log("Scrolled to top");
  };

  // Check scroll position for showing/hiding scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    console.log("Scroll listener added");

    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log("Scroll listener removed");
    };
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    scrollToTop();
    console.log(`Route changed to: ${location.pathname}`);
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
      </Routes>
      <Footer />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="btn position-fixed"
          style={{
            bottom: "80px",
            left: "20px",
            zIndex: 1000,
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #428bff 0%, #1a61ff 100%)",
            border: "none",
            color: "#ffffff",
            fontSize: "1.2rem",
            boxShadow: "0 4px 20px rgba(66, 139, 255, 0.4)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px) scale(1.1)";
            e.target.style.boxShadow = "0 8px 30px rgba(66, 139, 255, 0.6)";
            console.log("Scroll to top button hovered");
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.boxShadow = "0 4px 20px rgba(66, 139, 255, 0.4)";
          }}
          title="Scroll to Top"
          aria-label="Scroll to Top"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}

      {/* Enhanced Scroll Progress Indicator */}
      <div
        className="position-fixed"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "3px",
          background: "rgba(66, 139, 255, 0.1)",
          zIndex: 9999
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #428bff 0%, #1a61ff 100%)",
            width: `${(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`,
            transition: "width 0.1s ease-out",
            boxShadow: "0 0 10px rgba(66, 139, 255, 0.5)"
          }}
        />
      </div>

      {/* Additional CSS for smooth animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scroll-to-top-enter {
          animation: fadeInUp 0.3s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #428bff 0%, #1a61ff 100%);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #1a61ff 0%, #0d47a1 100%);
        }
      `}</style>
    </div>
  );
}

export default App;
