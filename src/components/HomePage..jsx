import React, { useRef } from 'react';
import ProductCards from './Servicecards';
import DigitalTransformationBanner from './motivesection';
import WhyChooseUsSection from './WhyChooseus';
import banner from './Techstiq-Banner-Side.png';

export default function Banner() {
  // Create a ref for the ProductCards section
  const productCardsRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToProductCards = (e) => {
    e.preventDefault();
    if (productCardsRef.current) {
      productCardsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;600;700&display=swap');
          .banner-lexend {
            font-family: 'Lexend Deca', sans-serif !important;
          }
          
          /* Custom responsive styles */
          @media (max-width: 768px) {
            .responsive-heading {
              font-size: 2.5rem !important;
              line-height: 1.2 !important;
            }
            .responsive-subtext {
              font-size: 1rem !important;
            }
            .responsive-padding {
              padding-top: 2rem !important;
              padding-bottom: 2rem !important;
            }
            .responsive-image {
              max-height: 300px !important;
            }
          }
          
          @media (max-width: 576px) {
            .responsive-heading {
              font-size: 2rem !important;
            }
            .responsive-padding {
              padding-top: 1.5rem !important;
              padding-bottom: 1.5rem !important;
            }
            .responsive-image {
              max-height: 250px !important;
            }
            .responsive-buttons {
              flex-direction: column !important;
            }
          }
          
          @media (max-width: 480px) {
            .responsive-heading {
              font-size: 1.75rem !important;
            }
            .responsive-image {
              max-height: 200px !important;
            }
          }

          /* Smooth scroll behavior for the entire page */
          html {
            scroll-behavior: smooth;
          }

          /* Button hover effects */
          .scroll-btn {
            transition: all 0.3s ease;
          }
          
          .scroll-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3) !important;
          }
        `}
      </style>
      <div
        className="banner-lexend responsive-padding"
        style={{
          minHeight: "100vh",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          background: "linear-gradient(135deg, #e0f7fa, #e0ecfc 70%, #f0fbfc)",
        }}
      >
        <div className="container-fluid px-3 px-md-4">
          <div className="row align-items-center gy-4 gy-md-5">
            {/* Left Section: Text */}
            <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-start">
              <p 
                className="text-uppercase small fw-semibold mb-2" 
                style={{ 
                  color: '#05335C', 
                  letterSpacing: '0.06em',
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                }}
              >
                TECHSTIQ - WE BUILD. WE SCALE. YOU GROW.
              </p>
              <h1 
                className="display-4 fw-bold mt-3 responsive-heading" 
                style={{ 
                  color: '#05335C', 
                  lineHeight: 1.1,
                  fontSize: 'clamp(1.75rem, 5vw, 3.5rem)'
                }}
              >
                Turn ideas into{' '}
                <span style={{
                  color: '#0070AD',
                  fontStyle: 'italic',
                  textDecoration: 'underline',
                  textDecorationColor: '#bfdbfe',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '4px',
                }}>
                  intelligent, scalable
                </span>{' '}
                digital solutions
              </h1>
              <p 
                className="text-secondary mt-4 mb-0 responsive-subtext mx-auto mx-md-0" 
                style={{ 
                  maxWidth: 550,
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                  lineHeight: 1.6
                }}
              >
                As a modern IT solutions company, we help businesses innovate, grow, and lead through technology with custom software, web and mobile apps, cloud services, and DevOps solutions.
              </p>
            
              <div className="mt-4 mt-md-5 d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start responsive-buttons">
                <a
                  href="#contact"
                  className="btn btn-primary btn-lg px-4 py-3"
                  style={{
                    background: '#0070AD',
                    border: '2px solid #0070AD',
                    fontWeight: 600,
                    fontSize: 'clamp(0.9rem, 2vw, 1.125rem)',
                    minWidth: '160px'
                  }}
                >
                  Start Your Project
                </a>
                <button
                  onClick={scrollToProductCards}
                  className="btn btn-outline-primary btn-lg px-4 py-3 scroll-btn"
                  style={{
                    color: '#0070AD',
                    borderColor: '#0070AD',
                    background: '#fff',
                    fontWeight: 600,
                    fontSize: 'clamp(0.9rem, 2vw, 1.125rem)',
                    minWidth: '160px',
                    cursor: 'pointer'
                  }}
                >
                  Services We Provide 
                </button>
              </div>
            </div>
            
            {/* Right Section: Image */}
            <div className="col-12 col-md-6 order-1 order-md-2 text-center">
              <div className="position-relative">
                <img
                  className="rounded-4 shadow-lg img-fluid responsive-image"
                  style={{ 
                    objectFit: 'cover', 
                    maxHeight: 400, 
                    width: "100%",
                    height: 'auto'
                  }}
                  src={banner}
                  alt="Techstiq digital solutions development"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Value Proposition Section */}
        <div className="container-fluid px-3 px-md-4 mt-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <div 
                className="p-4 rounded-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <h3 
                  className="fw-bold mb-3" 
                  style={{ 
                    color: '#05335C',
                    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)'
                  }}
                >
                  Your Partner for Building Future-Ready Solutions
                </h3>
                <p 
                  className="text-secondary mb-3" 
                  style={{ 
                    fontSize: 'clamp(0.9rem, 2vw, 1.125rem)',
                    maxWidth: '800px',
                    margin: '0 auto'
                  }}
                >
                  We deliver user-centric, high-performance products with a focus on ROI and long-term value. 
                  With deep industry experience and transparent processes, we're here to help you innovate and lead.
                </p>
                <p 
                  className="fw-semibold mb-0" 
                  style={{ 
                    color: '#0070AD',
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                    fontStyle: 'italic'
                  }}
                >
                  Let's create something exceptional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <WhyChooseUsSection/>
      </div>
      
      {/* ProductCards section with ref */}
      <div ref={productCardsRef}>
        <ProductCards/>    
      </div>
      <div
      style={{marginBottom:'50px'}}>
        <DigitalTransformationBanner/>
      </div>
    </div>
  );
}
