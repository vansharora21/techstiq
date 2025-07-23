import React from 'react';
import ProductCards from './Servicecards';

export default function Banner() {
  return (
    <div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;600;700&display=swap');
          .banner-lexend {
            font-family: 'Lexend Deca', sans-serif !important;
          }
        `}
      </style>
      <div
        className="banner-lexend"
        style={{
          minHeight: "100vh",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          background: "linear-gradient(135deg, #e0f7fa, #e0ecfc 70%, #f0fbfc)",
        }}
      >
        <div className="container px-4">
          <div className="row align-items-center gy-5">
            {/* Left Section: Text */}
            <div className="col-md-6 order-2 order-md-1 text-center text-md-start">
              <p className="text-uppercase small fw-semibold" style={{ color: '#05335C', letterSpacing: '0.06em' }}>
                OUR CUSTOMER PLATFORM
              </p>
              <h1 className="display-4 fw-bold mt-3" style={{ color: '#05335C', lineHeight: 1.1 }}>
                With our platform,{' '}
                <span style={{
                  color: '#2563eb',
                  fontStyle: 'italic',
                  textDecoration: 'underline',
                  textDecorationColor: '#bfdbfe',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '4px',
                }}>
                  can achieve it all
                </span>
              </h1>
              <p className="text-secondary fs-5 mt-4 mb-0" style={{ maxWidth: 550, marginLeft: "auto", marginRight: "auto" }}>
                Unify your growing business on one AI-powered platform that's easy to use, delivers ROI in no time, and transforms customer happiness into your competitive edge.
              </p>
              <div className="mt-5 d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
                <a
                  href="#"
                  className="btn btn-primary btn-lg px-4"
                  style={{
                    background: 'linear-gradient(90deg, #38bdf8, #0ea5e9)',
                    border: '2px solid #38bdf8',
                    fontWeight: 600
                  }}
                >
                  Get a demo
                </a>
                <a
                  href="#"
                  className="btn btn-outline-primary btn-lg px-4"
                  style={{
                    color: '#2563eb',
                    borderColor: '#2563eb',
                    background: '#fff',
                    fontWeight: 600
                  }}
                >
                  Get started free
                </a>
              </div>
              <p className="text-muted mt-3 fs-6">
                Get a demo of our premium software, or get started with free tools.
              </p>
            </div>
            {/* Right Section: Image */}
            <div className="col-md-6 order-1 order-md-2 text-center">
              <img
                className="rounded-4 shadow-lg img-fluid"
                style={{ objectFit: 'cover', maxHeight: 400, width: "100%" }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3F-4Hi-3YskyVma0cckPXhjRt_d2bbknnzPTpBZo5JoFVmyhWs9OoyfS1KvJ1AwTxCqaRk2MU0ebbchVXAwSlsiGJDZnMBE36cn2J0C-kKfIjWW2wYgG41giISEsYQEyN3Z3zHiiGtq7vfzG_ziAfj6cQHMij2SWq4OWNtr0A80lVeW5PLU21Rp8sIs1Sfzm4yTQGZynI7xnaTBArxBj843IRM_aAziCSYAJ_LhX-Qxj6RYD_sCl7pw_sD68jnidZsnL63C_zRrM"
                alt="Customer using a platform on a laptop"
              />
            </div>
          </div>
        </div>
      </div>
      <ProductCards/>    
    </div>
    
  );
}
