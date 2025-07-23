import React from "react";
import { FiCheckCircle } from "react-icons/fi";

// Product data (customize as needed)
const PRODUCTS = [
  {
    name: "Marketing Suite",
    trademark: "®",
    description: "AI-powered marketing software that helps you generate leads and automate marketing.",
    imageUrl: "https://via.placeholder.com/30/1976d2/ffffff?text=M",
    features: ["Social media agent", "Marketing automation", "Analytics"],
    learnMoreUrl: "#"
  },
  {
    name: "Sales Platform",
    trademark: "®",
    description: "Easy-to-adopt sales software powered by AI for pipeline and deal management.",
    imageUrl: "https://via.placeholder.com/30/2196f3/ffffff?text=S",
    features: ["Sales workspace", "Deal management", "Prospecting agent"],
    learnMoreUrl: "#"
  },
  // Add your other product cards here...
];

function ProductCard({
  name,
  trademark,
  description,
  imageUrl,
  features,
  learnMoreUrl
}) {
  return (
    <div
      className="col-md-6 col-lg-4 d-flex"
      style={{
        animation: "fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
        animationFillMode: "both"
      }}
    >
      <div
        className="card shadow-lg w-100 mb-4 border-0"
        style={{
          background: "linear-gradient(120deg,#e3f0fd 0%, #1976d2 100%)",
          color: "#283044",
          borderRadius: "1.2rem",
          transition: "transform 0.3s cubic-bezier(.2,.65,.41,.91),box-shadow 0.3s"
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px) scale(1.04)"}
        onMouseLeave={e => e.currentTarget.style.transform = ""}
      >
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={name}
                width={36}
                height={36}
                className="me-3"
                style={{ borderRadius: "50%" }}
                loading="lazy"
              />
            )}
            <h5 className="card-title mb-0">
              {name}
              {trademark && (
                <sup className="ms-1 text-primary" style={{ fontSize: "0.7em" }}>
                  {trademark}
                </sup>
              )}
            </h5>
          </div>
          <p className="card-text">{description}</p>
          <h6 className="fw-semibold text-primary">Popular Features</h6>
          <ul className="list-unstyled mb-3">
            {features.map((feature, i) => (
              <li key={i} className="d-flex align-items-center mb-1">
                <FiCheckCircle className="me-2" style={{ color: "#1976d2" }} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={learnMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary px-4 py-2 rounded-pill fw-semibold"
            style={{
              background: "linear-gradient(90deg, #2bb1fc 70%, #1976d2 100%)",
              border: "none",
              boxShadow: "0 4px 16px rgba(44,156,247,0.08)"
            }}
          >
            Learn more <span className="visually-hidden">about {name}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProductCards() {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {PRODUCTS.map((prod, idx) => (
          <ProductCard key={prod.name} {...prod} />
        ))}
      </div>
      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0,40px,0);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
