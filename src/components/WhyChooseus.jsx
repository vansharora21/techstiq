import React, { useEffect, useRef } from "react";

const features = [
  {
    title: "Understanding & Expertise",
    description:
      "We listen attentively, and our clients appreciate it the most. We have a highly refined approach of understanding requirements in detail and we deliver more than the commitment. We do our own research to understand clients need, branding goals, target market & audience and accordingly offer customised digital solutions.",
    icon: "flaticon-process",
    number: "1",
  },
  {
    title: "Work Culture",
    description:
      "We have a very supportive ecosystem to encourage and cultivate innovation. Our team is highly experienced and professionally trained to understand, communicate, share, and execute projects in scheduled time. Our highly agile and responsive work culture ensures efficient development, launch, and maintenance of digital projects.",
    icon: "flaticon-system",
    number: "2",
  },
  {
    title: "Collaborative Communication",
    description:
      "For the smooth execution of digital transformation projects, effective communication between internal and external teams is essential. Our design and development team will work closely with you, sharing all relevant details and responding quickly to any questions or concerns you may have within the agreed-upon working hours.",
    icon: "flaticon-data",
    number: "3",
  },
  {
    title: "360° Digital Solution",
    description:
      "We promise to deliver a total digital solution under one roof with perfection. Web development is more than just coding and programming – it also includes creating user-friendly websites that are responsive to different devices. Our cohesive approach helps us deliver the highest quality work with minimum turnaround time.",
    icon: "flaticon-space",
    number: "4",
  },
];

export default function WhyChooseUsSection() {
  // Card entrance animation
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.9) {
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
        .wcu-whyus-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg,#d7f1fa 0%, #b3ebf9 100%);
          padding: 70px 0 70px 0;
          min-height: 100vh;
        }
        /* Floating animated circles background */
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

        /* HEADER */
        .wcu-section-head {
          text-align:center; margin-bottom: 60px; position:relative; z-index:1;
        }
        .wcu-section-head h5 {
          color:#34a2ef; margin-bottom:8px; text-transform:uppercase; letter-spacing:2px;
          opacity:.83; font-weight: 500;
          font-size: 1rem;
        }
        .wcu-section-head h2 {
          font-size:2.6rem; font-weight:900; color:#1a242e;
          line-height:1.1; letter-spacing:-.5px;
        }
        .wcu-section-head h2 span {
          color:#158ff6;
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

        /* Responsive grid */
        .wcu-row { display: flex; flex-wrap: wrap; margin-left: -15px; margin-right: -15px;}
        .wcu-col { flex: 1 0 100%; max-width:100%; padding:15px; }
        @media (min-width: 700px) {.wcu-col{flex:1 0 50%;max-width:50%;}}
        @media (min-width: 1100px) {.wcu-col{flex:1 0 25%;max-width:25%;}}

        /* Cards */
        .wcu-feature-card {
          border-radius:21px;
          background: rgba(255,255,255,0.98);
          box-shadow: 0 2px 30px 0 rgba(50,172,255,.07), 0 5px 32px 0 rgba(80,205,255,0.13);
          padding:38px 24px 38px 24px;
          min-height:370px;
          position:relative;
          display:flex; flex-direction:column; z-index:2;
          transform: translateY(60px) scale(.98) rotateZ(2deg); opacity:0;
          will-change:transform, box-shadow, background, filter, opacity;
          transition: all .48s cubic-bezier(.16,.81,.38,.99);
        }
        .wcu-animate-in {
          opacity:1;
          transform: translateY(0) scale(1) rotateZ(0deg);
        }
        .wcu-feature-card:hover, .wcu-feature-card:focus-visible {
          background: linear-gradient(110deg,#e7f6ff 0%,#f5fcff 100%);
          box-shadow:0 10px 40px 0 #67c2fa22, 0 2px 80px 0 #3eabd912, 0 2px 80px 0 #3eaecc10;
          transform: scale(1.058) translateY(-10px) rotateZ(-1deg);
          filter: brightness(1.08) drop-shadow(0 0 17px #8fd5ff60);
          z-index:5;
        }
        .wcu-feature-title h3 {
          font-size:1.22rem;
          font-weight: 700;
          color: #184880;
          margin-bottom:13px;
          letter-spacing:0;
          line-height:1.3;
        }
        .wcu-feature-txt p {
          font-size: 1.06rem;
          color: #567;
          margin-bottom:22px;
          line-height:1.65;
          font-weight:400;
        }
        .wcu-feature-icon {
          font-size:2.4rem;
          color: #37aff6;
          margin-bottom:10px;
          transition: color .2s;
        }
        .wcu-feature-card:hover .wcu-feature-icon { color: #1477f4; filter:drop-shadow(0 0 8px #60c8ffba);}

        .wcu-feature-number {
          position:absolute; right:20px; top:23px; z-index:0;
        }
        .wcu-feature-number h2 {
          font-size:2.8rem; font-weight: bold; color:#d1f5ff; opacity:.21; user-select:none;
        }
      `}</style>

      {/* ------ ANIMATED SOFT BACKGROUND ------ */}
      <span className="wcu-bg-circ wcu-bg-circ1"></span>
      <span className="wcu-bg-circ wcu-bg-circ2"></span>
      <span className="wcu-bg-circ wcu-bg-circ3"></span>
      <span className="wcu-bg-circ wcu-bg-circ4"></span>

      {/* ---------- HEADER ----------- */}
      <div className="container">
        <div className="wcu-section-head">
          <h5>Why Choose Us</h5>
          <h2>
            Building Unique <span>Digital Identity</span>
            <br />
            To Help Business Shine &amp; Scale
          </h2>
          <div className="wcu-animated-bar">
            <span />
          </div>
        </div>

        {/* -------- FEATURES -------- */}
        <div className="wcu-row">
          {features.map((f, idx) => (
            <div className="wcu-col" key={idx}>
              <div
                ref={(el) => (cardsRef.current[idx] = el)}
                className="wcu-feature-card"
                tabIndex={0}
              >
                <div className="wcu-feature-title">
                  <h3>{f.title}</h3>
                </div>
                <div className="wcu-feature-txt">
                  <p>{f.description}</p>
                </div>
                <div className="wcu-feature-icon">
                  {/* You can substitute with your preferred icon library */}
                  <i className={f.icon}></i>
                </div>
                <div className="wcu-feature-number">
                  <h2>{f.number}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
