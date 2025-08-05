/*  Footer.jsx  */
import React, { useState, useEffect } from "react";
import logo from "./Techstiq-Logo.png";

export default function Footer() {
  /* ───── state ───── */
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [animateStats, setAnimateStats] = useState(false);

  /* ───── intersection-observer to trigger entry animation ───── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimateStats(true);
        }
      },
      { threshold: 0.1 }
    );
    const el = document.getElementById("innovative-footer");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ───── helpers ───── */
  const handleEmailClick = () => (window.location.href = "mailto:Support@techstiq.com");
  const handleSubmit = (e) => {
    e.preventDefault();
    /*  your backend logic here */
  };

  /* ───── dummy stats ───── */
  const stats = [
    { number: "10K+", label: "Happy Clients", icon: "👥" },
    { number: "500+", label: "Projects Done", icon: "🚀" },
    { number: "99%", label: "Success Rate", icon: "✨" },
    { number: "24/7", label: "Support",      icon: "🛟" },
  ];

  /* ───────────────────────────────────────────────────────────── */

  return (
    <footer
      id="innovative-footer"
      className="text-center text-lg-start border-0"
      style={{
        background: "linear-gradient(135deg, #e0f7fa, #e0ecfc 70%, #f0fbfc)",
        color: "#1a2a52",
        paddingTop: "4rem",
        paddingBottom: "1rem",
        position: "relative",
        overflow: "hidden",
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        opacity: isVisible ? 1 : 0,
        transition: "all .8s cubic-bezier(.4,0,.2,1)",
      }}
    >

      {/* ───── decorative background & particles (unchanged) ───── */}
      <div style={{
        position:"absolute",inset:0,
        backgroundImage:`radial-gradient(circle at 20% 50%,rgba(66,139,255,.1) 0%,transparent 50%),
                         radial-gradient(circle at 80% 20%,rgba(168,207,255,.15) 0%,transparent 50%),
                         radial-gradient(circle at 40% 80%,rgba(218,232,252,.2) 0%,transparent 50%)`,
        animation:"float 6s ease-in-out infinite"
      }}/>
      <div style={{position:"absolute",inset:0,pointerEvents:"none"}}>
        {Array.from({length:15}).map((_,i)=>(
          <div key={i} style={{
            position:"absolute",
            width:Math.random()*4+2,
            height:Math.random()*4+2,
            background:"rgba(66,139,255,.3)",
            borderRadius:"50%",
            left:`${Math.random()*100}%`,
            top:`${Math.random()*100}%`,
            animation:`particle-float ${Math.random()*3+2}s linear infinite`,
            animationDelay:`${Math.random()*2}s`
          }}/>
        ))}
      </div>

      {/* ───── stats section (hidden <768 px) ───── */}
      <div className="container position-relative" style={{zIndex:2}}>
        <div className="row mb-5 d-none d-md-flex">
          <div className="col-12">
            <div className="d-flex justify-content-center mb-4">
              <div className="stat-badge">🎯 Trusted by Industry Leaders</div>
            </div>
            <div className="row gy-4 gx-3 justify-content-center">
              {stats.map((s,i)=>(
                <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                  <div
                    className="rounded-4 text-center h-100 stat-box"
                    style={{
                      background:"rgba(255,255,255,.85)",
                      backdropFilter:"blur(10px)",
                      border:"1px solid rgba(66,139,255,.2)",
                      padding:"18px 12px",
                      fontSize:"90%",
                      transform:animateStats?"translateY(0)":"translateY(30px)",
                      opacity:animateStats?1:0,
                      transition:`all .4s cubic-bezier(.4,0,.2,1) ${i*0.1}s`,
                      cursor:"pointer"
                    }}
                    onMouseEnter={e=>{
                      e.currentTarget.style.transform="translateY(-6px) scale(1.03)";
                      e.currentTarget.style.boxShadow="0 14px 36px rgba(66,139,255,.22)";
                    }}
                    onMouseLeave={e=>{
                      e.currentTarget.style.transform="translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow="none";
                    }}
                  >
                    <div style={{fontSize:"1.7rem"}}>{s.icon}</div>
                    <div style={{fontSize:"1.75rem",fontWeight:700,color:"#428bff"}}>{s.number}</div>
                    <div style={{fontSize:".85rem",color:"#5a6b8c",fontWeight:500}}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ───── main content row ───── */}
      <div className="container py-4 position-relative" style={{zIndex:2}}>
        <div className="row g-4 align-items-center justify-content-between">

          {/* ─────────── left: logo + socials ─────────── */}
          <div className="col-lg-6 col-md-12">
            <div className="logo-social-wrapper d-flex align-items-center flex-wrap gap-4">

              {/* Logo */}
              <img src={logo} alt="Techstiq logo" className="footer-logo"/>

              {/* heading + icons */}
              <div className="connect-block d-flex flex-column">
                <h6 className="connect-heading mb-2">Connect With Us</h6>
                <div className="social-icons-row d-flex flex-wrap align-items-center gap-2">
                  {[
                    { icon:"fab fa-linkedin-in", color:"#0077b5",   url:"https://www.linkedin.com/company/techstiq/",                                         name:"LinkedIn" },
                    { icon:"fab fa-instagram",    color:"#E4405F",  url:"https://www.instagram.com/techstiq?utm_source=qr&igsh=ejRiaTIyajVmc2Jr",             name:"Instagram"},
                    { icon:"fab fa-facebook-f",   color:"#1877F2",  url:"https://www.facebook.com/share/1CNEYPbsXN/?mibextid=qi2Omg",                       name:"Facebook" },
                    { icon:"fab fa-x",            color:"#000000",  url:"https://x.com/Thetechstiq?t=M3RquO1wgZ2uTcoezu712Q&s=08",                           name:"Twitter"  },
                    { icon:"fab fa-youtube",      color:"#FF0000",  url:"https://youtube.com/@techstiq?si=JCdJ8vi_XcQXlJXc",                                name:"YouTube"  },
                    { icon:"fas fa-envelope",     color:"#D44638",  url:"#",                                                                                name:"Email"    }
                  ].map((s,i)=>(
                    <a
                      key={i}
                      href={s.name==="Email"?"#":s.url}
                      target={s.name==="Email"?"_self":"_blank"}
                      rel="noopener noreferrer"
                      onClick={s.name==="Email"?(e)=>{e.preventDefault();handleEmailClick();}:undefined}
                      className="d-inline-flex align-items-center justify-content-center social-icon"
                      style={{
                        background:"rgba(255,255,255,.95)",
                        width:44,height:44,borderRadius:12,
                        fontSize:"1.1rem",color:s.color,
                        border:"1px solid rgba(66,139,255,.15)",
                        boxShadow:"0 3px 12px rgba(0,0,0,.08)",
                        transition:"all .3s cubic-bezier(.4,0,.2,1)",
                        textDecoration:"none"
                      }}
                      onMouseEnter={e=>{
                        e.currentTarget.style.transform="translateY(-3px) scale(1.1)";
                        e.currentTarget.style.boxShadow=`0 8px 20px ${s.color}30`;
                      }}
                      onMouseLeave={e=>{
                        e.currentTarget.style.transform="none";
                        e.currentTarget.style.boxShadow="0 3px 12px rgba(0,0,0,.08)";
                      }}
                    >
                      <i className={s.icon}/>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ─────────── right: WhatsApp updates ─────────── */}
          <div className="col-lg-5 col-md-12">
            <div className="whatsapp-container">
              <div className="d-flex align-items-center mb-3">
                <i className="fab fa-whatsapp me-3" style={{color:"#25D366",fontSize:"2rem"}}/>
                <div>
                  <h5 style={{margin:0,fontSize:"1.2rem",fontWeight:600}}>WhatsApp Updates</h5>
                  <small style={{color:"#5a6b8c",fontSize:".9rem"}}>Get instant notifications</small>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="whatsapp-form">
                <div className="input-group">
                  <span className="country-code">🇮🇳 +</span>
                  <input
                    type="tel"
                    className="phone-input"
                    placeholder="Enter Phone No"
                    value={phoneNumber}
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                  />
                  <button type="submit" className="submit-btn">Submit</button>
                </div>
              </form>

              <div className="text-center mt-3">
                <small style={{color:"#5a6b8c",fontSize:".85rem"}}>
                  💬 Get real-time project updates&nbsp;&amp;&nbsp;support
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ───── internal CSS ───── */}
      <style jsx>{`
        .footer-logo{height:60px;width:auto;object-fit:contain}
        .connect-heading{color:#1a2a52;font-weight:600;font-size:1.1rem;user-select:none}
        .whatsapp-container{
          background:linear-gradient(135deg,rgba(37,211,102,.08) 0%,rgba(25,169,82,.08) 100%);
          border:1px solid rgba(37,211,102,.25);
          backdrop-filter:blur(10px);padding:1.5rem;border-radius:16px
        }
        .input-group{display:flex;gap:.5rem;align-items:center}
        .country-code{color:#5a6b8c;font-size:.9rem;font-weight:500;min-width:40px}
        .phone-input{
          flex:1;background:#fff;color:#1a2a52;padding:12px 16px;border-radius:12px;
          border:2px solid rgba(37,211,102,.2);font-size:.95rem;transition:all .3s ease;min-width:0
        }
        .phone-input:focus{border-color:#25D366;box-shadow:0 0 0 3px rgba(37,211,102,.1)}
        .submit-btn{
          background:linear-gradient(135deg,#25D366 0%,#1ea952 100%);
          border:none;color:#fff;padding:12px 20px;border-radius:12px;font-weight:600;
          font-size:.95rem;cursor:pointer;transition:all .3s cubic-bezier(.4,0,.2,1)
        }
        .submit-btn:hover{transform:translateY(-2px) scale(1.05);box-shadow:0 8px 25px rgba(37,211,102,.4)}

        .stat-badge{
          background:rgba(66,139,255,.12);padding:6px 18px;border-radius:24px;
          border:1px solid rgba(66,139,255,.2);font-size:.85rem;font-weight:600;color:#428bff;user-select:none
        }

        /* responsive tweaks */
        @media(max-width:991.98px){
          .logo-social-wrapper{justify-content:center;text-align:center}
          .connect-block{align-items:center}
        }
        @media(max-width:575.98px){
          .social-icon{width:40px!important;height:40px!important;font-size:1rem!important}
          .logo-social-wrapper{gap:1.25rem}
          .whatsapp-container{padding:1.25rem}
          .input-group{flex-direction:column;gap:.75rem}
          .phone-input,.submit-btn{width:100%}
          .country-code{align-self:flex-start;margin-left:16px;margin-bottom:-8px}
        }

        /* float + particle animations */
        @keyframes float{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-10px) rotate(1deg)}}
        @keyframes particle-float{
          0%{transform:translateY(0) rotate(0);opacity:0}
          10%{opacity:1}90%{opacity:1}
          100%{transform:translateY(-100px) rotate(360deg);opacity:0}
        }
      `}</style>
    </footer>
  );
}
