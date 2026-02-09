import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/doctor/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="/logo192.png" alt="Doctor's Aid Logo" className="sidebar-logo" />
        <h2>Doctor's Aid</h2>
      </div>
      <nav className="nav-menu">
        <NavLink to="/doctor" className="nav-item" activeClassName="active" end>
          Dashboard
        </NavLink>

        <NavLink to="/appointments" className="nav-item" activeClassName="active">
          Appointments
        </NavLink>

        <NavLink to="/saved-patient-info" className="nav-item" activeClassName="active">
          Patient Details
        </NavLink>

        {/* Predictions dropdown */}
        <div className="dropdown">
          <div className="nav-item">Predictions</div>
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
          Profile
        </NavLink>

        <NavLink to="/logout" className="nav-item">
          Logout
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
