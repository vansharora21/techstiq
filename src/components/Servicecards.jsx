import React from "react";
import { FiCheckCircle } from "react-icons/fi";

// IT Services data
const SERVICES = [
  {
    name: "Custom Software Development",
    trademark: "",
    description: "We design and build scalable, high-performance software tailored to your business needs, ensuring seamless integration and long-term usability.",
    imageUrl: "",
    features: ["Tailored applications for web, mobile, and desktop", "Agile development with regular iterations", "Scalable architecture for future growth"],
    learnMoreUrl: "#"
  },
  {
    name: "IT Consulting & Strategy",
    trademark: "",
    description: "Our experts assess your IT infrastructure and provide strategic guidance to align technology with your business goals.",
    imageUrl: "",
    features: ["Technology audits and gap analysis", "Digital transformation strategy", "Roadmap planning and implementation support"],
    learnMoreUrl: "#"
  },
  {
    name: "Cloud Computing Services",
    trademark: "",
    description: "We help businesses migrate, deploy, and manage cloud-based infrastructure to boost efficiency and reduce costs.",
    imageUrl: "",
    features: ["Cloud migration (AWS, Azure, GCP)", "DevOps and CI/CD pipeline setup", "Scalable, secure cloud architecture"],
    learnMoreUrl: "#"
  },
  {
    name: "Cybersecurity Solutions",
    trademark: "",
    description: "Comprehensive cybersecurity services to protect your digital assets, systems, and data from modern threats.",
    imageUrl: "",
    features: ["Threat detection and vulnerability assessments", "Data encryption and network security", "Security compliance and risk management"],
    learnMoreUrl: "#"
  },
  {
    name: "IT Infrastructure Management",
    trademark: "",
    description: "We maintain and optimize your IT infrastructure to ensure uptime, performance, and secure operations.",
    imageUrl: "",
    features: ["Server and network management", "24/7 monitoring and support", "Backup and disaster recovery solutions"],
    learnMoreUrl: "#"
  },
  {
    name: "Mobile App Development",
    trademark: "",
    description: "We create high-performance mobile apps with intuitive UX for Android and iOS platforms tailored to your business.",
    imageUrl: "",
    features: ["Native and cross-platform development", "App store optimization and launch", "Maintenance and feature updates"],
    learnMoreUrl: "#"
  },
  {
    name: "Web Development & Design",
    trademark: "",
    description: "We craft responsive, user-centric websites that reflect your brand and drive engagement.",
    imageUrl: "",
    features: ["Custom UI/UX design", "SEO-friendly and fast-loading", "CMS integration and e-commerce solutions"],
    learnMoreUrl: "#"
  },
  {
    name: "Managed IT Services",
    trademark: "",
    description: "Outsource your IT operations to us and focus on growing your business while we ensure everything runs smoothly.",
    imageUrl: "",
    features: ["Proactive monitoring and support", "Helpdesk services and remote support", "Regular system updates and maintenance"],
    learnMoreUrl: "#"
  },
  {
    name: "Data Analytics & Business Intelligence",
    trademark: "",
    description: "Turn raw data into actionable insights with our advanced analytics and reporting solutions.",
    imageUrl: "",
    features: ["Dashboard development and visualization", "Predictive analytics and data modeling", "Integration with third-party data sources"],
    learnMoreUrl: "#"
  }
];

function ServiceCard({
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
          <h6 className="fw-semibold text-primary">Key Features</h6>
          <ul className="list-unstyled mb-3">
            {features.map((feature, i) => (
              <li key={i} className="d-flex align-items-center mb-1">
                <FiCheckCircle className="me-2" style={{ color: "#1976d2" }} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          {/* <a
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
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default function ServiceCards() {
  return (
    <div className="container py-5" style={{maxWidth: '100%', background: 'linear-gradient(135deg, rgb(224, 247, 250), rgb(224, 236, 252) 70%, rgb(240, 251, 252))'}}>
      <div className="row g-4">
        {SERVICES.map((service, idx) => (
          <ServiceCard key={service.name} {...service} />
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
