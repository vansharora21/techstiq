import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./techstiq_logo.jpeg";

// Theme configuration
const themes = {
  light: {
    navBackground: "#0070AD",
    navBackgroundScrolled: "rgba(0, 112, 173, 0.95)",
    navText: "#fff",
    navShadow: "0 1px 0 0 #005680",
    navShadowScrolled: "0 2px 20px rgba(0,0,0,0.1)",
    dropdownBackground: "#fff",
    dropdownTextPrimary: "#222",
    dropdownTextSecondary: "#666",
    dropdownHoverBg: "#e0f7fa",
    dropdownHoverText: "#0070AD",
    mobileMenuBackground: "linear-gradient(180deg, #0070AD 0%, #005680 100%)",
    ctaGradient: "linear-gradient(135deg, #ff642f, #e55527)",
    hoverColor: "#e0f7fa",
    backdropBlur: "blur(10px)",
  },
  dark: {
    navBackground: "#001F3F",
    navBackgroundScrolled: "rgba(0, 31, 63, 0.95)",
    navText: "#eee",
    navShadow: "0 1px 0 0 #004080",
    navShadowScrolled: "0 2px 20px rgba(0,0,0,0.5)",
    dropdownBackground: "#0a1a2a",
    dropdownTextPrimary: "#eee",
    dropdownTextSecondary: "#aaa",
    dropdownHoverBg: "#1a3a5a",
    dropdownHoverText: "#3399ff",
    mobileMenuBackground: "linear-gradient(180deg, #001F3F 0%, #003366 100%)",
    ctaGradient: "linear-gradient(135deg, #ff944d, #e87e22)",
    hoverColor: "#3399ff",
    backdropBlur: "blur(10px)",
  },
};

// Drop-down data
const PRODUCT_SERVICES = [
  { name: "Custom Software", desc: "Tailored solutions for your business", path: "/products/custom-software" },
  { name: "Web Development", desc: "Modern web applications", path: "/products/web-development" },
  { name: "Mobile Apps", desc: "iOS and Android development", path: "/products/mobile-apps" },
  { name: "UI/UX Design", desc: "User-centered design solutions", path: "/products/ui-ux-design" },
];

const SOLUTIONS = [
  { name: "Small Business", desc: "Growth solutions for small teams", path: "/solutions/small-business" },
  { name: "Enterprise", desc: "Scalable tools for enterprises", path: "/solutions/enterprise" },
  { name: "Startups", desc: "Get started quickly and affordably", path: "/solutions/startups" },
];

const RESOURCES = [
  { name: "Blog", desc: "Insights and best practices", path: "/resources/blog" },
  // { name: "Case Studies", desc: "Real customer results", path: "/resources/case-studies" },
  // { name: "Documentation", desc: "Technical guides", path: "/resources/documentation" },
];

