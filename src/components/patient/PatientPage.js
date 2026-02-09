import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/patient/PatientPage.css";

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PatientPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    navigate("/patient-main");
  };

  const features = [
    "View your medical records securely",
    "Track upcoming appointments",
    "Access health predictions",
    "Communicate with your care team"
  ];

  return (
    <div className="patient-page">
      {/* Background Elements */}
      <div className="patient-bg-gradient"></div>
      <div className="patient-bg-grid"></div>
      <div className="patient-orb patient-orb-1"></div>
      <div className="patient-orb patient-orb-2"></div>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/')}>
        <BackIcon />
        <span>Back</span>
      </button>

      <div className="patient-container">
        {/* Hero Section */}
        <section className="patient-hero slide-up">
          <div className="hero-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <h1>Welcome to <span className="text-accent">Doctor's Aid</span></h1>
          <p className="hero-subtitle">Your trusted healthcare companion for better health management</p>
        </section>

        {/* Features */}
        <section className="features-section slide-up" style={{ animationDelay: '0.1s' }}>
          <h2>What you can do</h2>
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-check"><CheckIcon /></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Login Card */}
        <section className="patient-login-card slide-up" style={{ animationDelay: '0.2s' }}>
          <h3>Patient Login</h3>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <span className="input-icon"><UserIcon /></span>
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-group">
              <span className="input-icon"><LockIcon /></span>
              <input type="password" placeholder="Password" required />
            </div>
            <button
              type="submit"
              className={`login-btn patient ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="spinner"></span>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRightIcon />
                </>
              )}
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="patient-footer">
          <p>© 2024 Doctor's Aid. Your health, our priority.</p>
        </footer>
      </div>
    </div>
  );
};

export default PatientPage;
