import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/doctor/Doctor_Main_Page.css";

// Icons
const DashboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
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

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const LogoutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const Doctor_Main_Page = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const menuItems = [
    { path: '/doctor', icon: <DashboardIcon />, label: 'Dashboard' },
    { path: '/appointments', icon: <CalendarIcon />, label: 'Appointments' },
    { path: '/patients', icon: <UsersIcon />, label: 'Patients' },
    { path: '/prediction/heart-diseases', icon: <HeartIcon />, label: 'Heart Prediction' },
    { path: '/profile', icon: <UserIcon />, label: 'Profile' },
  ];

  const stats = [
    { label: 'Appointments Today', value: '8', trend: '+2' },
    { label: 'Total Patients', value: '124', trend: '+12' },
    { label: 'Pending Reviews', value: '5', trend: '' },
    { label: 'This Week', value: '32', trend: '+8' },
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <svg viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="12" fill="url(#side-logo-grad)" />
              <path d="M24 12v24M12 24h24" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <defs>
                <linearGradient id="side-logo-grad" x1="0" y1="0" x2="48" y2="48">
                  <stop stopColor="#3B82F6" />
                  <stop offset="1" stopColor="#1D4ED8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {sidebarOpen && <span className="sidebar-brand">Doctor's Aid</span>}
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              end={item.path === '/doctor'}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </NavLink>
          ))}
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
        {/* Top Bar */}
        <header className="dashboard-header">
          <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <MenuIcon />
          </button>
          <div className="header-content">
            <h1>Welcome back, Doctor</h1>
            <p>Here's what's happening with your patients today.</p>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              {stat.trend && <div className="stat-trend">{stat.trend} this week</div>}
            </div>
          ))}
        </section>

        {/* Quick Actions */}
        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <button className="action-card" onClick={() => navigate('/appointments')}>
              <CalendarIcon />
              <span>View Appointments</span>
            </button>
            <button className="action-card" onClick={() => navigate('/patients')}>
              <UsersIcon />
              <span>Patient Records</span>
            </button>
            <button className="action-card" onClick={() => navigate('/prediction/heart-diseases')}>
              <HeartIcon />
              <span>Heart Prediction</span>
            </button>
            <button className="action-card" onClick={() => navigate('/profile')}>
              <UserIcon />
              <span>My Profile</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Doctor_Main_Page;
