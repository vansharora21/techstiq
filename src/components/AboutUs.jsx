import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function AboutUsPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [currentValueIndex, setCurrentValueIndex] = useState(0);
  
  const sectionRefs = useRef({});
  const values = ['Innovation', 'Reliability', 'Excellence'];
  const heroTitle = "Driving Digital Transformation Across Industries";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Typewriter effect for hero title
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < heroTitle.length) {
        setTypedText(heroTitle.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Cycling values animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentValueIndex((prev) => (prev + 1) % values.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const themeColor = '#0072D9';

  // TechStiq Services Data
  const services = [
    { 
      id: 1,
      icon: '💻',
      title: 'Application Development', 
      description: 'End-to-end development with design, coding, deployment, and legacy system modernization for scalable solutions.',
      stats: '200+ Apps Built',
      gradient: 'linear-gradient(135deg, #0070AD 0%, #764ba2 100%)'
    },
    { 
      id: 2,
      icon: '🔒',
      title: 'Cybersecurity Services', 
      description: "Advanced security measures including threat detection, penetration testing, and compliance management.",
      stats: '99.9% Security',
      gradient: 'linear-gradient(135deg, #0070AD 0%, #764ba2 100%)'
    },
    { 
      id: 3,
      icon: '🧪',
      title: 'Quality Assurance', 
      description: 'Rigorous QA practices with automated and manual testing across platforms for digital reputation protection.',
      stats: '0% Bug Rate',
      gradient: 'linear-gradient(135deg, #0070AD 0%, #764ba2 100%)'
    },
    { 
      id: 4,
      icon: '🏗️',
      title: 'Infrastructure Services', 
      description: 'Server, network & cloud infrastructure management with 24/7 monitoring and proactive incident management.',
      stats: '24/7 Support',
      gradient: 'linear-gradient(135deg, #0070AD 0%, #764ba2 100%)'
    },
    { 
      id: 5,
      icon: '☁️',
      title: 'Cloud Solutions', 
      description: 'Cloud migration and scaling services for AWS, Azure, Google Cloud with cost optimization strategies.',
      stats: '50+ Migrations',
     gradient: 'linear-gradient(135deg, #0070AD 0%, #764ba2 100%)'
    },
    { 
      id: 6,
      icon: '📱',
      title: 'Mobile Solutions', 
      description: 'Native and hybrid mobile app development with UX-centric design for iOS and Android platforms.',
      stats: '100+ Mobile Apps',
      gradient: 'linear-gradient(135deg, #0070AD 0%, #764ba2 100%)'
    },
    { 
      id: 7,
      icon: '📊',
      title: 'BI & Analytics', 
      description: 'Transform data into actionable insights with dashboards, predictive analytics, and data integration.',
      stats: '1TB+ Data Processed',
      gradient: 'linear-gradient(135deg, #0070AD 0%, #764ba2 100%)'
    },
    { 
      id: 8,
      icon: '🌐',
      title: 'IoT Solutions', 
      description: 'Connected operations with IoT ecosystem design, device management, and scalable architecture.',
      stats: '10K+ Devices',
      gradient: 'linear-gradient(135deg, #0070AD 0%, #764ba2 100%)'
    },
    { 
      id: 9,
      icon: '👥',
      title: 'IT Staffing', 
      description: 'Flexible workforce augmentation with contract staffing and rapid team scaling solutions.',
      stats: '500+ Placements',
      gradient: 'linear-gradient(135deg, #0070AD 0%, #764ba2 100%)'
    }
  ];

  // Core Values for TechStiq
  const coreValues = [
    { 
      id: 1,
      title: '🎯 Client-First Approach', 
      description: 'We begin with a deep assessment of your business goals to deliver tailored solutions that drive real results.',
      stats: '98% Client Satisfaction',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    { 
      id: 2,
      title: '🚀 Innovation-Led Delivery', 
      description: "Harnessing emerging technologies like AI, IoT, and cloud to build efficient, scalable systems.",
      stats: 'Latest Tech Stack',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    { 
      id: 3,
      title: '🔄 Flexible Engagement', 
      description: 'From consulting-led projects to managed services and team augmentation - we adapt to your needs.',
      stats: '3 Engagement Models',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    { 
      id: 4,
      title: '🛠️ End-to-End Support', 
      description: 'Complete lifecycle coverage from strategy and development to deployment, QA, and maintenance.',
      stats: 'Full Lifecycle',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  // Animated statistics
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    technologies: 0,
    uptime: 0
  });

  const targetStats = {
    clients: 150,
    projects: 500,
    technologies: 50,
    uptime: 99.9
  };

  useEffect(() => {
    if (visibleSections.has('stats')) {
      Object.keys(targetStats).forEach(key => {
        let current = 0;
        const increment = targetStats[key] / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= targetStats[key]) {
            current = targetStats[key];
            clearInterval(timer);
          }
          setStats(prev => ({ ...prev, [key]: parseFloat(current.toFixed(1)) }));
        }, 20);
      });
    }
  }, [visibleSections]);

  return (
    <div className="about-us-page" style={{
      fontFamily: "'Open Sans', sans-serif",
      color: '#222',
      background: '#f6fafd',
      maxWidth: '100%',
      margin: '0 auto',
      padding: isMobile ? '0 0.5rem' : '0 1rem',
      overflow: 'hidden'
    }}>
      {/* SEO */}
      <Helmet>
        
        <title>About Us | TechStiq Solutions – IT Services & Digital Transformation</title>
        <meta name="description" content="TechStiq Solutions is a forward-thinking IT services firm driving digital transformation across industries with client-centric approach and deep expertise." />
        <meta name="keywords" content="TechStiq Solutions, IT services, digital transformation, cybersecurity, cloud solutions, application development" />
      </Helmet>

      {/* Floating particles background */}
      <div className="particles" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1
      }}>
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              position: 'absolute',
              width: Math.random() * 8 + 3 + 'px',
              height: Math.random() * 8 + 3 + 'px',
              background: `${themeColor}15`,
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 8 + 5}s ease-in-out infinite`,
              animationDelay: Math.random() * 3 + 's'
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section 
        ref={el => sectionRefs.current.hero = el}
        id="hero"
        className="hero" 
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '2rem 0' : '4rem 0',
          gap: isMobile ? '1.5rem' : '2rem',
          background: '#fff',
          borderRadius: '18px',
          boxShadow: '0 8px 32px rgba(0,114,217,0.07)',
          transform: `translateY(${scrollY * 0.1}px)`,
          opacity: visibleSections.has('hero') ? 1 : 0,
          transform: visibleSections.has('hero') ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.6s ease-out'
        }}>
        <div className="hero-text" style={{
          flex: 1,
          order: isMobile ? 2 : 1,
          textAlign: isMobile ? 'center' : 'left'
        }}>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? '1.8rem' : '2.5rem',
            marginBottom: '1rem',
            color: themeColor,
            lineHeight: '1.2',
            minHeight: '3rem'
          }}>
            {typedText}
            <span className="cursor" style={{
              borderRight: '3px solid ' + themeColor,
              animation: 'blink 1s infinite'
            }}>|</span>
          </h1>
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.3rem',
            marginBottom: '2rem',
            color: '#444',
            maxWidth: isMobile ? '100%' : '600px',
            lineHeight: '1.6',
            animation: visibleSections.has('hero') ? 'slideInLeft 0.8s ease-out 0.3s both' : 'none'
          }}>
            TechStiq Solutions is a forward-thinking IT services and consulting firm dedicated to driving digital transformation and innovation for businesses across sectors.
          </p>
          <Link to="/services" className="cta-button animated-button" style={{
            background: themeColor,
            color: '#fff',
            padding: isMobile ? '1rem 2rem' : '0.85rem 2.1rem',
            borderRadius: '40px',
            fontWeight: 600,
            textDecoration: 'none',
            border: `2px solid ${themeColor}`,
            fontSize: isMobile ? '1.06rem' : '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 14px rgba(0,114,217,0.08)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            animation: visibleSections.has('hero') ? 'bounceIn 0.8s ease-out 0.6s both' : 'none'
          }}>
            <span style={{ position: 'relative', zIndex: 2 }}>Explore Our Services</span>
            <div className="button-overlay" style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transition: 'left 0.5s'
            }}></div>
          </Link>
        </div>

        {/* TechStiq Logo Area */}
        <div className="hero-visual" style={{
          flex: 1,
          minWidth: isMobile ? '100%' : '340px',
          height: isMobile ? 'auto' : '340px',
          borderRadius: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(105deg, #e6f1fc 40%, #f6fafd 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="logo-placeholder" style={{
            width: '220px',
            height: '220px',
            background: `linear-gradient(45deg, ${themeColor}, #4facfe)`,
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            animation: visibleSections.has('hero') ? 'pulse 2s infinite, rotateIn 1s ease-out' : 'none',
            boxShadow: '0 15px 40px rgba(0,114,217,0.3)'
          }}>
            <div>TS</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 'normal', marginTop: '0.5rem' }}>TechStiq</div>
          </div>
        </div>
      </section>

      {/* Animated Statistics */}
      <section 
        ref={el => sectionRefs.current.stats = el}
        id="stats"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: isMobile ? '2rem 1rem' : '3rem 2rem',
          borderRadius: '16px',
          margin: '3rem 0',
          opacity: visibleSections.has('stats') ? 1 : 0,
          transform: visibleSections.has('stats') ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.6s ease-out'
        }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {[
            { label: 'Enterprise Clients', value: stats.clients, suffix: '+' },
            { label: 'Projects Delivered', value: stats.projects, suffix: '+' },
            { label: 'Technologies Mastered', value: stats.technologies, suffix: '+' },
            { label: 'System Uptime', value: stats.uptime, suffix: '%' }
          ].map((stat, idx) => (
            <div key={idx} style={{
              animation: visibleSections.has('stats') ? `countUp 1s ease-out ${idx * 0.2}s both` : 'none'
            }}>
              <div style={{
                fontSize: isMobile ? '2rem' : '3rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                {stat.value}{stat.suffix}
              </div>
              <div style={{
                fontSize: isMobile ? '0.9rem' : '1rem',
                opacity: 0.9
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission with animated values */}
      <section 
        ref={el => sectionRefs.current.mission = el}
        id="mission"
        className="mission" 
        style={{
          background: '#f4f9fe',
          padding: isMobile ? '2rem 1rem' : '4rem 2rem',
          borderRadius: '16px',
          margin: '3rem 0',
          opacity: visibleSections.has('mission') ? 1 : 0,
          transform: visibleSections.has('mission') ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.6s ease-out'
        }}>
        <div className="mission-content" style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '2rem' : '3rem',
          alignItems: 'flex-start'
        }}>
          <div className="mission-values" style={{
            flex: 1,
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              marginBottom: '2rem',
              color: themeColor,
              fontSize: isMobile ? '2.1rem' : '2.65rem'
            }}>Our Mission</h2>
            
            <div style={{
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: isMobile ? 'center' : 'flex-start',
              marginBottom: '2rem'
            }}>
              <span style={{
                display: 'inline-block',
                width: '24px',
                height: '24px',
                background: themeColor,
                borderRadius: '50%',
                marginRight: '1rem'
              }}></span>
              <span style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: 'bold',
                color: themeColor,
                animation: 'fadeInScale 0.5s ease-in-out'
              }}>
                {values[currentValueIndex]}
              </span>
            </div>
          </div>
          
          <div className="mission-text" style={{
            flex: 1,
            textAlign: isMobile ? 'center' : 'left',
            animation: visibleSections.has('mission') ? 'slideInRight 0.8s ease-out 0.3s both' : 'none'
          }}>
            <p style={{
              fontSize: isMobile ? '1.06rem' : '1.19rem',
              lineHeight: '1.6'
            }}>
              At TechStiq, we blend deep domain knowledge with cutting-edge technologies—AI, cloud, IoT, big data analytics—to deliver transformative business solutions. We help organizations modernize, optimize, and stay resilient in today's fast-paced tech environment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section 
        ref={el => sectionRefs.current.services = el}
        id="services"
        style={{ 
          margin: '3rem 0',
          opacity: visibleSections.has('services') ? 1 : 0,
          transform: visibleSections.has('services') ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.6s ease-out'
        }}>
        <h2 style={{
          fontFamily: "'Poppins', sans-serif",
          marginBottom: '2rem',
          color: themeColor,
          fontSize: isMobile ? '2rem' : '2.5rem',
          textAlign: 'center',
          animation: visibleSections.has('services') ? 'slideInDown 0.6s ease-out' : 'none'
        }}>Our Comprehensive Services</h2>
        
        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: isMobile ? '1rem' : '1.5rem'
        }}>
          {services.map((service, idx) => (
            <div 
              key={service.id} 
              className="service-card"
              style={{
                background: '#fff',
                borderRadius: '16px',
                padding: isMobile ? '1.5rem' : '2rem',
                boxShadow: activeCard === service.id ? '0 20px 40px rgba(0,114,217,0.2)' : '0 8px 25px rgba(0,114,217,0.1)',
                border: activeCard === service.id ? `3px solid ${themeColor}` : '3px solid transparent',
                cursor: 'pointer',
                minHeight: isMobile ? 'auto' : '220px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: activeCard === service.id ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                position: 'relative',
                overflow: 'hidden',
                animation: visibleSections.has('services') ? `slideInUp 0.6s ease-out ${idx * 0.1}s both` : 'none'
              }}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: service.gradient,
                transform: activeCard === service.id ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.3s ease'
              }} />
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '1rem'
              }}>
                <span style={{
                  fontSize: '2rem',
                  marginRight: '1rem'
                }}>{service.icon}</span>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: themeColor,
                    fontSize: isMobile ? '1.13rem' : '1.23rem',
                    marginBottom: '0.5rem'
                  }}>{service.title}</h3>
                  
                  <div style={{
                    background: service.gradient,
                    color: 'white',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    opacity: activeCard === service.id ? 1 : 0,
                    transform: activeCard === service.id ? 'translateX(0)' : 'translateX(20px)',
                    transition: 'all 0.3s ease'
                  }}>
                    {service.stats}
                  </div>
                </div>
              </div>
              
              <p style={{
                color: '#454545',
                fontSize: isMobile ? '0.96rem' : '1.02rem',
                lineHeight: '1.6',
                margin: 0
              }}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section 
        ref={el => sectionRefs.current.values = el}
        id="values"
        style={{ 
          margin: '3rem 0',
          opacity: visibleSections.has('values') ? 1 : 0,
          transform: visibleSections.has('values') ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.6s ease-out'
        }}>
        <h2 style={{
          fontFamily: "'Poppins', sans-serif",
          marginBottom: '2rem',
          color: themeColor,
          fontSize: isMobile ? '2rem' : '2.2rem',
          textAlign: 'center',
          animation: visibleSections.has('values') ? 'slideInDown 0.6s ease-out' : 'none'
        }}>Why Choose TechStiq?</h2>
        
        <div className="values-grid" style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)',
          gap: isMobile ? '1rem' : '2rem'
        }}>
          {coreValues.map((value, idx) => (
            <div 
              key={value.id} 
              className="value-card"
              style={{
                background: '#fff',
                borderRadius: '16px',
                padding: isMobile ? '1.5rem' : '2rem',
                boxShadow: activeCard === value.id ? '0 20px 40px rgba(0,114,217,0.2)' : '0 8px 25px rgba(0,114,217,0.1)',
                border: activeCard === value.id ? `3px solid ${themeColor}` : '3px solid transparent',
                cursor: 'pointer',
                minHeight: isMobile ? 'auto' : '180px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: activeCard === value.id ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                position: 'relative',
                overflow: 'hidden',
                animation: visibleSections.has('values') ? `slideInUp 0.6s ease-out ${idx * 0.1}s both` : 'none'
              }}
              onMouseEnter={() => setActiveCard(value.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: value.gradient,
                transform: activeCard === value.id ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.3s ease'
              }} />
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem'
              }}>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: themeColor,
                  fontSize: isMobile ? '1.13rem' : '1.23rem',
                  marginBottom: '0.5rem',
                  flex: 1
                }}>{value.title}</h3>
                
                <div style={{
                  background: value.gradient,
                  color: 'white',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  opacity: activeCard === value.id ? 1 : 0,
                  transform: activeCard === value.id ? 'translateX(0)' : 'translateX(20px)',
                  transition: 'all 0.3s ease'
                }}>
                  {value.stats}
                </div>
              </div>
              
              <p style={{
                color: '#454545',
                fontSize: isMobile ? '0.96rem' : '1.02rem',
                lineHeight: '1.6',
                margin: 0
              }}>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section 
        ref={el => sectionRefs.current.industries = el}
        id="industries"
        style={{
          background: '#f4f9fe',
          padding: isMobile ? '2rem 1rem' : '3rem 2rem',
          borderRadius: '16px',
          margin: '3rem 0',
          opacity: visibleSections.has('industries') ? 1 : 0,
          transform: visibleSections.has('industries') ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.6s ease-out'
        }}>
        <h2 style={{
          fontFamily: "'Poppins', sans-serif",
          marginBottom: '2rem',
          color: themeColor,
          fontSize: isMobile ? '1.8rem' : '2.2rem',
          textAlign: 'center'
        }}>Industries We Serve</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: '1.5rem',
          textAlign: 'center'
        }}>
          {[
            { icon: '🏥', name: 'Healthcare' },
            { icon: '💰', name: 'Finance' },
            { icon: '🎓', name: 'Education' },
            { icon: '🏭', name: 'Manufacturing' },
            { icon: '🛒', name: 'E-commerce' },
            { icon: '🚚', name: 'Logistics' }
          ].map((industry, idx) => (
            <div key={idx} style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0,114,217,0.08)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              animation: visibleSections.has('industries') ? `slideInUp 0.6s ease-out ${idx * 0.1}s both` : 'none'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{industry.icon}</div>
              <div style={{ fontWeight: '600', color: themeColor }}>{industry.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Footer CTA */}
      <section 
        ref={el => sectionRefs.current.cta = el}
        id="cta"
        className="footer-cta" 
        style={{
          background: 'linear-gradient(135deg, #0072D9, #4facfe)',
          color: '#fff',
          padding: isMobile ? '3rem 1rem' : '4rem 2rem',
          borderRadius: '20px',
          margin: '3rem 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          opacity: visibleSections.has('cta') ? 1 : 0,
          transform: visibleSections.has('cta') ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.6s ease-out'
        }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ 
            fontFamily: "'Poppins', sans-serif", 
            marginBottom: '1.5rem', 
            fontSize: isMobile ? '2rem' : '2.5rem',
            animation: visibleSections.has('cta') ? 'bounceIn 0.8s ease-out 0.3s both' : 'none'
          }}>Ready to Transform Your Business?</h2>
          
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.2rem',
            marginBottom: '2rem',
            opacity: 0.9,
            animation: visibleSections.has('cta') ? 'fadeInUp 0.8s ease-out 0.5s both' : 'none'
          }}>
            Partner with TechStiq Solutions for comprehensive IT services and digital innovation that drives results.
          </p>
          
          <Link to="/Contact-Us" className="cta-button-final" style={{
            display: 'inline-block',
            background: 'white',
            color: themeColor,
            padding: isMobile ? '1.2rem 2.5rem' : '1rem 2.5rem',
            borderRadius: '50px',
            fontWeight: '700',
            textDecoration: 'none',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            border: '3px solid white',
            fontSize: isMobile ? '1.1rem' : '1rem',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            animation: visibleSections.has('cta') ? 'pulse 2s infinite, bounceIn 0.8s ease-out 0.7s both' : 'none'
          }}>
            <span style={{ position: 'relative', zIndex: 2 }}>
              Get Started Today
            </span>
          </Link>
        </div>
        
      </section>
      

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(120deg); }
          66% { transform: translateY(15px) rotate(240deg); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
          50% { transform: scale(1.05); box-shadow: 0 15px 40px rgba(0,0,0,0.3); }
          100% { transform: scale(1); box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
        }
        
        @keyframes rotateIn {
          from { opacity: 0; transform: rotate(-200deg) scale(0); }
          to { opacity: 1; transform: rotate(0deg) scale(1); }
        }

        .animated-button:hover .button-overlay {
          left: 100% !important;
        }
        
        .cta-button-final:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          background: ${themeColor};
          color: white;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          
          .values-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default AboutUsPage;
