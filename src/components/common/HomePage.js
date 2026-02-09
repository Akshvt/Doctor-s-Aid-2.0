import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/common/HomePage.css";

// Icons
const DoctorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const PatientIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const StaffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const HomePage = () => {
  const navigate = useNavigate();

  const roles = [
    {
      id: 'doctor',
      title: 'Doctor',
      description: 'Access patient records, manage appointments, and view predictions',
      icon: <DoctorIcon />,
      path: '/doctor-login',
      gradient: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
    },
    {
      id: 'patient',
      title: 'Patient',
      description: 'View your medical records and upcoming appointments',
      icon: <PatientIcon />,
      path: '/patient',
      gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    },
    {
      id: 'staff',
      title: 'Staff',
      description: 'Manage patient intake, records, and administrative tasks',
      icon: <StaffIcon />,
      path: '/staff-login',
      gradient: 'linear-gradient(135deg, #475569 0%, #1E293B 100%)',
    },
  ];

  return (
    <div className="homepage">
      {/* Animated Background */}
      <div className="bg-gradient"></div>
      <div className="bg-grid"></div>

      {/* Floating Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Content */}
      <main className="homepage-content">
        {/* Header */}
        <header className="homepage-header slide-up">
          <div className="logo-mark">
            <svg viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="12" fill="url(#logo-gradient)" />
              <path d="M24 12v24M12 24h24" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="48" y2="48">
                  <stop stopColor="#3B82F6" />
                  <stop offset="1" stopColor="#1D4ED8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 className="homepage-title">
            Doctor's <span className="text-accent">Aid</span>
          </h1>
          <p className="homepage-subtitle">
            A modern healthcare management platform designed for efficiency and care
          </p>
        </header>

        {/* Role Selection */}
        <section className="role-section">
          <h2 className="section-title slide-up">Select your role to continue</h2>

          <div className="role-cards">
            {roles.map((role, index) => (
              <article
                key={role.id}
                className="role-card slide-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                onClick={() => navigate(role.path)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate(role.path)}
              >
                <div className="role-icon" style={{ background: role.gradient }}>
                  {role.icon}
                </div>
                <div className="role-content">
                  <h3 className="role-title">{role.title}</h3>
                  <p className="role-description">{role.description}</p>
                </div>
                <div className="role-arrow">
                  <ArrowIcon />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="homepage-footer">
          <p>© 2024 Doctor's Aid. Built with care for healthcare.</p>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
