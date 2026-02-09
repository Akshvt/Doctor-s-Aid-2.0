import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/staff/Staff_Main_Page.css";

// Icons
const DashboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const LogoutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Staff_Main_Page = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [predictionsOpen, setPredictionsOpen] = useState(false);
  const [recordsOpen, setRecordsOpen] = useState(false);

  const menuItems = [
    { path: '/staff-home', icon: <DashboardIcon />, label: 'Dashboard' },
    { path: '/staff-appointments', icon: <CalendarIcon />, label: 'Appointments' },
    { path: '/saved-patient-info', icon: <UsersIcon />, label: 'Patient Records' },
    { path: '/staff-profile', icon: <UserIcon />, label: 'Profile' },
  ];

  const stats = [
    { label: 'Patients Today', value: '12', trend: '+3' },
    { label: 'Appointments', value: '18', trend: '+5' },
    { label: 'Pending Tasks', value: '7', trend: '' },
    { label: 'Records Updated', value: '24', trend: '+8' },
  ];

  const quickActions = [
    { label: 'Book Appointment', icon: <CalendarIcon />, path: '/book-appointment' },
    { label: 'Add Patient', icon: <UsersIcon />, path: '/staff-patient-info' },
    { label: 'IPD Records', icon: <FileIcon />, path: '/ipd-records' },
    { label: 'OPD Records', icon: <FileIcon />, path: '/opd-records' },
  ];

  return (
    <div className="dashboard-layout staff-dashboard">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <svg viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="12" fill="url(#staff-logo-grad)" />
              <path d="M24 12v24M12 24h24" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <defs>
                <linearGradient id="staff-logo-grad" x1="0" y1="0" x2="48" y2="48">
                  <stop stopColor="#475569" />
                  <stop offset="1" stopColor="#1E293B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {sidebarOpen && <span className="sidebar-brand">Doctor's Aid</span>}
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} end={item.path === '/staff-home'}>
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </NavLink>
          ))}

          {/* Predictions Dropdown */}
          {sidebarOpen && (
            <div className="nav-dropdown">
              <button className={`nav-item dropdown-toggle ${predictionsOpen ? 'open' : ''}`} onClick={() => setPredictionsOpen(!predictionsOpen)}>
                <span className="nav-icon"><HeartIcon /></span>
                <span className="nav-label">Predictions</span>
                <span className="chevron"><ChevronIcon /></span>
              </button>
              {predictionsOpen && (
                <div className="dropdown-menu">
                  <NavLink to="/prediction/heart-diseases" className="dropdown-item">Heart Disease</NavLink>
                  <NavLink to="/prediction/diabetes" className="dropdown-item">Diabetes</NavLink>
                </div>
              )}
            </div>
          )}

          {/* Records Dropdown */}
          {sidebarOpen && (
            <div className="nav-dropdown">
              <button className={`nav-item dropdown-toggle ${recordsOpen ? 'open' : ''}`} onClick={() => setRecordsOpen(!recordsOpen)}>
                <span className="nav-icon"><FileIcon /></span>
                <span className="nav-label">Records Entry</span>
                <span className="chevron"><ChevronIcon /></span>
              </button>
              {recordsOpen && (
                <div className="dropdown-menu">
                  <NavLink to="/ipd-records" className="dropdown-item">IPD Records</NavLink>
                  <NavLink to="/opd-records" className="dropdown-item">OPD Records</NavLink>
                </div>
              )}
            </div>
          )}
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item logout" onClick={() => navigate('/logout')}>
            <span className="nav-icon"><LogoutIcon /></span>
            {sidebarOpen && <span className="nav-label">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <MenuIcon />
          </button>
          <div className="header-content">
            <h1>Staff Dashboard</h1>
            <p>Manage patients, appointments, and records efficiently.</p>
          </div>
        </header>

        <section className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              {stat.trend && <div className="stat-trend">{stat.trend} today</div>}
            </div>
          ))}
        </section>

        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            {quickActions.map((action, index) => (
              <button key={index} className="action-card" onClick={() => navigate(action.path)}>
                {action.icon}
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Staff_Main_Page;
