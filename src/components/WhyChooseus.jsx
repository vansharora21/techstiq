import React, { useEffect, useRef } from "react";

const features = [
  // { title: "Proven Industry Expertise", icon: "flaticon-process", number: "1" },
  { title: "Client-Centric Approach", icon: "flaticon-system", number: "2" },
  { title: "360° Digital Transformation", icon: "flaticon-data", number: "3" },
  { title: "Innovative Problem-Solving", icon: "flaticon-idea", number: "4" },
  { title: "Transparent Communication", icon: "flaticon-chat", number: "5" },
  { title: "Agile & Adaptive Delivery", icon: "flaticon-agile", number: "6" },
  // { title: "Cutting-Edge Technology Stack", icon: "flaticon-code", number: "7" },
  { title: "Scalable Solutions", icon: "flaticon-growth", number: "8" },
  { title: "Data-Driven Decision Making", icon: "flaticon-analytics", number: "9" },
  { title: "Security & Compliance First", icon: "flaticon-security", number: "10" },
  // { title: "Dedicated Project Ownership", icon: "flaticon-project", number: "11" },
  { title: "Collaborative Partnership", icon: "flaticon-collaborate", number: "12" },
  { title: "Cost-Effective Innovation", icon: "flaticon-cost", number: "13" },
  { title: "On-Time, On-Budget Delivery", icon: "flaticon-time", number: "14" },
  // { title: "Global Delivery Capability", icon: "flaticon-global", number: "15" },
  // { title: "Continuous Improvement Mindset", icon: "flaticon-improve", number: "16" },
  // { title: "End-User Experience Focus", icon: "flaticon-user", number: "17" },
  { title: "Robust Quality Assurance", icon: "flaticon-quality", number: "18" },
  // { title: "Long-Term Relationship Building", icon: "flaticon-relationship", number: "19" },
  { title: "Post-Deployment Support", icon: "flaticon-support", number: "20" },
];

