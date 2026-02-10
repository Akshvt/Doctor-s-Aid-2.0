import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/doctor/Sidebar.css";

const DashboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const PredictionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const LogoutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon menu-btn">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const Sidebar = ({ isOpen = true, toggle }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <img src="/logo192.png" alt="Doctor's Aid Logo" className="sidebar-logo" />
          {isOpen && <h2>Doctor's Aid</h2>}
        </div>
        <button className="sidebar-toggle" onClick={toggle}>
          <MenuIcon />
        </button>
      </div>

      <nav className="nav-menu">
        <NavLink to="/doctor" className="nav-item" activeClassName="active" end>
          <DashboardIcon />
          {isOpen && <span>Dashboard</span>}
        </NavLink>

        <NavLink to="/appointments" className="nav-item" activeClassName="active">
          <CalendarIcon />
          {isOpen && <span>Appointments</span>}
        </NavLink>

        <NavLink to="/saved-patient-info" className="nav-item" activeClassName="active">
          <UsersIcon />
          {isOpen && <span>Patient Details</span>}
        </NavLink>

        {/* Predictions dropdown */}
        <div className="dropdown">
          <div className="nav-item prediction-trigger">
            <PredictionIcon />
            {isOpen && <span>Predictions</span>}
          </div>
          <div className="dropdown-content">
            <NavLink to="/prediction/heart-diseases" className="sub-nav-item" activeClassName="active">
              Heart Disease
            </NavLink>
            <NavLink to="/prediction/diabetes" className="sub-nav-item" activeClassName="active">
              Diabetes
            </NavLink>
          </div>
        </div>

        <NavLink to="/profile" className="nav-item" activeClassName="active">
          <UserIcon />
          {isOpen && <span>Profile</span>}
        </NavLink>

        <NavLink to="/logout" className="nav-item logout-btn">
          <LogoutIcon />
          {isOpen && <span>Logout</span>}
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
