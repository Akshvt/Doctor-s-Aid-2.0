import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/doctor/Doctor_Profile.css";

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
  </svg>
);

const Doctor_Profile = () => {
  const navigate = useNavigate();

  const doctor = {
    name: "Dr. John Smith",
    email: "dr.smith@hospital.com",
    phone: "+1 234 567 8900",
    specialty: "Cardiology",
    licenseNo: "MED-2024-1234",
    experience: "15 years",
    education: "Harvard Medical School",
    department: "Cardiology Department"
  };

  return (
    <div className="profile-page">
      {/* Background */}
      <div className="profile-bg"></div>
      <div className="profile-grid"></div>
      <div className="profile-orb orb-1"></div>
      <div className="profile-orb orb-2"></div>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/doctor')}>
        <BackIcon />
        <span>Back to Dashboard</span>
      </button>

      {/* Profile Card */}
      <div className="profile-card slide-up">
        {/* Header */}
        <div className="profile-header">
          <div className="profile-avatar">
            <span>{doctor.name.split(' ').map(n => n[0]).join('')}</span>
          </div>
          <div className="profile-title">
            <h1>{doctor.name}</h1>
            <span className="specialty-badge">{doctor.specialty}</span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="profile-info-grid">
          <div className="info-item">
            <label>Email</label>
            <p>{doctor.email}</p>
          </div>
          <div className="info-item">
            <label>Phone</label>
            <p>{doctor.phone}</p>
          </div>
          <div className="info-item">
            <label>License No.</label>
            <p>{doctor.licenseNo}</p>
          </div>
          <div className="info-item">
            <label>Experience</label>
            <p>{doctor.experience}</p>
          </div>
          <div className="info-item">
            <label>Education</label>
            <p>{doctor.education}</p>
          </div>
          <div className="info-item">
            <label>Department</label>
            <p>{doctor.department}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="profile-actions">
          <button className="btn-secondary">Edit Profile</button>
          <button className="btn-primary">Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default Doctor_Profile;
