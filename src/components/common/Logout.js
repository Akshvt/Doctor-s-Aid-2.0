import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/common/Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="logout-page">
      {/* Background */}
      <div className="logout-bg"></div>
      <div className="logout-grid"></div>

      {/* Content */}
      <div className="logout-card slide-up">
        <div className="logout-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </div>
        <h1>Logging out...</h1>
        <p>Thank you for using Doctor's Aid</p>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <span className="redirect-text">Redirecting to home page</span>
      </div>
    </div>
  );
};

export default Logout;
