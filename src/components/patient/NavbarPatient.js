import React from "react";
import "../../styles/patient/NavbarPatient.css";

const NavbarPatient = () => {
  return (
    <nav className="navbar-patient">
      <div className="logo">
        <img src="/logo192.png" alt="Doctor's Aid Logo" className="sidebar-logo" />
        Doc Assist
      </div>
      <ul className="nav-links">
        <li><a href="#personal-info">Personal Info</a></li>
        <li><a href="#medical-history">Medical History</a></li>
        <li><a href="#prediction">Prediction</a></li>
        <li><a href="#requirements">Requirements</a></li>
      </ul>
    </nav>
  );
};

export default NavbarPatient;
