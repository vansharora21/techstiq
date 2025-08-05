import React, { useState, useEffect } from 'react';

const DigitalTransformationBanner = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const rotatingTexts = [
    "Digital Transformation Journey",
    "Business Innovation Process",
    "Technology Evolution Path",
    "Cloud Migration Strategy",
    "AI-Powered Solutions"
  ];

  const styles = {
    bannerContainer: {
      background: 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 50%, #81d4fa 100%)',
      padding: 'clamp(40px, 8vw, 60px) clamp(20px, 5vw, 40px)',
      // borderRadius: 'clamp(12px, 3vw, 20px)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: 'clamp(250px, 50vh, 400px)',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      boxSizing: 'border-box'
    },
    bannerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      flexDirection: 'row',
      gap: 'clamp(20px, 5vw, 40px)'
    },
    textContent: {
      flex: 1,
      maxWidth: '100%',
      zIndex: 10
    },
    bannerTitle: {
      fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
      fontWeight: '700',
      color: '#0d47a1',
      margin: '0',
      lineHeight: '1.2',
      marginBottom: 'clamp(4px, 1vw, 8px)',
      animation: 'slideInLeft 1s ease-out',
      wordWrap: 'break-word'
    },
    bannerSubtitleContainer: {
      height: 'clamp(2.5rem, 6vw, 3.5rem)',
      overflow: 'hidden',
      marginBottom: 'clamp(24px, 5vw, 40px)',
      position: 'relative'
    },
    bannerSubtitle: {
      fontSize: 'clamp(1.2rem, 3.5vw, 2.5rem)',
      fontWeight: '700',
      color: '#1565c0',
      margin: '0',
      lineHeight: '1.2',
      position: 'absolute',
      width: '100%',
      animation: 'rollIn 0.8s ease-in-out',
      wordWrap: 'break-word'
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #42a5f5 0%, #1e88e5 100%)',
      color: 'white',
      border: 'none',
      padding: 'clamp(12px, 2.5vw, 16px) clamp(20px, 4vw, 32px)',
      borderRadius: '50px',
      fontSize: 'clamp(0.9rem, 2.2vw, 1.1rem)',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'clamp(6px, 1.5vw, 8px)',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(66, 165, 245, 0.3)',
      animation: 'slideInUp 1.2s ease-out',
      width: 'fit-content',
      minWidth: 'clamp(160px, 30vw, 200px)',
      whiteSpace: 'nowrap'
    },
    arrow: {
      fontSize: 'clamp(1rem, 2vw, 1.2rem)',
      transition: 'transform 0.3s ease'
    },
    geometricShapes: {
      position: 'relative',
      width: 'clamp(200px, 30vw, 400px)',
      height: 'clamp(150px, 25vw, 300px)',
      flexShrink: 0
    },
    hexagon1: {
      position: 'absolute',
      width: 'clamp(60px, 12vw, 120px)',
      height: 'clamp(52px, 10.4vw, 104px)',
      background: 'rgba(144, 202, 249, 0.2)',
      border: '2px solid #42a5f5',
      borderRadius: '8px',
      transform: 'rotate(30deg)',
      top: 'clamp(10px, 3vw, 20px)',
      right: 'clamp(40px, 8vw, 80px)',
      opacity: '0.8',
      animation: 'floatRotate 6s ease-in-out infinite'
    },
    hexagon2: {
      position: 'absolute',
      width: 'clamp(40px, 8vw, 80px)',
      height: 'clamp(40px, 8vw, 80px)',
      background: 'rgba(100, 181, 246, 0.3)',
      border: '2px solid #1e88e5',
      transform: 'rotate(45deg)',
      top: 'clamp(40px, 8vw, 80px)',
      right: 'clamp(10px, 2vw, 20px)',
      opacity: '0.7',
      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
      animation: 'pulse 4s ease-in-out infinite'
    },
    diamond: {
      position: 'absolute',
      width: 'clamp(30px, 6vw, 60px)',
      height: 'clamp(30px, 6vw, 60px)',
      background: 'rgba(66, 165, 245, 0.2)',
      border: '2px solid #1976d2',
      transform: 'rotate(45deg)',
      bottom: 'clamp(30px, 6vw, 60px)',
      right: 'clamp(60px, 12vw, 120px)',
      opacity: '0.6',
      animation: 'bounce 3s ease-in-out infinite'
    },
    triangle: {
      position: 'absolute',
      width: '0',
      height: '0',
      borderLeft: 'clamp(15px, 3vw, 30px) solid transparent',
      borderRight: 'clamp(15px, 3vw, 30px) solid transparent',
      borderBottom: 'clamp(26px, 5.2vw, 52px) solid transparent',
      borderTop: 'clamp(26px, 5.2vw, 52px) solid #2196f3',
      bottom: 'clamp(20px, 4vw, 40px)',
      right: 'clamp(100px, 20vw, 200px)',
      opacity: '0.5',
      transform: 'rotate(15deg)',
      animation: 'spin 8s linear infinite'
    },
    particles: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none'
    },
    particle: {
      position: 'absolute',
      width: 'clamp(2px, 0.5vw, 4px)',
      height: 'clamp(2px, 0.5vw, 4px)',
      background: '#1e88e5',
      borderRadius: '50%',
      opacity: '0.4'
    }
  };

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        (prevIndex + 1) % rotatingTexts.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  const handleButtonHover = (e) => {
    e.target.style.transform = 'translateY(-2px) scale(1.05)';
    e.target.style.boxShadow = '0 6px 20px rgba(66, 165, 245, 0.5)';
    const arrow = e.target.querySelector('.arrow');
    if (arrow) arrow.style.transform = 'translateX(4px)';
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'translateY(0) scale(1)';
    e.target.style.boxShadow = '0 4px 15px rgba(66, 165, 245, 0.3)';
    const arrow = e.target.querySelector('.arrow');
    if (arrow) arrow.style.transform = 'translateX(0)';
  };

  // Generate floating particles with responsive count
  const generateParticles = () => {
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 8 : window.innerWidth < 1024 ? 12 : 15;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(
        <div
          key={i}
          style={{
            ...styles.particle,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`
          }}
        />
      );
    }
    return particles;
  };

  return (
    <>
      <style>
        {`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
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

          @keyframes rollIn {
            0% {
              opacity: 0;
              transform: translateY(-100%) rotateX(-90deg);
            }
            50% {
              opacity: 0.5;
              transform: translateY(-50%) rotateX(-45deg);
            }
            100% {
              opacity: 1;
              transform: translateY(0) rotateX(0deg);
            }
          }

          @keyframes floatRotate {
            0%, 100% {
              transform: rotate(30deg) translateY(0px);
            }
            50% {
              transform: rotate(60deg) translateY(-10px);
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: rotate(45deg) scale(1);
              opacity: 0.7;
            }
            50% {
              transform: rotate(45deg) scale(1.1);
              opacity: 0.9;
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: rotate(45deg) translateY(0px);
            }
            25% {
              transform: rotate(45deg) translateY(-8px);
            }
            75% {
              transform: rotate(45deg) translateY(-4px);
            }
          }

          @keyframes spin {
            from {
              transform: rotate(15deg);
            }
            to {
              transform: rotate(375deg);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
              opacity: 0.4;
            }
            50% {
              transform: translateY(-20px);
              opacity: 0.7;
            }
          }

          /* Mobile First Responsive Breakpoints */
          @media (max-width: 480px) {
            .banner-content-mobile {
              flex-direction: column !important;
              text-align: center;
              gap: 20px !important;
            }
            
            .geometric-shapes-mobile {
              order: -1;
              width: 100% !important;
              height: 120px !important;
              max-width: 300px;
              margin: 0 auto;
            }

            .text-content-mobile {
              order: 2;
              max-width: 100% !important;
            }

            .cta-button-mobile {
              width: 100% !important;
              max-width: 280px !important;
              margin: 0 auto !important;
            }
          }

          @media (max-width: 768px) and (min-width: 481px) {
            .banner-content-tablet {
              flex-direction: column !important;
              text-align: center;
              gap: 30px !important;
            }
            
            .geometric-shapes-tablet {
              order: -1;
              margin: 0 auto;
            }

            .text-content-tablet {
              order: 2;
            }
          }

          @media (max-width: 1024px) and (min-width: 769px) {
            .banner-content-desktop-small {
              gap: 20px !important;
            }
          }

          /* Landscape phone adjustments */
          @media (max-height: 500px) and (orientation: landscape) {
            .banner-container-landscape {
              min-height: 200px !important;
              padding: 20px !important;
            }
            
            .banner-subtitle-container-landscape {
              height: 2rem !important;
              margin-bottom: 20px !important;
            }
          }

          /* High DPI screens */
          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            .geometric-shapes-retina * {
              border-width: 1px;
            }
          }

          /* Reduced motion accessibility */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }

          /* Dark mode support */
          @media (prefers-color-scheme: dark) {
            .banner-container-dark {
              background: linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%) !important;
            }
            
            .banner-title-dark {
              color: #e3f2fd !important;
            }
            
            .banner-subtitle-dark {
              color: #bbdefb !important;
            }
          }
        `}
      </style>
      
      <div 
        style={styles.bannerContainer}
        className="banner-container-landscape banner-container-dark"
      >
        {/* Floating particles background */}
        <div style={styles.particles}>
          {generateParticles()}
        </div>
        
        <div 
          style={styles.bannerContent}
          className="banner-content-mobile banner-content-tablet banner-content-desktop-small"
        >
          <div 
            style={styles.textContent}
            className="text-content-mobile text-content-tablet"
          >
            <h1 
              style={styles.bannerTitle}
              className="banner-title-dark"
            >
              It's Time To Accelerate Your
            </h1>
            <div 
              style={styles.bannerSubtitleContainer}
              className="banner-subtitle-container-landscape"
            >
              <h1 
                key={currentTextIndex}
                style={styles.bannerSubtitle}
                className="banner-subtitle-dark"
              >
                {rotatingTexts[currentTextIndex]}
              </h1>
            </div>
            <button 
              style={styles.ctaButton}
              className="cta-button-mobile"
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              Let's Build Together
              <span className="arrow" style={styles.arrow}>→</span>
            </button>
          </div>
          <div 
            style={styles.geometricShapes}
            className="geometric-shapes-mobile geometric-shapes-tablet geometric-shapes-retina"
          >
            <div style={styles.hexagon1}></div>
            <div style={styles.hexagon2}></div>
            <div style={styles.diamond}></div>
            <div style={styles.triangle}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalTransformationBanner;
