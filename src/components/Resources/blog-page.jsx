import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BlogList() {
  // Updated demo blog data for tech topics
  const blogPosts = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      description: "Understanding the fundamentals of ML algorithms and applications.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Building Modern Web Applications",
      description: "React, Node.js, and full-stack development best practices.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Understanding Large Language Models",
      description: "Deep dive into LLMs like GPT, BERT, and their applications.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Data Science with Python",
      description: "Pandas, NumPy, and data analysis techniques for beginners.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      title: "AI Ethics and Responsible Development",
      description: "Building ethical AI systems and understanding bias in algorithms.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Deep Learning Neural Networks",
      description: "CNN, RNN, and transformer architectures explained.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop"
    },
    {
      id: 7,
      title: "Frontend Development Trends 2024",
      description: "Next.js, TypeScript, and modern JavaScript frameworks.",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&h=300&fit=crop"
    },
    {
      id: 8,
      title: "Natural Language Processing",
      description: "Text processing, sentiment analysis, and chatbot development.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop"
    },
    {
      id: 9,
      title: "Data Visualization Mastery",
      description: "Creating compelling charts and dashboards with D3.js and Tableau.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    }
  ];

  return (
    <div 
      className="min-vh-100 d-flex flex-column"
      style={{ 
        backgroundColor: '#dbeafe', // light blue background
        fontFamily: 'Newsreader, "Noto Sans", sans-serif',
        overflowX: 'hidden'
      }}
    >
      <div className="container-fluid flex-grow-1 d-flex flex-column">
        {/* Main Content */}
        <div className="row justify-content-center py-5" style={{ paddingLeft: '160px', paddingRight: '160px' }}>
          <div className="col-12" style={{ maxWidth: '960px' }}>
            {/* Header */}
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 p-4">
              <h1 
                className="fw-bold mb-0" 
                style={{ 
                  color: '#1e3a8a', // blue-900 
                  fontSize: '32px',
                  letterSpacing: '-0.025em',
                  minWidth: '288px'
                }}
              >
                Tech & AI Blog Posts
              </h1>
            </div>

            {/* Blog Grid */}
            <div className="row g-3 p-4">
              {blogPosts.map((post) => (
                <div key={post.id} className="col-lg-4 col-md-6 col-sm-6">
                  <div className="card h-100 border-0 shadow-sm blog-card">
                    <div 
                      className="card-img-top blog-image"
                      style={{
                        backgroundImage: `url("${post.image}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '200px',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <div className="card-body">
                      <h5 
                        className="card-title fw-medium mb-2 blog-title"
                        style={{ 
                          color: '#1e3a8a', // blue-900
                          fontSize: '16px',
                          lineHeight: '1.5',
                          cursor: 'pointer',
                          transition: 'color 0.2s ease'
                        }}
                      >
                        {post.title}
                      </h5>
                      <p 
                        className="card-text"
                        style={{ 
                          color: '#1d4ed8', // blue-700
                          fontSize: '14px',
                          lineHeight: '1.4',
                          margin: 0
                        }}
                      >
                        {post.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto">
          <div className="container d-flex justify-content-center">
            <div className="row w-100" style={{ maxWidth: '960px' }}>
              <div className="col-12">
                <footer className="d-flex flex-column gap-4 px-3 py-5 text-center">
                  <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
                    <a 
                      href="#" 
                      className="text-decoration-none footer-link"
                      style={{ 
                        color: '#1d4ed8', // blue-700
                        fontSize: '16px',
                        minWidth: '160px',
                        transition: 'color 0.2s ease'
                      }}
                    >
                      Terms of Service
                    </a>
                    <a 
                      href="#" 
                      className="text-decoration-none footer-link"
                      style={{ 
                        color: '#1d4ed8', // blue-700
                        fontSize: '16px',
                        minWidth: '160px',
                        transition: 'color 0.2s ease'
                      }}
                    >
                      Privacy Policy
                    </a>
                    <a 
                      href="#" 
                      className="text-decoration-none footer-link"
                      style={{ 
                        color: '#1d4ed8', // blue-700
                        fontSize: '16px',
                        minWidth: '160px',
                        transition: 'color 0.2s ease'
                      }}
                    >
                      Contact Us
                    </a>
                  </div>
                  <p 
                    className="mb-0"
                    style={{ 
                      color: '#1d4ed8', // blue-700
                      fontSize: '16px',
                      lineHeight: '1.5'
                    }}
                  >
                    @2024 Tech Bloggr. All rights reserved.
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Custom CSS for hover effects */}
      <style jsx>{`
        .blog-card:hover .blog-image {
          transform: scale(1.05);
        }
        
        .blog-title:hover {
          color: #1d4ed8 !important;
        }
        
        .footer-link:hover {
          color: #1e3a8a !important;
        }
        
        .blog-card {
          transition: box-shadow 0.3s ease;
        }
        
        .blog-card:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
        }
        
        @media (max-width: 768px) {
          .row.justify-content-center.py-5 {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
        
        @media (max-width: 576px) {
          .col-sm-6 {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
