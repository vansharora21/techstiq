import React from "react";

export default function Footer() {
  return (
    
    <footer
        className="text-center text-lg-start border-0 rounded-4 shadow-lg"
        style={{
          background: "linear-gradient(120deg, #e3f0fd 0%, #b8d8f8 100%)",
          color: "#283044",
          paddingTop: "2.5rem",
          paddingBottom: "0"
        }}
      >
        {/* Main Content */}
        <div className="container py-4">
          <div className="row g-4">
            {/* OUR WORLD */}
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase fw-bold mb-3 text-primary">OUR WORLD</h5>
              <ul className="list-unstyled">
                <li><a href="#!" className="text-decoration-none text-dark">About us</a></li>
                <li><a href="#!" className="text-decoration-none text-dark">Collections</a></li>
                <li><a href="#!" className="text-decoration-none text-dark">Environmental philosophy</a></li>
                <li><a href="#!" className="text-decoration-none text-dark">Artist collaborations</a></li>
              </ul>
            </div>
            {/* Assistance */}
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase fw-bold mb-3 text-primary">Assistance</h5>
              <ul className="list-unstyled">
                <li><a href="#!" className="text-decoration-none text-dark">Contact us</a></li>
                <li><a href="#!" className="text-decoration-none text-dark">Size Guide</a></li>
                <li><a href="#!" className="text-decoration-none text-dark">Shipping Information</a></li>
                <li><a href="#!" className="text-decoration-none text-dark">Returns & Exchanges</a></li>
                <li><a href="#!" className="text-decoration-none text-dark">Payment</a></li>
              </ul>
            </div>
            {/* Careers */}
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase fw-bold mb-3 text-primary">Careers</h5>
              <ul className="list-unstyled">
                <li><a href="#!" className="text-decoration-none text-dark">Jobs</a></li>
              </ul>
            </div>
            {/* Newsletter */}
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase fw-bold mb-3 text-primary">Sign up to our newsletter</h5>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control rounded-pill border-0 shadow-sm px-4 py-2"
                    placeholder="Enter your email"
                    style={{ background: "#f6fbff" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
                  style={{
                    background: "linear-gradient(90deg, #2bb1fc 70%, #1976d2 100%)",
                    border: "none",
                    boxShadow: "0 4px 16px rgba(44,156,247,0.08)"
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          {/* Socials */}
          <div className="d-flex justify-content-center gap-3 mt-5 pb-3">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary fs-4"><i className="fab fa-facebook-f"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary fs-4"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary fs-4"><i className="fab fa-instagram"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary fs-4"><i className="fab fa-youtube"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary fs-4"><i className="fab fa-pinterest-p"></i></a>
          </div>
        </div>
      </footer>
  );
}
