import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

// Drop-down data
const PRODUCT_SERVICES = [
  { name: "Marketing Hub", desc: "Marketing automation software", path: "/products/marketing-hub" },
  { name: "Sales Hub", desc: "Sales software", path: "/products/sales-hub" },
  { name: "Service Hub", desc: "Customer service software", path: "/products/service-hub" },
  { name: "Operations Hub", desc: "Operations software", path: "/products/operations-hub" },
];
const SOLUTIONS = [
  { name: "Small Business", desc: "Growth solutions for small teams", path: "/solutions/small-business" },
  { name: "Enterprise", desc: "Scalable tools for enterprises", path: "/solutions/enterprise" },
  { name: "Startups", desc: "Get started quickly and affordably", path: "/solutions/startups" },
];
const RESOURCES = [
  { name: "Blog", desc: "Insights and best practices", path: "/resources/blog" },
  { name: "Ebooks", desc: "Downloadable guides", path: "/resources/ebooks" },
  { name: "Case Studies", desc: "Real customer results", path: "/resources/case-studies" },
];

// Icons
const HamburgerIcon = ({ color = "#fff" }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <rect y="5" width="24" height="2" rx="1" fill={color}/>
    <rect y="11" width="24" height="2" rx="1" fill={color}/>
    <rect y="17" width="24" height="2" rx="1" fill={color}/>
  </svg>
);
const CloseIcon = ({ color = "#fff" }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <line x1="6" y1="6" x2="18" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <line x1="6" y1="18" x2="18" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const ChevronDownIcon = ({ color = "#fff" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M7 10l5 5 5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Mobile dropdown helper
function DropdownMobile({ label, open, onClick, items, closeMenu }) {
  return (
    <div style={{ width: "100%" }}>
      <button style={dropdownBtnStyle} onClick={onClick}>
        {label} <ChevronDownIcon />
      </button>
      {open && (
        <div style={dropdownMenuMobileStyle}>
          {items.map((item) => (
            <Link to={item.path} style={dropdownItemStyleMobile} key={item.name} onClick={closeMenu}>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{item.name}</div>
              <div style={{ fontSize: 12, color: "#666", marginTop: 1 }}>{item.desc}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Navbar Component ---
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navStyle = {
    background: "#0070AD",
    fontFamily: "'Lexend Deca', Segoe UI, Arial, sans-serif",
    boxShadow: "0 1px 0 0 #005680",
    color: "#fff",
    minHeight: 60
  };

  // Hide mobile menu
  const closeMobileMenu = () => {
    setMobileMenu(false);
    setOpenDropdown(null);
  };

  return (
    <header style={navStyle} className="navbar-main">
      <nav className="container" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        flexWrap: "wrap",
        position: "relative"
      }}>
        {/* LEFT: Logo + Links */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Logo */}
          <Link to="/" className="logo" style={{ display: "flex", alignItems: "center", height: 32 }}>
            <img src={logo} alt="Logo" style={{ height: 32, filter: "brightness(0) invert(1)" }}/>
          </Link>
          {/* Desktop Nav */}
          <ul className="nav-links" style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginLeft: 36,
            listStyle: "none"
          }}>
            {/* Products dropdown */}
            <li className="nav-dropdown desktop-only" style={{ position: "relative" }}
                onMouseEnter={() => setOpenDropdown("products")}
                onMouseLeave={() => setOpenDropdown(null)}
            >
              <button type="button" style={dropdownBtnStyle}>
                Products <ChevronDownIcon />
              </button>
              {openDropdown === "products" && (
                <div style={dropdownMenuStyle}>
                  {PRODUCT_SERVICES.map((srv) => (
                    <Link to={srv.path} key={srv.name} style={dropdownItemStyle}>
                      <div style={{ fontWeight: 600, fontSize: 16 }}>{srv.name}</div>
                      <div style={{ fontSize: 13, color: "#666", marginTop: 2 }}>{srv.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </li>
            {/* Solutions dropdown */}
            <li className="nav-dropdown desktop-only" style={{ position: "relative" }}
                onMouseEnter={() => setOpenDropdown("solutions")}
                onMouseLeave={() => setOpenDropdown(null)}
            >
              <button type="button" style={dropdownBtnStyle}>
                Solutions <ChevronDownIcon />
              </button>
              {openDropdown === "solutions" && (
                <div style={dropdownMenuStyle}>
                  {SOLUTIONS.map((sol) => (
                    <Link to={sol.path} key={sol.name} style={dropdownItemStyle}>
                      <div style={{ fontWeight: 600, fontSize: 16 }}>{sol.name}</div>
                      <div style={{ fontSize: 13, color: "#666", marginTop: 2 }}>{sol.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </li>
            {/* Pricing */}
            <li className="desktop-only">
              <Link to="/pricing" style={navLinkStyle}>Pricing</Link>
            </li>
            {/* Resources dropdown */}
            <li className="nav-dropdown desktop-only" style={{ position: "relative" }}
                onMouseEnter={() => setOpenDropdown("resources")}
                onMouseLeave={() => setOpenDropdown(null)}
            >
              <button type="button" style={dropdownBtnStyle}>
                Resources <ChevronDownIcon />
              </button>
              {openDropdown === "resources" && (
                <div style={dropdownMenuStyle}>
                  {RESOURCES.map((res) => (
                    <Link to={res.path} key={res.name} style={dropdownItemStyle}>
                      <div style={{ fontWeight: 600, fontSize: 16 }}>{res.name}</div>
                      <div style={{ fontSize: 13, color: "#666", marginTop: 2 }}>{res.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
        {/* RIGHT: CTA and Hamburger */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* CTA */}
          <Link to="/get-free-crm" className="desktop-only"
            style={{
              background: "#ff642f",
              color: "#fff",
              borderRadius: 8,
              padding: "8px 22px",
              marginLeft: 28,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: 0.1,
              boxShadow: "0 2px 4px 0 rgba(0,0,0,0.08)"
            }}>
          </Link>
          {/* Hamburger for Mobile */}
          <button className="mobile-only"
            aria-label="Toggle menu"
            onClick={() => setMobileMenu(m => !m)}
            style={{
              display: "none",  // Shown via CSS below
              background: "transparent",
              border: 0,
              marginLeft: 20,
              cursor: "pointer"
            }}
          >
            {mobileMenu ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </nav>
      {/* Mobile Slide Nav */}
      {mobileMenu && (
        <div className="mobile-nav-menu" style={mobileNavMenuStyle}>
          <nav style={{ width: "100%" }}>
            <ul style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: 0,
              padding: 0,
              listStyle: "none"
            }}>
              {/* Dropdowns as toggles */}
              <li style={{ width: "100%", marginTop: 12 }}>
                <DropdownMobile
                  label="Products"
                  open={openDropdown === "products"}
                  onClick={() => setOpenDropdown(openDropdown === "products" ? null : "products")}
                  items={PRODUCT_SERVICES}
                  closeMenu={closeMobileMenu}
                />
              </li>
              <li style={{ width: "100%", marginTop: 12 }}>
                <DropdownMobile
                  label="Solutions"
                  open={openDropdown === "solutions"}
                  onClick={() => setOpenDropdown(openDropdown === "solutions" ? null : "solutions")}
                  items={SOLUTIONS}
                  closeMenu={closeMobileMenu}
                />
              </li>
              <li style={{ width: "100%", marginTop: 12 }}>
                <DropdownMobile
                  label="Resources"
                  open={openDropdown === "resources"}
                  onClick={() => setOpenDropdown(openDropdown === "resources" ? null : "resources")}
                  items={RESOURCES}
                  closeMenu={closeMobileMenu}
                />
              </li>
              <li style={{ width: "100%", marginTop: 12 }}>
                <Link to="/pricing" style={mobileLinkStyle} onClick={closeMobileMenu}>Pricing</Link>
              </li>
              {/* Mobile CTA */}
              <li style={{ width: "100%", margin: "22px 0 0 0" }}>
                <Link to="/get-free-crm" style={mobileCtaStyle} onClick={closeMobileMenu}>
                  Start Free CRM
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      {/* --- CSS for responsive toggling (INLINE FOR EXAMPLE) --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;600&display=swap');
        .navbar-main { font-family: 'Lexend Deca', Segoe UI, Arial, sans-serif; }
        .desktop-only { display: none; }
        .mobile-only { display: inline-flex !important; }
        @media (min-width: 1024px) {
          .desktop-only { display: inline-flex !important; }
          .nav-links { display: flex !important; }
          .mobile-only, .mobile-nav-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
};

// --- Styles objects as before ---
const navLinkStyle = {
  color: "#fff",
  fontWeight: 600,
  fontSize: 16,
  letterSpacing: 0.05,
  textDecoration: "none",
  padding: "6px 12px"
};

const dropdownBtnStyle = {
  color: "#fff",
  fontWeight: 600,
  fontSize: 16,
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 3,
  letterSpacing: 0.05,
  padding: "6px 12px"
};

const dropdownMenuStyle = {
  position: "absolute",
  top: "calc(100% + 6px)",
  left: 0,
  background: "#fff",
  borderRadius: 8,
  boxShadow: "0 6px 24px 0 rgba(0,0,0,.10)",
  zIndex: 16,
  minWidth: 220,
  fontFamily: "'Lexend Deca', Segoe UI, Arial, sans-serif"
};

const dropdownItemStyle = {
  display: "block",
  padding: "14px 18px",
  textDecoration: "none",
  color: "#222",
  borderRadius: 4,
  marginBottom: 2
};

const mobileNavMenuStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "#0070AD",
  zIndex: 99,
  padding: "38px 0 0 0"
};

const dropdownMenuMobileStyle = {
  background: "#f3f3f3",
  width: "97vw",
  margin: "0 auto",
  borderRadius: 8,
  boxShadow: "0 2px 12px 0 rgba(0,0,0,.08)",
  marginTop: 6,
  fontFamily: "'Lexend Deca', Segoe UI, Arial, sans-serif"
};

const dropdownItemStyleMobile = {
  display: "block",
  padding: "12px 18px",
  textDecoration: "none",
  color: "#222",
  borderRadius: 4,
  marginBottom: 2
};

const mobileLinkStyle = {
  color: "#fff",
  fontWeight: 600,
  fontSize: 18,
  textDecoration: "none",
  padding: "10px 0",
  display: "block",
  textAlign: "center"
};

const mobileCtaStyle = {
  background: "#ff642f",
  color: "#fff",
  borderRadius: 8,
  padding: "12px",
  fontSize: 18,
  fontWeight: 600,
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  margin: "0 auto"
};

export default Navbar;
