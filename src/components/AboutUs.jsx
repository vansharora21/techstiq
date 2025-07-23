import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import logo from './Assets/Krikal_Logo.png';
import { Helmet } from 'react-helmet';

function AboutUsPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const themeColor = '#0072D9';

  return (
    <div className="about-us-page" style={{
      fontFamily: "'Open Sans', sans-serif",
      color: '#222',
      background: '#f6fafd',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 0.5rem' : '0 1rem'
    }}>
      {/* SEO */}
      <Helmet>
        <link rel="icon" href="/logo.png" />
        <title>About Us | Krikal Education – Modern IT Training</title>
        <meta name="description" content="Krikal Education transforms professionals & organizations with hands-on, impactful IT learning. Learn more about our mission, values, and learner-first approach." />
        <meta name="keywords" content="Krikal Education, IT training, professional learning, digital skills" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero" style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '2rem 0' : '4rem 0',
        gap: isMobile ? '1.5rem' : '2rem',
        background: '#fff',
        borderRadius: '18px',
        boxShadow: '0 8px 32px rgba(0,114,217,0.07)'
      }}>
        <div className="hero-text" style={{
          flex: 1,
          order: isMobile ? 2 : 1,
          textAlign: isMobile ? 'center' : 'left'
        }}>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? '2rem' : '2.7rem',
            marginBottom: '1rem',
            color: themeColor,
            lineHeight: '1.1'
          }}>
            Empowering Teams, One Skill at a Time
          </h1>
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.3rem',
            marginBottom: '2rem',
            color: '#444',
            maxWidth: isMobile ? '100%' : '600px',
            lineHeight: '1.6'
          }}>
            Krikal Education is dedicated to transforming professionals and organizations through innovative, hands-on IT learning. We design our training for the realities of a fast-moving digital world, ensuring every learner, team, and enterprise achieves real, measurable growth.
          </p>
          <Link to="/" className="cta-button" style={{
            background: themeColor,
            color: '#fff',
            padding: isMobile ? '1rem 2rem' : '0.85rem 2.1rem',
            borderRadius: '40px',
            fontWeight: 600,
            textDecoration: 'none',
            border: `2px solid ${themeColor}`,
            fontSize: isMobile ? '1.06rem' : '1rem',
            minHeight: isMobile ? '48px' : 'auto',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 14px rgba(0,114,217,0.08)',
            transition: 'all 0.2s',
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '250px' : 'none',
            margin: isMobile ? '0 auto' : '0',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = themeColor;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = themeColor;
              e.currentTarget.style.color = '#fff';
            }}>
            Discover Our Programs
          </Link>
        </div>
        <div className="hero-visual" style={{
          flex: 1,
          minWidth: isMobile ? '100%' : '340px',
          height: isMobile ? 'auto' : '340px',
          borderRadius: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(105deg, #e6f1fc 40%, #f6fafd 100%)'
        }}>
          {/* <img src={logo} alt="Krikal Education Logo" style={{
            maxWidth: '100%',
            width: isMobile ? '100%' : isTablet ? '340px' : '410px',
            borderRadius: '14px',
            objectFit: 'contain',
            padding:'10px'
          }} /> */}
        </div>
      </section>

      {/* Mission */}
      <section className="mission" style={{
        background: '#f4f9fe',
        padding: isMobile ? '2rem 1rem' : '4rem 2rem',
        borderRadius: '16px',
        margin: '3rem 0'
      }}>
        <div className="mission-content" style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '2rem' : '3rem',
          alignItems: 'flex-start'
        }}>
          <div className="mission-values" style={{
            flex: 1,
            paddingLeft: 0,
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              marginBottom: '1rem',
              color: themeColor,
              fontSize: isMobile ? '2.1rem' : '2.65rem'
            }}>Our Mission</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Innovation', 'Impact', 'Integrity'].map((value, idx) => (
                <li key={idx} style={{
                  display: 'flex',
                  paddingLeft: isMobile ? '1rem' : '2rem',
                  fontSize: isMobile ? '1.2rem' : '1.38rem',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  opacity: 0,
                  animation: `fadeInUp 0.5s ${idx * 0.2}s forwards`,
                  justifyContent: isMobile ? 'center' : 'flex-start'
                }}>
                  <span style={{
                    display: 'inline-block',
                    width: '24px',
                    height: '24px',
                    background: themeColor,
                    borderRadius: '50%',
                    marginRight: '1rem',
                    flexShrink: 0
                  }}></span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mission-text" style={{
            flex: 1,
            paddingLeft: 0,
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <p style={{
              fontSize: isMobile ? '1.06rem' : '1.19rem',
              lineHeight: '1.6'
            }}>
              At Krikal Education, we believe digital fluency is the new competitive edge. Our mission is to inspire and equip individuals and companies to excel by mastering the most relevant, in-demand technical skills—delivered through industry-vetted, project-based courses.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="offerings" style={{ margin: '3rem 0' }}>
        <h2 style={{
          fontFamily: "'Poppins', sans-serif",
          marginBottom: '2rem',
          color: themeColor,
          fontSize: isMobile ? '2rem' : '2.2rem',
          textAlign: isMobile ? 'center' : 'left'
        }}>Core Values & Philosophy of Krikal Education</h2>
        <div className="cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: isMobile ? '0.9rem' : '2rem'
        }}>
          {[
            { title: '🎓 Learner-Centric Approach', description: 'Every learner/trainee is unique. We design training curriculums that are flexible, personalized, and aligned with real-world project roles. Our focus is not just on knowledge delivery, but on learner success and measurable results.' },
            { title: '🛠️ Practical Learning Over Theory', description: "We believe that genuine expertise comes from making your hands dirty, not just knowing. That's why our courses highlight hands-on training, live projects, and real-time problem-solving—providing that skills are ready to be applied from day one." },
            { title: '🚀 Innovation-Driven', description: 'Technology grows swiftly—and so do we. We redefine our course structure and learning methods to stay ahead of industry trends, to ensure our learners are always provided with the latest technologies and techniques.' },
            { title: '🤝 Integrity and Transparency', description: 'We are 100% committed to our promises and clear in our communication. Be it setting expectations or measuring progress, we value transparency and build trust with every client and learner.' },
            { title: '🌍 Impact-Oriented', description: 'Our goal is not just to train, but to make an ever-lasting impact. We count our success by how well our learners perform, grow, and contribute to their organizations post our training.' },
            { title: '🤝 Partnership Mindset', description: 'We are not just another training vendor, we are your strategic partner, invested in your long-term success—because when you grow, we grow. This mindset drives us every day at Krikal Education—to make IT learning smarter, sharper, and more significant.' }
          ].map((item, idx) => (
            <div key={idx} className="card" style={{
              background: '#fff',
              borderRadius: '12px',
              padding: isMobile ? '1.2rem' : '2rem',
              boxShadow: `0 4px 16px rgba(0,114,217,0.08)`,
              border: `2px solid transparent`,
              cursor: 'pointer',
              minHeight: isMobile ? 'auto' : '170px',
              transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = `0 8px 28px rgba(0,114,217,0.17)`;
                e.currentTarget.style.borderColor = themeColor;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = `0 4px 16px rgba(0,114,217,0.08)`;
                e.currentTarget.style.borderColor = 'transparent';
              }}>
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                color: themeColor,
                fontSize: isMobile ? '1.13rem' : '1.23rem',
                marginBottom: '0.4rem'
              }}>{item.title}</h3>
              <p style={{
                color: '#454545',
                fontSize: isMobile ? '0.96rem' : '1.02rem',
                lineHeight: '1.5'
              }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Section */}
      <section style={{ margin: '3rem 0' }}>
        <h2 style={{
          fontFamily: "'Poppins', sans-serif",
          marginBottom: '2rem',
          color: themeColor,
          textAlign: 'center',
          fontSize: isMobile ? '1.5rem' : '2.05rem',
          fontWeight: 600
        }}>
          The Krikal Education Journey
        </h2>
        <div className="journey" style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
          gap: '1.5rem',
          maxWidth: '900px',
          margin: '0 auto',
          padding: isMobile ? '0 0.5rem' : '0'
        }}>
          {[
            "Krikal Education was founded to end the gap between theoretical IT training and actual workplace demands. Too often, professionals received certificates but stayed unprepared for the pace and complexity of the digital workplace. We set out to fix that.",
            "Today, we are more than a training provider—we are your strategic learning partner. Our focus remains helping organizations and people stay ahead with confidence, curiosity, and a toolkit of modern, real-world digital skills."
          ].map((text, idx) => (
            <div key={idx} className="journey-card" style={{
              background: '#fff',
              borderRadius: '12px',
              padding: isMobile ? '1.2rem' : '2rem',
              boxShadow: `0 4px 16px rgba(0,114,217,0.08)`,
              border: `2px solid transparent`,
              cursor: 'pointer',
              minHeight: isMobile ? 'auto' : '145px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'box-shadow 0.25s, border-color 0.25s, background 0.25s'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = themeColor;
                e.currentTarget.style.boxShadow = `0 8px 28px rgba(0,114,217,0.14)`;
                e.currentTarget.style.background = '#e6f1fc';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = `0 4px 16px rgba(0,114,217,0.08)`;
                e.currentTarget.style.background = '#fff';
              }}>
              <p style={{
                fontSize: isMobile ? '1.01rem' : '1.16rem',
                lineHeight: '1.6',
                color: '#2c2c2c',
                margin: 0,
                textAlign: isMobile ? 'left' : 'center'
              }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-cta" style={{
        background: 'linear-gradient(90deg, #0072D9,rgb(60, 120, 134))',
        color: '#fff',
        padding: isMobile ? '2rem 1rem' : '3rem 2rem',
        borderRadius: '16px',
        margin: '3rem 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <h2 style={{ 
          fontFamily: "'Poppins', sans-serif", 
          marginBottom: '1rem', 
          fontSize: isMobile ? 'clamp(1.5rem, 6vw, 2rem)' : 'clamp(2rem, 4vw, 2.5rem)'
        }}>Ready to Level Up Your Team?</h2>
        <Link to="/Contact-Us" style={{
          display: 'inline-block',
          background: '#0072D9',
          color: '#fff',
          padding: isMobile ? '1rem 2rem' : '0.8rem 2rem',
          borderRadius: '30px',
          fontWeight: '600',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          border: '2px solid #fff',
          position: 'relative',
          overflow: 'hidden',
          fontSize: isMobile ? '1rem' : '0.9rem',
          minHeight: isMobile ? '48px' : 'auto',
          width: isMobile ? '100%' : 'auto',
          maxWidth: isMobile ? '300px' : 'none',
          margin: isMobile ? '0 auto' : '0'
        }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.color = '#0072D9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#0072D9';
            e.currentTarget.style.color = '#fff';
          }}>
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '200px', height: '200px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            animation: 'pulse 2s infinite',
            zIndex: 0,
          }}></div>
          <span style={{ position: 'relative', zIndex: 1 }}>
            Talk to Our Learning Advisor
          </span>
        </Link>
      </section>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.7; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.3; }
          100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.7; }
        }

        /* Additional responsive styles */
        @media (max-width: 480px) {
          .hero {
            padding: 1rem 0 !important;
          }
          .mission {
            padding: 1.5rem 0.5rem !important;
          }
          .footer-cta {
            padding: 1.5rem 0.5rem !important;
          }
          .cards-grid {
            gap: 0.8rem !important;
          }
          .journey {
            padding: 0 0.25rem !important;
          }
        }

        @media (max-width: 320px) {
          .hero h1 {
            font-size: 1.3rem !important;
          }
          .hero p {
            font-size: 0.9rem !important;
          }
        }

        /* Touch-friendly hover effects for mobile */
        @media (hover: none) and (pointer: coarse) {
          .card:hover {
            transform: none !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05) !important;
          }
          .journey-card:hover {
            border-color: transparent !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05) !important;
            background: #fff !important;
          }
        }
      `}</style>
    </div>
  );
}

export default AboutUsPage;
