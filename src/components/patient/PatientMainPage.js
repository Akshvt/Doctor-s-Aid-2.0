import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/patient/PatientMainPage.css";

// Icons
const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ActivityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const LogoutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const PatientMainPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FileIcon />,
      title: "Patient Details",
      description: "View your personal and medical information",
      path: "/saved-patient-info"
    },
    {
      icon: <CalendarIcon />,
      title: "Appointments",
      description: "Check your upcoming appointments",
      path: "/appointments"
    },
    {
      icon: <HeartIcon />,
      title: "Health Predictions",
      description: "AI-powered health risk assessments",
      path: "/prediction/heart-diseases"
    },
    {
      icon: <ActivityIcon />,
      title: "Health Records",
      description: "Access your complete medical history",
      path: "/saved-patient-info"
    }
  ];

  return (
    <div className="patient-main">
      {/* Background */}
      <div className="patient-main-bg"></div>
      <div className="patient-main-grid"></div>
      <div className="patient-main-orb orb-1"></div>
      <div className="patient-main-orb orb-2"></div>

      {/* Header */}
      <header className="patient-main-header slide-up">
        <div className="header-left">
          <div className="avatar">
            <span>P</span>
          </div>
          <div className="greeting">
            <h1>Welcome back!</h1>
            <p>Access your healthcare services below</p>
          </div>
        </div>
        <button className="logout-btn" onClick={() => navigate('/logout')}>
          <LogoutIcon />
          <span>Logout</span>
        </button>
      </header>

      {/* Services Grid */}
      <section className="services-section">
        <h2 className="section-title slide-up">Your Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <article
              key={index}
              className="service-card slide-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onClick={() => navigate(service.path)}
            >
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-arrow">
                <ArrowIcon />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Help Section */}
      <section className="help-section slide-up" style={{ animationDelay: '0.5s' }}>
        <div className="help-card">
          <div className="help-content">
            <h3>Need Assistance?</h3>
            <p>Our support team is available 24/7 to help you with any questions.</p>
          </div>
          <button className="help-btn">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default PatientMainPage;