export default function WhyChooseUsSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.94) {
            ref.classList.add("wcu-animate-in");
          }
        }
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="wcu-whyus-section">
      <style>{`
        /* Keep your original section styles as is */
        .wcu-whyus-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #e0f7fa, #e0ecfc 70%, #f0fbfc);
          padding: 70px 0 70px 0;
          min-height: 100vh;
        }
        .wcu-bg-circ {
          position: absolute; border-radius: 50%; opacity: .19;
          pointer-events:none;
          animation-iteration-count: infinite;
        }
        .wcu-bg-circ1 {
          width: 160px; height:160px; left:calc(10% - 80px); top:90px;
          background:radial-gradient(circle at 45% 40%,#40b3ff30 60%,transparent 100%);
          animation: wcu-move1 10s ease-in-out infinite alternate;
        }
        .wcu-bg-circ2 {
          width:360px; height:360px; right:calc(18% - 180px); top:12%;
          background:radial-gradient(circle at 60% 40%,#71cffc18 60%,transparent 100%);
          animation: wcu-move2 12s ease-in-out infinite alternate;
        }
        .wcu-bg-circ3 {
          width:130px; height:130px; left:8%; bottom:9%;
          background:radial-gradient(circle at 60% 60%,#b3f4ff 50%,transparent 100%);
          animation: wcu-move3 11s linear infinite alternate;
        }
        .wcu-bg-circ4 {
          width:250px; height:250px; right:10%; bottom:7%;
          background:radial-gradient(circle at 60% 50%,#cdf5ff42 100%,transparent 100%);
          animation: wcu-move4 16s linear infinite alternate;
        }

        @keyframes wcu-move1 {to{transform:translateY(40px) scale(1.1);}}
        @keyframes wcu-move2 {to{transform:translateY(-80px) scale(1.08);}}
        @keyframes wcu-move3 {to{transform:translateY(-55px) scale(.88);}}
        @keyframes wcu-move4 {to{transform:translateY(42px) scale(1.07) rotate(7deg);}}

        .wcu-section-head {
          text-align:center; margin-bottom: 60px; position:relative; z-index:1;
        }
        .wcu-section-head h5 {
          color:#0070AD; margin-bottom:8px; text-transform:uppercase; letter-spacing:2px;
          opacity:.83; font-weight: 500;
          font-size: 1rem;
        }
        .wcu-section-head h2 {
          font-size:2.6rem; font-weight:900; color:#1a242e;
          line-height:1.1; letter-spacing:-.5px;
        }
        .wcu-section-head h2 span {
          color:#0070AD;
        }
        .wcu-animated-bar {
          margin: 0 auto;
          width:72px;height:5px;border-radius:10px;
          background:#dff7ff;
          overflow:hidden;
          margin-top:18px; margin-bottom:8px;
          position:relative;
        }
        .wcu-animated-bar span {
          display:block;height:100%;width:0;background:linear-gradient(90deg,#3befff 0%,#2879e3 99%);
          animation:wcu-barExpand 1.1s .2s cubic-bezier(.77,0,.18,1) forwards;
        }
        @keyframes wcu-barExpand {to{width:100%;}}

        .wcu-row { display: flex; flex-wrap: wrap; margin-left: -15px; margin-right: -15px;}
        .wcu-col { flex: 1 0 100%; max-width:100%; padding:15px; }
        @media (min-width: 700px) {.wcu-col{flex:1 0 50%;max-width:50%;}}
        @media (min-width: 1100px) {.wcu-col{flex:1 0 25%;max-width:25%;}}
        @media (min-width: 1600px) {.wcu-col{flex:1 0 20%;max-width:20%;}}

        /* === SMALL CARDS STYLING ONLY === */
        .wcu-feature-card {
          border-radius: 21px;
          background: rgba(255,255,255,0.98);
          box-shadow: 0 2px 20px 0 rgba(50,172,255,0.05), 0 5px 24px 0 rgba(80,205,255,0.10);
          padding: 16px 12px 16px 12px;
          min-height: 120px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transform: translateY(25px) scale(0.97) rotateZ(1deg);
          opacity: 0;
          will-change: transform, box-shadow, background, filter, opacity;
          transition: all 0.40s cubic-bezier(0.16,0.81,0.38,0.99);
          text-align: center;
          user-select: none;
        }
        .wcu-animate-in {
          opacity: 1;
          transform: translateY(0) scale(1) rotateZ(0deg);
        }
        .wcu-feature-card:hover,
        .wcu-feature-card:focus-visible {
          background: linear-gradient(110deg, #e7f6ff 0%, #f5fcff 100%);
          box-shadow: 0 8px 32px 0 #67c2fa22, 0 2px 70px 0 #3eabd912, 0 2px 70px 0 #3eaecc10;
          transform: scale(1.05) translateY(-6px) rotateZ(-1deg);
          filter: brightness(1.06) drop-shadow(0 0 12px #8fd5ff50);
          z-index: 5;
        }
        .wcu-feature-icon {
          font-size: 1.6rem;
          color: #37aff6;
          margin-bottom: 8px;
          transition: color 0.2s;
          user-select: none;
        }
        .wcu-feature-card:hover .wcu-feature-icon {
          color: #1477f4;
          filter: drop-shadow(0 0 6px #60c8ffba);
        }
        .wcu-feature-title h3 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #184880;
          margin-bottom: 0;
          line-height: 1.25;
          user-select: none;
        }
        .wcu-feature-number {
          position: absolute;
          right: 18px;
          top: 14px;
          z-index: 0;
          user-select: none;
        }
        .wcu-feature-number h2 {
          font-size: 1.8rem;
          font-weight: bold;
          color: #d1f5ff;
          opacity: 0.18;
          margin: 0;
          user-select: none;
          line-height: 1;
        }

      `}</style>

      {/* Animated circles */}
      <span className="wcu-bg-circ wcu-bg-circ1"></span>
      <span className="wcu-bg-circ wcu-bg-circ2"></span>
      <span className="wcu-bg-circ wcu-bg-circ3"></span>
      <span className="wcu-bg-circ wcu-bg-circ4"></span>

      <div className="container">
        <div className="wcu-section-head">
          <h5>Why Choose Us</h5>
          <h2>
            Building Unique <span>Digital Identity</span><br />
            To Help Business Shine &amp; Scale
          </h2>
          <div className="wcu-animated-bar"><span /></div>
        </div>

        <div className="wcu-row">
          {features.map((feature, idx) => (
            <div className="wcu-col" key={idx}>
              <div
                ref={(el) => (cardsRef.current[idx] = el)}
                className="wcu-feature-card"
                tabIndex={0}
              >
                <div className="wcu-feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <div className="wcu-feature-title">
                  <h3>{feature.title}</h3>
                </div>
                <div className="wcu-feature-number">
                  <h2>{feature.number}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