// Icons
const HamburgerIcon = ({ color = "#fff" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect y="5" width="24" height="2" rx="1" fill={color}/>
    <rect y="11" width="24" height="2" rx="1" fill={color}/>
    <rect y="17" width="24" height="2" rx="1" fill={color}/>
  </svg>
);

const CloseIcon = ({ color = "#fff" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <line x1="6" y1="6" x2="18" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <line x1="6" y1="18" x2="18" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ChevronDownIcon = ({ color = "#fff" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M7 10l5 5 5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ThemeSwitchIcon = ({ color = "#fff" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="5" stroke={color} strokeWidth="2"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke={color} strokeWidth="2"/>
  </svg>
);

// Enhanced Dropdown Component
const DropdownMenu = ({ items, isVisible, theme }) => (
  <div style={{
    position: "absolute",
    top: "calc(100% + 12px)",
    left: 0,
    background: theme.dropdownBackground,
    borderRadius: 16,
    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.15)",
    zIndex: 200,
    minWidth: 320,
    padding: "12px 0",
    fontFamily: "'Lexend Deca', sans-serif",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? "visible" : "hidden",
    transform: isVisible ? "translateY(0)" : "translateY(-8px)",
    transition: "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease",
  }}>
    {items.map(item => (
      <Link 
        to={item.path} 
        key={item.name} 
        className="dropdown-item"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "14px 24px",
          textDecoration: "none",
          color: theme.dropdownTextPrimary,
          borderRadius: 12,
          margin: "0 12px",
          transition: "background-color 0.25s ease, box-shadow 0.25s ease, color 0.25s ease",
          cursor: "pointer",
        }}
      >
        <div style={{ fontWeight: 600, fontSize: 16 }}>{item.name}</div>
        <div style={{ fontSize: 13, color: theme.dropdownTextSecondary, marginTop: 4 }}>{item.desc}</div>
      </Link>
    ))}
  </div>
);

// Mobile dropdown helper
function DropdownMobile({ label, open, onClick, items, closeMenu, theme }) {
  return (
    <div style={{ width: "100%" }}>
      <button style={{
        ...dropdownBtnMobileStyle,
        color: theme.navText,
        borderBottom: `1px solid rgba(255,255,255,0.1)`
      }} onClick={onClick}>
        <span>{label}</span>
        <div style={{ 
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)', 
          transition: 'transform 0.2s ease' 
        }}>
          <ChevronDownIcon color={theme.navText} />
        </div>
      </button>
      <div style={{
        maxHeight: open ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-in-out'
      }}>
        <div style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          margin: "8px 16px",
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          overflow: "hidden"
        }}>
          {items.map((item) => (
            <Link to={item.path} style={{
              display: "block",
              padding: "16px 20px",
              textDecoration: "none",
              color: "#222",
              borderBottom: "1px solid rgba(0,0,0,0.05)",
              transition: "background-color 0.2s ease"
            }} key={item.name} onClick={closeMenu}>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{item.name}</div>
              <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>{item.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main Navbar Component
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [themeName, setThemeName] = useState("light");
  
  const theme = themes[themeName];

  const toggleTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyle = {
    background: isScrolled ? theme.navBackgroundScrolled : theme.navBackground,
    backdropFilter: isScrolled ? theme.backdropBlur : "none",
    fontFamily: "'Lexend Deca', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
    boxShadow: isScrolled ? theme.navShadowScrolled : theme.navShadow,
    color: theme.navText,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: "all 0.3s ease",
    minHeight: 64
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setOpenDropdown(null);
  };

  const handleDropdownClick = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Spacer to prevent content jumping */}
      <div style={{ height: 64 }} />
      
      <header style={navStyle} className="navbar-main">
        <nav className="container" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 clamp(16px, 4vw, 24px)",
          height: 64,
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {/* LEFT: Logo + Desktop Navigation */}
          <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
            {/* Logo */}
            <Link to="/" className="logo" style={{ 
              display: "flex", 
              alignItems: "center", 
              height: 48,
              flexShrink: 0,
              marginRight: 8
            }}>
              <img 
                src={logo} 
                alt="Techstiq Logo" 
                style={{ 
                  height: 48,
                  width: 48,
                  objectFit: "contain",
                  borderRadius: 6,
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="nav-links desktop-only" style={{
              display: "none",
              alignItems: "center",
              gap: "clamp(16px, 2.5vw, 28px)",
              marginLeft: "clamp(16px, 4vw, 32px)",
              listStyle: "none",
              margin: 0,
              padding: 0
            }}>
              {/* Products dropdown */}
              <li className="nav-dropdown" style={{ position: "relative" }}
                  onMouseEnter={() => setOpenDropdown("products")}
                  onMouseLeave={() => setOpenDropdown(null)}
              >
                <button type="button" style={{
                  color: theme.navText,
                  fontWeight: 600,
                  fontSize: "clamp(14px, 2vw, 16px)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  letterSpacing: 0.02,
                  padding: "8px 12px",
                  borderRadius: 4,
                  transition: "color 0.2s ease, background-color 0.2s ease"
                }}>
                  Products <ChevronDownIcon color={theme.navText} />
                </button>
                <DropdownMenu 
                  items={PRODUCT_SERVICES} 
                  isVisible={openDropdown === "products"} 
                  theme={theme} 
                />
              </li>

              {/* Solutions dropdown */}
              <li className="nav-dropdown" style={{ position: "relative" }}
                  onMouseEnter={() => setOpenDropdown("solutions")}
                  onMouseLeave={() => setOpenDropdown(null)}
              >
                <button type="button" style={{
                  color: theme.navText,
                  fontWeight: 600,
                  fontSize: "clamp(14px, 2vw, 16px)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  letterSpacing: 0.02,
                  padding: "8px 12px",
                  borderRadius: 4,
                  transition: "color 0.2s ease, background-color 0.2s ease"
                }}>
                  Solutions <ChevronDownIcon color={theme.navText} />
                </button>
                <DropdownMenu 
                  items={SOLUTIONS} 
                  isVisible={openDropdown === "solutions"} 
                  theme={theme} 
                />
              </li>

              {/* Pricing */}
              <li>
                <Link to="/pricing" style={{
                  color: theme.navText,
                  fontWeight: 600,
                  fontSize: "clamp(14px, 2vw, 16px)",
                  letterSpacing: 0.02,
                  textDecoration: "none",
                  padding: "8px 12px",
                  borderRadius: 4,
                  transition: "color 0.2s ease, background-color 0.2s ease"
                }}>Pricing</Link>
              </li>

              {/* About Us */}
              <li>
                <Link to="/About-us" style={{
                  color: theme.navText,
                  fontWeight: 600,
                  fontSize: "clamp(14px, 2vw, 16px)",
                  letterSpacing: 0.02,
                  textDecoration: "none",
                  padding: "8px 12px",
                  borderRadius: 4,
                  transition: "color 0.2s ease, background-color 0.2s ease"
                }}>About Us</Link>
              </li>

              {/* Resources dropdown */}
              <li className="nav-dropdown" style={{ position: "relative" }}
                  onMouseEnter={() => setOpenDropdown("resources")}
                  onMouseLeave={() => setOpenDropdown(null)}
              >
                <button type="button" style={{
                  color: theme.navText,
                  fontWeight: 600,
                  fontSize: "clamp(14px, 2vw, 16px)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  letterSpacing: 0.02,
                  padding: "8px 12px",
                  borderRadius: 4,
                  transition: "color 0.2s ease, background-color 0.2s ease"
                }}>
                  Resources <ChevronDownIcon color={theme.navText} />
                </button>
                <DropdownMenu 
                  items={RESOURCES} 
                  isVisible={openDropdown === "resources"} 
                  theme={theme} 
                />
              </li>

              {/* Contact Us */}
              <li>
                <Link to="/Contact-Us" style={{
                  color: theme.navText,
                  fontWeight: 600,
                  fontSize: "clamp(14px, 2vw, 16px)",
                  letterSpacing: 0.02,
                  textDecoration: "none",
                  padding: "8px 12px",
                  borderRadius: 4,
                  transition: "color 0.2s ease, background-color 0.2s ease"
                }}>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* RIGHT: Theme Toggle, CTA and Mobile Menu */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="desktop-only"
              style={{
                background: "transparent",
                border: `1px solid ${theme.navText}`,
                color: theme.navText,
                borderRadius: 6,
                padding: "8px 12px",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 600,
                display: "none",
                alignItems: "center",
                gap: 6,
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
            >
              <ThemeSwitchIcon color={theme.navText} />
              {themeName === "light" ? "Dark" : "Light"}
            </button>

            {/* Desktop CTA */}
            <Link to="/contact" className="desktop-only"
              style={{
                background: theme.ctaGradient,
                color: "#fff",
                borderRadius: 8,
                padding: "10px 20px",
                fontSize: "clamp(14px, 2vw, 15px)",
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: 0.02,
                boxShadow: "0 2px 8px rgba(255, 100, 47, 0.3)",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
                display: "none"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-1px)";
                e.target.style.boxShadow = "0 4px 12px rgba(255, 100, 47, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 2px 8px rgba(255, 100, 47, 0.3)";
              }}
            >
              Get Started
            </Link>

            {/* Mobile Hamburger */}
            <button className="mobile-only"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenu(!mobileMenu)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: 0,
                cursor: "pointer",
                padding: 8,
                borderRadius: 4,
                transition: "background-color 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            >
              {mobileMenu ? <CloseIcon color={theme.navText} /> : <HamburgerIcon color={theme.navText} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav-menu ${mobileMenu ? 'open' : ''}`} style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "min(100vw, 400px)",
          height: "100vh",
          background: theme.mobileMenuBackground,
          zIndex: 999,
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          transform: mobileMenu ? 'translateX(0)' : 'translateX(100%)',
          visibility: mobileMenu ? 'visible' : 'hidden',
          transition: 'transform 0.3s ease, visibility 0.3s ease'
        }}>
          {/* Mobile Menu Header */}
          <div style={{
            position: "sticky",
            top: 0,
            background: theme.navBackground,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 10
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img 
                src={logo} 
                alt="Techstiq Logo" 
                style={{ 
                  height: 32,
                  width: 32,
                  objectFit: "contain",
                  borderRadius: 4
                }}
              />
              <div style={{
                color: theme.navText,
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: 0.02
              }}>
                Techstiq
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                style={{
                  background: "transparent",
                  border: `1px solid ${theme.navText}`,
                  color: theme.navText,
                  borderRadius: 4,
                  padding: 6,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <ThemeSwitchIcon color={theme.navText} />
              </button>
              <button
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 8,
                  borderRadius: 4,
                  transition: "background-color 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <CloseIcon color={theme.navText} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <nav style={{ 
            width: "100%", 
            padding: "24px",
            paddingTop: "16px"
          }}>
            <ul style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              margin: 0,
              padding: 0,
              listStyle: "none",
              gap: 8
            }}>
              {/* Mobile Dropdowns */}
              <li style={{ width: "100%" }}>
                <DropdownMobile
                  label="Products"
                  open={openDropdown === "products"}
                  onClick={() => handleDropdownClick("products")}
                  items={PRODUCT_SERVICES}
                  closeMenu={closeMobileMenu}
                  theme={theme}
                />
              </li>
              <li style={{ width: "100%" }}>
                <DropdownMobile
                  label="Solutions"
                  open={openDropdown === "solutions"}
                  onClick={() => handleDropdownClick("solutions")}
                  items={SOLUTIONS}
                  closeMenu={closeMobileMenu}
                  theme={theme}
                />
              </li>
              <li style={{ width: "100%" }}>
                <DropdownMobile
                  label="Resources"
                  open={openDropdown === "resources"}
                  onClick={() => handleDropdownClick("resources")}
                  items={RESOURCES}
                  closeMenu={closeMobileMenu}
                  theme={theme}
                />
              </li>
              <li style={{ width: "100%" }}>
                <Link to="/pricing" style={{
                  color: theme.navText,
                  fontWeight: 600,
                  fontSize: 16,
                  textDecoration: "none",
                  padding: "16px 20px",
                  display: "block",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  transition: "background-color 0.2s ease"
                }} onClick={closeMobileMenu}>
                  Pricing
                </Link>
              </li>
              
              <li style={{ width: "100%" }}>
                <Link to="/about" style={{
                  color: theme.navText,
                  fontWeight: 600,
                  fontSize: 16,
                  textDecoration: "none",
                  padding: "16px 20px",
                  display: "block",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  transition: "background-color 0.2s ease"
                }} onClick={closeMobileMenu}>
                  About Us
                </Link>
              </li>

              <li style={{ width: "100%" }}>
                <Link to="/contact" style={{
                  color: theme.navText,
                  fontWeight: 600,
                  fontSize: 16,
                  textDecoration: "none",
                  padding: "16px 20px",
                  display: "block",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  transition: "background-color 0.2s ease"
                }} onClick={closeMobileMenu}>
                  Contact Us
                </Link>
              </li>
              
              {/* Mobile CTA */}
              <li style={{ width: "100%", marginTop: 24 }}>
                <Link to="/contact" style={{
                  background: theme.ctaGradient,
                  color: "#fff",
                  borderRadius: 12,
                  padding: "16px 24px",
                  fontSize: 16,
                  fontWeight: 700,
                  textDecoration: "none",
                  textAlign: "center",
                  display: "block",
                  margin: "0 16px",
                  boxShadow: "0 4px 16px rgba(255, 100, 47, 0.3)",
                  transition: "all 0.2s ease"
                }} onClick={closeMobileMenu}>
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Backdrop for mobile menu */}
        {mobileMenu && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.5)',
              zIndex: -1
            }}
            onClick={closeMobileMenu}
          />
        )}
      </header>

      {/* Enhanced Responsive CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;600;700&display=swap');
        
        .navbar-main { 
          font-family: 'Lexend Deca', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; 
        }
        
        .desktop-only { 
          display: none !important; 
        }
        
        .mobile-only { 
          display: flex !important; 
        }
        
        .mobile-nav-menu {
          transition: transform 0.3s ease, visibility 0.3s ease;
        }
        
        .mobile-nav-menu.open {
          transform: translateX(0) !important;
          visibility: visible !important;
        }
        
        /* Enhanced dropdown hover effects */
        .dropdown-item:hover {
          background-color: ${themes.light.dropdownHoverBg} !important;
          color: ${themes.light.dropdownHoverText} !important;
          box-shadow: 0 2px 8px rgba(0, 112, 173, 0.2) !important;
        }
        
        /* Dark theme dropdown hover */
        .navbar-main[data-theme="dark"] .dropdown-item:hover {
          background-color: ${themes.dark.dropdownHoverBg} !important;
          color: ${themes.dark.dropdownHoverText} !important;
          box-shadow: 0 2px 8px rgba(51, 153, 255, 0.2) !important;
        }
        
        /* Logo responsive adjustments */
        @media (max-width: 480px) {
          .logo img {
            height: 40px !important;
            width: 40px !important;
          }
        }
        
        /* Tablet and Desktop */
        @media (min-width: 768px) {
          .nav-links {
            gap: clamp(20px, 2.5vw, 28px) !important;
          }
          .logo img {
            height: 52px !important;
            width: 52px !important;
          }
        }
        
        @media (min-width: 1024px) {
          .desktop-only { 
            display: inline-flex !important; 
          }
          .nav-links { 
            display: flex !important; 
          }
          .mobile-only, 
          .mobile-nav-menu { 
            display: none !important; 
          }
        }
        
        /* Large screens */
        @media (min-width: 1200px) {
          .nav-links {
            gap: 28px !important;
            margin-left: 48px !important;
          }
          .logo img {
            height: 56px !important;
            width: 56px !important;
          }
        }
        
        /* Extra large screens */
        @media (min-width: 1400px) {
          .nav-links {
            gap: 32px !important;
          }
        }
        
        /* Hover effects for desktop */
        @media (hover: hover) {
          .nav-dropdown:hover button {
            color: ${themes.light.hoverColor};
          }
        }
      `}</style>
    </>
  );
};

// Style objects for mobile dropdown
const dropdownBtnMobileStyle = {
  fontWeight: 600,
  fontSize: "clamp(14px, 2vw, 16px)",
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 6,
  letterSpacing: 0.02,
  width: "100%",
  justifyContent: "space-between",
  fontSize: 16,
  padding: "16px 20px",
};

export default Navbar;
